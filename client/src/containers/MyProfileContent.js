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
          <hr className="my-5" />
          <h1>Deactivate Account</h1>
          <p className="text-muted">This will delete all posts and comments written by you.</p>
          <p className="alert alert-danger"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> This action is irreversible. The deleted data will NOT be retrieved.</p>
          <div className="text-center">
            <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#deactivate-confirmation">Deactive Account</button>

            <div className="modal fade" id="deactivate-confirmation" tabIndex="-1" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title text-danger"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Deactivation</h5>
                    <button type="button" className="close" data-dismiss="modal">
                      <span>&times;</span>
                    </button>
                  </div>
                  <div className="modal-body text-center">
                    <h3>Are You Sure?</h3>
                    <p>This will delete all posts and comments you wrote.</p>
                    <p className="text-danger">This action is irreversible.</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-danger">Deactive My Account</button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
