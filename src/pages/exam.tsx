import { useParams, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useContext } from "react";
import { NavbarContext } from "../context/navbarcontext";

const Exam = () => {
  const route = useParams({ from: undefined, strict: true });
  const navigate = useNavigate();
  const { hide, nohide } = useContext(NavbarContext);
  const [isFullScreen, setisFullScreen] = useState(false);

  useEffect(() => {
    const enableFullscreen = async () => {
      try {
        await document.getElementById("exam")?.requestFullscreen();
        setisFullScreen(true);
      } catch (error) {
        setisFullScreen(false);
      }
    };

    enableFullscreen();

    const fullscreenChangeHandler = () => {
      if (document.fullscreenElement) {
        nohide();
        setisFullScreen(true);
      } else {
        hide();
        const confirmationMessage =
          "Are you sure you want to leave fullscreen mode?";
        window.addEventListener("beforeunload", (event) => {
          event.returnValue = confirmationMessage;
        });
        if (window.confirm(confirmationMessage)) {
          navigate({ to: "/subject", replace: true });
          setisFullScreen(false);
        } else {
          enableFullscreen();
        }
      }
    };

    const reloadHandler = (e: Event) => {
      e.preventDefault();
      alert("reload");
    };

    window.addEventListener("beforeunload", reloadHandler);
    document.addEventListener("fullscreenchange", fullscreenChangeHandler);
    return () => {
      document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
      window.removeEventListener("beforeunload", reloadHandler);
    };
  }, [hide, navigate, nohide, route.id]);

  return (
    <div id="exam">
      {isFullScreen ? "you are in full screen" : "you are not in full screen"}
      {route.id}
    </div>
  );
};

export default Exam;
