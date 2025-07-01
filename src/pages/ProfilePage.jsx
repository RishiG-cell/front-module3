import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const ProfilePage = () => {
  const { currentUser, isLoading, loggedIn } = useContext(AuthContext);
  const [profileUser, setProfileUser] = useState(null);
  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/profile/user/${currentUser._id}`)
      .then((res) => {
        setProfileUser(res.data);
        return axios.get(`${API_URL}/post/feed/${currentUser._id}`);
      })
      .then((res) => {
        setUserPost(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  if (!profileUser) {
    return <p>Loading..</p>;
  }
  return (
    <div className="profilepage">
      <div>
        <Sidebar />
      </div>
      <div className="info-page">
        <h1>{profileUser.username}'s ProfilePage</h1>
        <img src={profileUser.image} alt={profileUser.username} />
        <p>{profileUser.country}</p>
        <div className="profile-post">
          {userPost.map((onePost) => {
            return (
              <div className="profile-post-card" key={onePost._id}>
                <Link to={`/comment/${onePost._id}`}>
                  <img src={onePost.image} />
                </Link>
                <div>
                  <h3>{onePost.post}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <Link to="/post">Post</Link>
        <Link to="/update">Update profile</Link>
      </div>
    </div>
  );
};

export default ProfilePage;
