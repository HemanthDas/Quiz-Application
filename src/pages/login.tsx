import { useContext, useEffect, useState } from "react";
import { DialogBoxContext } from "../context/dailogbox";
import { AuthContext } from "../context/authcontext";
const Login = () => {
  const { setType, setState } = useContext(DialogBoxContext);
  const { user, createUser } = useContext(AuthContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  useEffect(() => {
    if (user.isLogged) {
      setState(false);
    }
  });
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          console.log(data);
          alert(data.message);
          createUser(data.token);
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
    <form id="login" onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </div>
    </form>
  );
};
export default Login;
