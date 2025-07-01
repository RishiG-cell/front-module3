import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CommentPage = () => {
  const { currentUser } = useContext(AuthContext);
  const [comment, SetComment] = useState("");
  const nav = useNavigate();
  const { postId } = useParams();
  const [oldcomments, setOldComments] = useState([]);

  function handleNewComment(e) {
    e.preventDefault();
    // try {
    //   const newComment = await axios.post(
    //     "http://localhost:5005/comment/create",
    //     {comment}
    //   );
    //   SetComment();
    //   nav("/feed");
    // } catch (error) {
    //   console.log(error);
    // }

    axios
      .post(`${API_URL}/comment/create`, {
        comment,
        user: currentUser._id,
        postId,
      })
      .then((res) => {
        nav("/feed");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    axios
      .get(`${API_URL}/comment/onepost/${postId}`)
      .then((res) => {
        setOldComments(res.data.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {oldcomments.map((oneComment) => {
        return (
          <div className="bubble" key={oneComment._id}>
            <div>
              <h3>{oneComment.comment}</h3>
            </div>
          </div>
        );
      })}

      <form className="bubble2" onSubmit={handleNewComment}>
        <label>
          <input
            type="text"
            value={comment}
            placeholder="message"
            onChange={(e) => SetComment(e.target.value)}
          />
        </label>
        <button>Send</button>
      </form>
    </div>
  );
};

export default CommentPage;
