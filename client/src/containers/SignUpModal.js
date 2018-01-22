import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

class SignUpModal extends Component {
  render () {
    return (
      <Modal trigger={
        <Button animated color="orange">
          <Button.Content visible>Sign Up</Button.Content>
          <Button.Content hidden>
            <Icon name="signup"/>
          </Button.Content>
        </Button>
      } closeIcon>
        <Header icon='signup' content='Sign Up with Marketplace' />
        <Modal.Content>
          <SignUpForm/>
        </Modal.Content>
      </Modal>
    );
  }
}

export default SignUpModal;
