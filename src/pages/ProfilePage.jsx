import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { API_URL } from "../config/config";

import { Spotify } from "react-spotify-embed";

const ProfilePage = () => {
  const { currentUser, isLoading, loggedIn } = useContext(AuthContext);
  const [profileUser, setProfileUser] = useState(null);
  const [userPost, setUserPost] = useState([]);
  const [SpotifyLink, setSpotifyLink] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/profile/user/${currentUser._id}`)
      .then((res) => {
        console.log(res.data);
        setProfileUser(res.data);
        setSpotifyLink(res.data.spotify);
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

  function handleSpotify(e) {
    e.preventDefault();
    console.log(e.target.spotify.value);
    const formLinkSpotify = e.target.spotify.value;
    const spotifyData = new FormData();
    spotifyData.append("spotify", formLinkSpotify);
    axios
      .put(`${API_URL}/profile/update/${currentUser._id}`, spotifyData)
      .then((res) => {
        console.log(res.data);
        setSpotifyLink(res.data.spotify);
        setProfileUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
      <div className="spotify-link-box">
        <Spotify className="box" link={`${SpotifyLink}`} />
        <form onSubmit={handleSpotify} className="spotifylink">
          <label>
            Paste in your Spotify favorite list here !
            <input type="text" name="spotify"></input>
            <button>Submit</button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
