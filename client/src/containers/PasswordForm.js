import React, { Component } from 'react';

export default class PasswordForm extends Component {

  render() {
    return(
      <form>
        <div className="form-group">
          <div className="row">
            <div className="col-6">
              <label>Password</label>
              <input type="password" className="form-control"/>
            </div>
            <div className="col-6">
              <label>Verify Password</label>
              <input type="password" className="form-control"/>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-outline-info mr-3">Change Password</button>
          <button className="btn btn-outline-danger">Cancel</button>
        </div>
      </form>
    );
  }

}
