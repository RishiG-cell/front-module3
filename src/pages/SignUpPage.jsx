import Signupform from "../components/Signupform";

const SignUpPage = ({ API_URL }) => {
  return (
    <>
      <Signupform API_URL={API_URL} />
    </>
  );
};

export default SignUpPage;
