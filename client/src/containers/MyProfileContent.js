import React, { Component } from "react";
import MyProfileForm from './MyProfileForm';
import PasswordForm from './PasswordForm';

export default class MyProfileContent extends Component {

  render () {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1>My Profile</h1>
          <hr className="my-2"/>
          <MyProfileForm
            username="User"
            firstname="First"
            lastname="Last"
            email="test@email.com"
            phone="1234567890"
            zipcode="12345"
          />
          <hr className="my-4" />
          <PasswordForm/>
        </div>
      </div>
    );
  }
}
