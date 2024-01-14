import { useParams, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useContext } from "react";
import { NavbarContext } from "../context/navbarcontext";

const Exam = () => {
  const route = useParams({ from: undefined, strict: true });
  const navigate = useNavigate();
  const { hide, nohide } = useContext(NavbarContext);
  const [isFullScreen, setIsFullScreen] = useState(false);
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
        setIsFullScreen(false);
        exitHandler();
      }
    };
    const exitHandler = () => {
      hide();
      alert("You have exited from full Exam is going to be submitted");
      navigate({ to: "/exam/$id/result", replace: true });
    };
    window.addEventListener("beforeunload", (event) => {
      event.preventDefault();
      exitHandler();
    });
    document.addEventListener("fullscreenchange", fullscreenChangeHandler);
    return () => {
      document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
    };
  }, [hide, navigate, nohide, route.id]);

  return (
    <div id="exam">
      {isFullScreen ? (
        <>you are in full screen</>
      ) : (
        "you are not in full screen"
      )}
      {route.id}
      <button
        onClick={() => {
          hide();
          navigate({ to: "/exam/$id/result", replace: true });
        }}
      >
        Done
      </button>
    </div>
  );
};

export default Exam;
