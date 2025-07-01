import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signupform = ({ API_URL }) => {
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [country, SetCountry] = useState("");

  const nav = useNavigate();

  function handleSignup(e) {
    e.preventDefault();

    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append("imageUrl", image);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("country", country);
    formData.append("password", password);

    axios
      .post(`${API_URL}/auth/signup`, formData)
      .then((res) => {
        console.log("succesful", res.data);
        nav("/auth/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1>Signup</h1>
      <form className="signupform" onSubmit={handleSignup}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => SetUsername(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
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
        <label>
          Country:
          <input
            type="text"
            value={country}
            onChange={(e) => SetCountry(e.target.value)}
          />
        </label>
        <label>
          Profile Image:
          <input type="file" name="image" />
        </label>

        <button>Signup</button>
      </form>
    </div>
  );
};

export default Signupform;
