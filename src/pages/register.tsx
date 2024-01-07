import { useContext, useState } from "react";
import { DialogBoxContext } from "../context/dailogbox";
const Register = () => {
  const { setType } = useContext(DialogBoxContext);
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleLogin = () => {
    if (!username || !password || !email) {
      alert("Please enter username and password");
      return;
    }
    alert(`username: ${username}, password: ${password}`);
    fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert(data.message);
          setType(1);
        } else {
          alert("Register failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div id="login">
      <h1>Register</h1>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
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
            setType(1);
          }}
        >
          login
        </button>
        <button onClick={handleLogin}>Register</button>
      </div>
    </div>
  );
};
export default Register;
