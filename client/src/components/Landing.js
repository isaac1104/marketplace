import React from "react";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import background from "./../images/background/la.jpg";
import { Button, Icon } from "semantic-ui-react";

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
          <SignInModal/>
        </div>
        <Button style={style.button} color="blue" animated>
          <Button.Content visible>Continue as guest</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow circle right"/>
          </Button.Content>
        </Button>

      </div>
    </div>
  );
}

export default Landing;
