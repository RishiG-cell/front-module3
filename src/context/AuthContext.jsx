import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthContextWrapper = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loggedIn, SetLoggedIn] = useState(false);
  const nav = useNavigate();

  async function authenticateUser() {
    try {
      const tokenInStorage = localStorage.getItem("authToken");
      const response = await axios.get("http://localhost:5005/auth/verify", {
        headers: {
          authorization: `Bearer ${tokenInStorage}`,
        },
      });

      setCurrentUser(response.data.payload);
      setIsLoading(false);
      SetLoggedIn(true);
    } catch (error) {
      console.error(error.response.data.errorMessage);
      setCurrentUser(null);
      setIsLoading(false);
      SetLoggedIn(false);
    }
  }

  async function handleLogout() {
    localStorage.removeItem("authToken");
    await authenticateUser();
    nav("/");
  }

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoading,
        loggedIn,
        SetLoggedIn,
        authenticateUser,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextWrapper };
