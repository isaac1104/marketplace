import React from "react";
import { Input } from "semantic-ui-react";

const SignUpField = ({ input }) => {
  return (
    <div>
      <label>First Name</label>
      <Input {...input}
        type="text"
        name="firstName"
      />
      <label>Last Name</label>
      <Input {...input}
        type="text"
        name="lastName"
      />
      {/* <div>
        <label>First Name</label>
        <div>
          <Field
        name="firstName"
        component="input"
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
        component="input"
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
        component="input"
        type="email"
        placeholder="Email"
          />
        </div>
      </div> */}
    </div>
  );
}

export default SignUpField;
