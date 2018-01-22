import React from "react";
import SignUpForm from "./../containers/SignUpForm";
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
        <div style={{ backgroundColor: "#cfd1d6", padding: "20px" }}>
          <SignUpForm/>
        </div>
        <div style={style.button}>
          Already have an account?
          <Link to="/login">
            <Button color="teal" animated style={{ marginLeft: "20px" }}>
              <Button.Content visible>Sign In</Button.Content>
              <Button.Content hidden>
                <Icon name="sign in"/>
              </Button.Content>
            </Button>
          </Link>
        </div>
        <div style={style.button}>
          Or
          <Link to="/home">
            <Button color="blue" animated style={{ marginLeft: "20px" }}>
              <Button.Content visible>Continue as guest</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow circle right"/>
              </Button.Content>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
