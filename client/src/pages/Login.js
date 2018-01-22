import React from "react";
import LogInForm from "./../containers/LogInForm";

const Login = () => {

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
      <LogInForm/>
    </div>
  );
}

export default Login;
