import { useParams, useSearch } from "@tanstack/react-router";
import { useEffect, useContext } from "react";
// import PreTest from "../components/exam.pretext";
import ExTest from "../components/exam.extest";
import { AuthContext } from "../context/authcontext";
import { DialogBoxContext } from "../context/dailogbox";

const Exam = () => {
  const route = useParams({ from: undefined, strict: true });
  const { setState, setType } = useContext(DialogBoxContext);
  const { type } = useSearch({ from: undefined, strict: true });
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const message =
        "Are you sure you want to leave? Your progress will be lost.";
      event.returnValue = message;
      return message;
    };
    if (!user.isLogged) {
      setState(true);
      setType(3);
      localStorage.setItem(
        "warn-message",
        "Please Login to continue,you will be redirected to login page in 2 seconds"
      );
      setTimeout(() => {
        setType(1);
      }, 2000);
    } else {
      const element = document.querySelector("main");
      if (element?.requestFullscreen) {
        element.requestFullscreen();
      }
      window.addEventListener("beforeunload", handleBeforeUnload);
    }
  }, []);
  return (
    <div id="exam">
      {/* <PreTest id={route.id} /> */}
      <ExTest id={route.id} type={type} />
    </div>
  );
};

export default Exam;
