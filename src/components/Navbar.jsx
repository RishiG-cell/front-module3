import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { handleLogout, currentUser } = useContext(AuthContext);

  return (
    <>
      <div className="container">
        <div className="pattern">
          <nav>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            {currentUser && <Link to="/profile">Profile</Link>}
            {currentUser && <button onClick={handleLogout}>Loggout</button>}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
