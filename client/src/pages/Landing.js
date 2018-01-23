import React from "react";
import LogInForm from "./../containers/LogInForm";
import background from "./../images/background/la.jpg";
import { Link } from "react-router-dom";

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
    },
    button: {
      marginTop: "20px"
    }
  }

  return (
    <div style={style.container}>
      <div style={style.font}>
        <h1>Welcome to the MARKETPLACE</h1>
        <div style={{ backgroundColor: "#cfd1d6", padding: "20px" }}>
          <LogInForm/>
        </div>
        <div style={style.button}>
          <Link to="/signup" style={{ color:"tomato" }}> Sign Up</Link>
        </div>
        <div style={style.button}>
          <Link to="/home" style={{ color:"tomato" }}> Continue as guest</Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
