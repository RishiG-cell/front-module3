import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = ({ posts, setPosts }) => {
  const { currentUser } = useContext(AuthContext);
  const [post, setPost] = useState("");
  const nav = useNavigate();

  async function handlePost(e) {
    e.preventDefault();
    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append("imageUrl", image);
    formData.append("user", currentUser._id);
    formData.append("post", post);

    try {
      const newPost = { user: currentUser._id, post };
      const postUser = await axios.post(`${API_URL}/post/create`, formData);
      setPosts([postUser.data, ...posts]);
      setPost("");
      nav("/feed");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="page-post">
      <h1>Whats on your mind today ?</h1>
      <form onSubmit={handlePost}>
        <textarea
          name="message"
          rows="10"
          cols="30"
          placeholder="What do we do today?"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
        <label>
          Image:
          <input type="file" name="image" />
        </label>
        <button>Post</button>
      </form>
    </div>
  );
};

export default NewPost;
