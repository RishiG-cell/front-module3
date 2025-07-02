import { useState } from "react";
import NewPost from "../components/NewPost";
import { API_URL } from "../config/config";

const CreatePostPage = () => {
  const [posts, setPosts] = useState([]);
  return (
    <div>
      <NewPost posts={posts} setPosts={setPosts} API_URL={API_URL} />
    </div>
  );
};

export default CreatePostPage;
