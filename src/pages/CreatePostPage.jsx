import { useState } from "react";
import NewPost from "../components/NewPost";

const CreatePostPage = ({ API_URL }) => {
  const [posts, setPosts] = useState([]);
  return (
    <div>
      <NewPost posts={posts} setPosts={setPosts} API_URL={API_URL} />
    </div>
  );
};

export default CreatePostPage;
