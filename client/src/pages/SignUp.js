import React from "react";
import SignUpForm from "./../containers/SignUpForm";
import { Link } from "react-router-dom";

const SignUp = () => {

  const style = {
    container: {
      backgroundColor: "powderblue",
      minHeight: "100vh",
      minWidth: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: "30px 0"
    }
  }

  return (
    <div style={style.container}>
      <SignUpForm/>
      <div className="mt-2">
        <Link to="/" style={{ color:"tomato" }}> Sign In</Link>
      </div>
      <div>
        <Link to="/home" style={{ color:"tomato" }}> Continue as guest</Link>
      </div>
    </div>
  );
}

export default SignUp;
