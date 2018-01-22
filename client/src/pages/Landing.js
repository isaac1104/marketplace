import React from "react";
import SignUpModal from "./../containers/SignUpModal";
import background from "./../images/background/la.jpg";
import { Button, Icon } from "semantic-ui-react";
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
        <div style={style.button}>
          <SignUpModal/>
          <Link to="/login">
            <Button style={style.button} color="teal" animated>
              <Button.Content visible>Sign In</Button.Content>
              <Button.Content hidden>
                <Icon name="sign in"/>
              </Button.Content>
            </Button>
          </Link>
        </div>
        <Link to="/home">
          <Button style={style.button} color="blue" animated>
            <Button.Content visible>Continue as guest</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow circle right"/>
            </Button.Content>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
