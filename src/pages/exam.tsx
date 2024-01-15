import { useParams, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useContext } from "react";
import { NavbarContext } from "../context/navbarcontext";
import PreTest from "../components/exam.pretext";
import ExTest from "../components/exam.extest";

const Exam = () => {
  const route = useParams({ from: undefined, strict: true });
  const navigate = useNavigate();
  const { hide, nohide } = useContext(NavbarContext);
  const [isFullScreen, setIsFullScreen] = useState(false);
  useEffect(() => {
    if (isFullScreen) return;
    const enableFullscreen = async () => {
      try {
        await document.getElementById("exam")?.requestFullscreen();
        setIsFullScreen(true);
      } catch (error) {
        setIsFullScreen(false);
      }
    };

    enableFullscreen();
    const disablef5 = (e: KeyboardEvent) => {
      if (e.key === "F5") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", disablef5);
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

    window.addEventListener("fullscreenchange", fullscreenChangeHandler);

    return () => {
      window.removeEventListener("keydown", disablef5);
      window.removeEventListener("fullscreenchange", fullscreenChangeHandler);
    };
  }, [hide, navigate, nohide, isFullScreen]);

  return (
    <div id="exam">
      <PreTest id={route.id} />
      <ExTest id={route.id} />
    </div>
  );
};

export default Exam;
