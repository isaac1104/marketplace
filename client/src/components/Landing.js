import React from "react";
import background from "./../images/background/la.jpg";

const Landing = () => {

  const style = {
    container: {
      minHeight: "100vh",
      minWidth: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      padding: "5rem",
      textAlign: "center"
    },
    font: {
      color: "tomato"
    }
  }

  return (
    <div style={style.container}>
      <div style={style.font}>
        <h1>Welcome to the MARKETPLACE</h1>
        <h3>Sign Up or Sign In</h3>
        <h5>Continue as guest</h5>
      </div>
    </div>
  );
}

export default Landing;
