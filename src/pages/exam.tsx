import { useParams, useNavigate, Outlet } from "@tanstack/react-router";
import { useEffect, useState, useContext } from "react";
import { NavbarContext } from "../context/navbarcontext";

const Exam = () => {
  const route = useParams({ from: undefined, strict: true });
  const navigate = useNavigate();
  const { hide, nohide } = useContext(NavbarContext);
  const [isFullScreen, setIsFullScreen] = useState(false);
  // const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    const enableFullscreen = async () => {
      try {
        await document.getElementById("exam")?.requestFullscreen();
        setIsFullScreen(true);
      } catch (error) {
        setIsFullScreen(false);
      }
    };

    enableFullscreen();

    const fullscreenChangeHandler = () => {
      if (document.fullscreenElement) {
        nohide();
        setIsFullScreen(true);
      } else {
        hide();
        setIsFullScreen(false);
        exitHandler({ status: false });
      }
    };
    const exitHandler = ({ status }: { status: boolean }) => {
      if (status) {
        const confirmationMessage =
          "Sorry, your exam have been submitted due to exiting full screen mode.";
        alert(confirmationMessage);
        setIsFullScreen(false);
        navigate({ to: "/subject", replace: true });
      } else {
        setIsFullScreen(true);
        navigate({ to: "/result", replace: true });
      }
    };
    window.addEventListener("beforeunload", (event) => {
      event.preventDefault();
      exitHandler({ status: true });
    });
    document.addEventListener("fullscreenchange", fullscreenChangeHandler);
    return () => {
      document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
    };
  }, [hide, navigate, nohide, route.id]);

  return (
    <div id="exam">
      {isFullScreen ? (
        <>
          you are in full screen
          <button
            onClick={() => {
              navigate({ to: "/exam/$id/result", replace: true });
            }}
          >
            Done
          </button>
        </>
      ) : (
        "you are not in full screen"
      )}
      {route.id}
      <Outlet />
    </div>
  );
};

export default Exam;
