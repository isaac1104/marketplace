import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from './../actions';
import { connect } from 'react-redux';
import { Button , Icon, Input } from "semantic-ui-react";
import { Redirect, Link } from "react-router-dom";

class LogInForm extends Component {

  formSubmit = () => {
    const user = this.props.form.logInInfo.values;
    this.props.logInUser(user.username, user.password);
  }

  redirectToHome = () => {
    if (this.props.user) {
      return (
        <Redirect to={ "/home" }/>
      );
    } else if (this.props.user === "") {
      console.log("username and password not matching");
    }
  }

  render () {

    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <h3>Please Log In To Continue</h3>
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
        <div style={{marginTop: "20px"}}>
          <Button
            type="submit"
            disabled={pristine || submitting}
            color="blue"
          >
            <Icon name="sign in" /> Log In
          </Button>
          <Link to="/">
            <Button
              type="button"
              color="red"
            >
              <Icon name="left arrow" /> Back
            </Button>
          </Link>
        </div>
        {this.redirectToHome()}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    form: state.form,
    user: state.logInUser
  };
}

export default reduxForm({ form: "logInInfo" })(connect(mapStateToProps, actions)(LogInForm));