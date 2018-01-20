import React from "react";
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
        <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='blue'>
          <Icon name='checkmark' /> Done
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default SignUpModal;
