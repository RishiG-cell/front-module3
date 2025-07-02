import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Loginform = ({ API_URL }) => {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const { authenticateUser } = useContext(AuthContext);
  const nav = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const loginUser = { username, password };
    try {
      const res = await axios.post(`${API_URL}/auth/login`, loginUser);
      localStorage.setItem("authToken", res.data.authToken);
      await authenticateUser();
      nav("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form className="loginform" onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => SetUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
          />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Loginform;
