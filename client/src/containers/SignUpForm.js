import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from './../actions';
import { connect } from 'react-redux';
import { Button , Icon, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {

  formSubmit = () => {
    const user = this.props.form.signUpUserInfo.values;
    this.props.postNewUser(user.username, user.password, user.firstname, user.lastname, user.email, user.zipcode, user.phone);
  }

  redirectToLogin = () => {
    if (this.props.newUser === true) {
      return (
        <Link to="/login"/>
      );
    }
  }

  render () {

    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <h3>Please sign up to get started!</h3>
        <div>
          <label>Username</label>
          <div style={{ margin : "10px 0 10px 0" }}>
            <Field
              name="username"
              component={ Input }
              type="text"
              placeholder="Username"
            />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div style={{ margin : "10px 0 10px 0" }}>
            <Field
              name="password"
              component={ Input }
              type="password"
              placeholder="password"
            />
          </div>
        </div>
        <div>
          <label>First Name</label>
          <div style={{ margin : "10px 0 10px 0" }}>
            <Field
              name="firstname"
              component={ Input }
              type="text"
              placeholder="First Name"
            />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div style={{ margin : "10px 0 10px 0" }}>
            <Field
              name="lastname"
              component={ Input }
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div style={{ margin : "10px 0 10px 0" }}>
            <Field
              name="email"
              component={ Input }
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div>
          <label>Zipcode</label>
          <div style={{ margin : "10px 0 10px 0" }}>
            <Field
              name="zipcode"
              component={ Input }
              type="number"
              placeholder="Zipcode"
            />
          </div>
        </div>
        <div>
          <label>Phone</label>
          <div style={{ margin : "10px 0 10px 0" }}>
            <Field
              name="phone"
              component={ Input }
              type="number"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div style={{marginTop: "20px"}}>
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
