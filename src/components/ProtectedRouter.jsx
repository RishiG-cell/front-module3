import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const { isLoading, loggedIn } = useContext(AuthContext);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!loggedIn) {
    return <Navigate to="/auth/login" />;
  }
  return children;
};

export default ProtectedRouter;
