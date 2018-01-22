import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from './../actions';
import { connect } from 'react-redux';
import { Button , Icon, Input } from "semantic-ui-react";


class SignUpForm extends Component {

  formSubmit = () => {
    console.log(this.props.form.signUpUserInfo.values);
    const user = this.props.form.signUpUserInfo.values;
    this.props.postNewUser(user.username, user.password, user.firstname, user.lastname, user.email, user.zipcode, user.phone);
  }

  render () {

    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <div>
          <label>Username</label>
          <div>
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
              name="firstname"
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
              name="lastname"
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
          <label>Zipcode</label>
          <div>
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
          <div>
            <Field
              name="phone"
              component={ Input }
              type="number"
              placeholder="Phone Number"
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

function mapStateToProps(state) {
  return {
    form: state.form
  }
}

export default reduxForm({ form: "signUpUserInfo" })(connect(mapStateToProps, actions)(SignUpForm));
