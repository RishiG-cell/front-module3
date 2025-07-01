import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const PostProfielPage = ({ API_URL }) => {
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
    </div>
  );
};

export default PostProfielPage;
