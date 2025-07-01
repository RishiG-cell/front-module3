import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const UpdateUserPage = () => {
  const { currentUser } = useContext(AuthContext);
  const [profileUser, setProfileUser] = useState(null);
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [country, SetCountry] = useState("");
  const [image, SetImage] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/profile/user/${currentUser._id}`)
      .then((res) => {
        setProfileUser(res.data);
        SetUsername(res.data.username);
        SetEmail(res.data.email);
        SetCountry(res.data.country);
      })
      .catch((err) => console.log(err));
  }, []);
  if (!profileUser) {
    return <p>Loading..</p>;
  }

  function handleUpdate(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("country", country);
    formData.append("imageUrl", image);
    axios
      .put(`${API_URL}/profile/update/${currentUser._id}`, formData)
      .then((res) => {
        console.log(res);
        nav("/profile");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="profilepage">
      <Sidebar />
      <div className="updatePage">
        <h1>Update</h1>
        <form className="signupform" onSubmit={handleUpdate}>
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

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserPage;
