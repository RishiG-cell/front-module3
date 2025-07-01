import { useState } from "react";
import NewPost from "../components/NewPost";

const CreatePostPage = () => {
  const [posts, setPosts] = useState([]);
  return (
    <div>
      <NewPost posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default CreatePostPage;
