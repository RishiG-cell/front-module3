import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../config/config";
import { Spotify } from "react-spotify-embed";

const PostProfielPage = () => {
  const { userId } = useParams();
  const [profileFeed, setProfileFeed] = useState({});
  useEffect(() => {
    axios
      .get(`${API_URL}/profile/user/${userId}`)
      .then((res) => {
        setProfileFeed(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="info-page">
      <h1>{profileFeed.username}'s ProfilePage</h1>
      <img src={profileFeed.image} alt={profileFeed.username} />
      <p>{profileFeed.country}</p>
      <div className="info-spot">
        <h3>{profileFeed.username}'s music mood :</h3>
        <Spotify wide link={`${profileFeed.spotify}`} />
      </div>
    </div>
  );
};

export default PostProfielPage;
