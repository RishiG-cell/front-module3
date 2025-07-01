import Loginform from "../components/Loginform";
import Signupform from "../components/Signupform";

const HomePage = () => {
  return (
    <div className="home">
      <div className="flip1">
        <div className="innerflip">
          <div className="flip2">
            <h1>GET IN HERE!</h1>
          </div>
          <div className="login-card">
            <Loginform />
          </div>
        </div>
      </div>
      <div className="flip1">
        <div className="innerflip">
          <div className="flip3">
            <h1>SIGN UP WITH US</h1>
          </div>
          <div className="signup-card">
            <Signupform />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
