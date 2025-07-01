import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import NewPost from "../components/NewPost";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const FeedPage = () => {
  const { currentUser } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5005/post/feed")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5005/post/delete/${id}`)
      .then((res) => {
        nav("/profile");
      })
      .catch((error) => console.log(error));
  };

  const handleLike = (id) => {
    axios
      .post(`http://localhost:5005/post/liked/${id}`)
      .then((res) => {
        const updatedPosts = posts.map((onePost) => {
          if (onePost._id === id) {
            return res.data;
          } else {
            return onePost;
          }
        });
        setPosts(updatedPosts);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="feedpage">
      <Sidebar />
      <div className="feed-container">
        {posts.map((onePost) => {
          return (
            <div className="feed-card" key={onePost._id}>
              <Link to={`/post-profile/${onePost.user._id}`}>
                <h3>{onePost.user.username}</h3>
              </Link>
              <img src={onePost.image} />
              <div>
                <h3>{onePost.post}</h3>
              </div>
              <p>Likes : {onePost.likes}</p>
              <Link to={`/comment/${onePost._id}`}>comments</Link>
              <div className="feedbutton">
                {onePost.user._id === currentUser._id ? (
                  <button
                    onClick={() => {
                      handleDelete(onePost._id);
                    }}
                  >
                    Delete
                  </button>
                ) : null}
                <Link onClick={() => handleLike(onePost._id)}>💖</Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="feed-post">
        <NewPost posts={posts} setPosts={setPosts} />
      </div>
    </div>
  );
};

export default FeedPage;
