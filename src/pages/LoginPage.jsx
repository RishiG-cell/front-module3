import Loginform from "../components/Loginform";

const LoginPage = ({ API_URL }) => {
  return (
    <>
      <Loginform API_URL={API_URL} />
    </>
  );
};

export default LoginPage;
