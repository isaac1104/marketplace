import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from './../actions';
import { connect } from 'react-redux';
import { Button , Icon, Input } from "semantic-ui-react";


class SignUpForm extends Component {

  formSubmit = userInfo => {
    console.log(userInfo);
    this.props.postNewUser();
  }

  render () {

    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <div>
          <label>Username</label>
          <div>
            <Field
              name="userName"
              component={ Input }
              type="text"
              placeholder="Username"
            />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
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
          <div>
            <Field
              name="firstName"
              component={ Input }
              type="text"
              placeholder="First Name"
            />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <Field
              name="lastName"
              component={ Input }
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <Field
              name="email"
              component={ Input }
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div>
          <Button
            type="submit"
            disabled={pristine || submitting}
            color="blue"
          >
            <Icon name="checkmark" /> Submit
          </Button>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: "signUpUserInfo" })(connect(null, actions)(SignUpForm));
