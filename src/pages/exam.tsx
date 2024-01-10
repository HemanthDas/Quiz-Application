import { useParams } from "@tanstack/react-router";
import { useEffect, useState, useContext } from "react";
import { NavbarContext } from "../context/navbarcontext";
const Exam = () => {
  const route = useParams({ from: undefined, strict: true });
  const { toggle } = useContext(NavbarContext);
  const [isFullScreen, setisFullScreen] = useState(false);
  useEffect(() => {
    document.body
      .requestFullscreen()
      .then(() => {
        setisFullScreen(true);
      })
      .catch(() => {
        setisFullScreen(false);
      });
    document.addEventListener("fullscreenchange", () => {
      if (document.fullscreenElement) {
        setisFullScreen(true);
      } else {
        setisFullScreen(false);
      }
    });
    window.onbeforeunload = () => {
      return "Are you sure you want to leave?";
    };
    toggle();

    return () => {
      toggle();
    };
  }, []);

  return (
    <div>
      {isFullScreen ? "you are in full screen" : "bastard"}
      {route.id}
    </div>
  );
};

export default Exam;
