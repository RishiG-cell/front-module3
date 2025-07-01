import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRouter from "./components/ProtectedRouter";
import FeedPage from "./pages/FeedPage";
import UpdateUserPage from "./pages/UpdateUserPage";
import CreatePostPage from "./pages/CreatePostPage";
import CommentPage from "./pages/CommentPage";
import PostProfielPage from "./pages/PostProfielPage";
import ProtectedRouterhome from "./components/ProtectedRouterhome";
import { API_URL } from "./config/config";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRouterhome>
              <HomePage API_URL={API_URL} />
            </ProtectedRouterhome>
          }
        />
        <Route path="/auth/login" element={<LoginPage API_URL={API_URL} />} />
        <Route path="/auth/signup" element={<SignUpPage API_URL={API_URL} />} />
        <Route
          path="/profile"
          element={
            <ProtectedRouter>
              <ProfilePage API_URL={API_URL} />
            </ProtectedRouter>
          }
        />
        <Route
          path="/feed"
          element={
            <ProtectedRouter>
              <FeedPage API_URL={API_URL} />
            </ProtectedRouter>
          }
        />
        <Route
          path="/update"
          element={
            <ProtectedRouter>
              <UpdateUserPage API_URL={API_URL} />
            </ProtectedRouter>
          }
        />
        <Route
          path="/post"
          element={
            <ProtectedRouter>
              <CreatePostPage API_URL={API_URL} />
            </ProtectedRouter>
          }
        />

        <Route
          path="/comment/:postId"
          element={
            <ProtectedRouter>
              <CommentPage API_URL={API_URL} />
            </ProtectedRouter>
          }
        />
        <Route
          path="/post-profile/:userId"
          element={
            <ProtectedRouter>
              <PostProfielPage API_URL={API_URL} />
            </ProtectedRouter>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
