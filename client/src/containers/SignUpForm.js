import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from './../actions';
import { connect } from 'react-redux';
import { Button , Icon, Input } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

class SignUpForm extends Component {

  componentWillUnmount() {
    this.props.resetUserState();
  }

  formSubmit = () => {
    const user = this.props.form.signUpUserInfo.values;
    if (user.password === user.verify_password) {
      this.props.postNewUser(user.username, user.password, user.firstname, user.lastname, user.email, user.zipcode, user.phone);
    } else {
      console.log("Passwords don't match");
    }
  }

  redirectToLogin = () => {
    if (this.props.newUser.success) {
      return (
        <Redirect to={ "/" }/>
      );
    } else if (this.props.newUser.error) {
      return (
        <h6>{this.props.newUser.msg}</h6>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  render () {
    console.log(this.props.newUser);
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <h3>Sign up to get started!</h3>
        <label>Username</label>
        <div style={{ margin : "10px 0 10px 0" }}>
          <Field
            name="username"
            component={ Input }
            type="text"
            placeholder="Username"
          />
        </div>
        <label>Password</label>
        <div style={{ margin : "10px 0 10px 0" }}>
          <Field
            name="password"
            component={ Input }
            type="password"
            placeholder="password"
          />
        </div>
        <label>Verify Password</label>
        <div style={{ margin : "10px 0 10px 0" }}>
          <Field
            name="verify_password"
            component={ Input }
            type="password"
            placeholder="verify password"
          />
        </div>
        <label>First Name</label>
        <div style={{ margin : "10px 0 10px 0" }}>
          <Field
            name="firstname"
            component={ Input }
            type="text"
            placeholder="First Name"
          />
        </div>
        <label>Last Name</label>
        <div style={{ margin : "10px 0 10px 0" }}>
          <Field
            name="lastname"
            component={ Input }
            type="text"
            placeholder="Last Name"
          />
        </div>
        <label>Email</label>
        <div style={{ margin : "10px 0 10px 0" }}>
          <Field
            name="email"
            component={ Input }
            type="email"
            placeholder="Email"
          />
        </div>
        <label>Zipcode</label>
        <div style={{ margin : "10px 0 10px 0" }}>
          <Field
            name="zipcode"
            component={ Input }
            type="number"
            placeholder="Zipcode"
          />
        </div>
        <label>Phone</label>
        <div style={{ margin : "10px 0 10px 0" }}>
          <Field
            name="phone"
            component={ Input }
            type="number"
            placeholder="Phone Number"
          />
        </div>
        <div style={{marginTop: "20px"}} className="text-center">
          <Button
            type="submit"
            disabled={pristine || submitting}
            color="blue"
          >
            <Icon name="checkmark" /> Submit
          </Button>
        </div>
        {this.redirectToLogin()}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    form: state.form,
    newUser: state.newUser
  };
}

export default reduxForm({ form: "signUpUserInfo" })(connect(mapStateToProps, actions)(SignUpForm));
