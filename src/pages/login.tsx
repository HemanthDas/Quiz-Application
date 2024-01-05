import { useContext, useEffect, useState } from "react";
import { DialogBoxContext } from "../context/dailogbox";
import { useCookies } from "react-cookie";
const Login = () => {
  const { setType, setState } = useContext(DialogBoxContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cookies, setCookie] = useCookies(["user"]);
  useEffect(() => {
    if (cookies.user) {
      alert("Already logged in");
      setState(false);
    }
  });
  const handleLogin = () => {
    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert(data.message);
          setCookie("user", data.token, { path: "/" }, { maxAge: 3600 });
          setState(false);
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div id="login">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div>
        <button
          onClick={() => {
            setType(2);
          }}
        >
          register
        </button>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};
export default Login;
