import React from "react";
import SignUpForm from "./../containers/SignUpForm";

const SignUp = () => {

  const style = {
    container: {
      backgroundColor: "powderblue",
      minHeight: "100vh",
      minWidth: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }

  return (
    <div style={style.container}>
      <SignUpForm/>
    </div>
  );
}

export default SignUp;
