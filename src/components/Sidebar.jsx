import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/feed">Feed</Link>
    </div>
  );
};

export default Sidebar;
