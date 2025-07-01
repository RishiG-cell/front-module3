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

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRouter>
              <ProfilePage />
            </ProtectedRouter>
          }
        />
        <Route
          path="/feed"
          element={
            <ProtectedRouter>
              <FeedPage />
            </ProtectedRouter>
          }
        />
        <Route
          path="/update"
          element={
            <ProtectedRouter>
              <UpdateUserPage />
            </ProtectedRouter>
          }
        />
        <Route
          path="/post"
          element={
            <ProtectedRouter>
              <CreatePostPage />
            </ProtectedRouter>
          }
        />

        <Route
          path="/comment/:postId"
          element={
            <ProtectedRouter>
              <CommentPage />
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
