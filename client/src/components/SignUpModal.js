import React from "react";
import SignUpForm from "./../containers/SignUpForm";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

const SignUpModal = () => {
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
      {/* <Modal.Actions>
        <Button color='blue'>
          <Icon name='checkmark' /> Done
        </Button>
      </Modal.Actions> */}
    </Modal>
  );
}

export default SignUpModal;
