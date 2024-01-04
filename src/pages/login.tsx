import { useContext, useEffect } from "react";
import { DialogBoxContext } from "../context/dailogbox";
const Login = () => {
  const { setState, setType } = useContext(DialogBoxContext);
  useEffect(() => {
    setState(true);
    setType(1);
}, [setState, setType]);
  return <div className="top">This is a login Page</div>;
};
export default Login;
