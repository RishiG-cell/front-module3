import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/feed">Feed</Link>
      <Link to="/post">Post</Link>
      <Link to="/update">Update profile</Link>
    </div>
  );
};

export default Sidebar;
