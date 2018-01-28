import React, { Component } from "react";
import * as actions from "./../actions";
import { connect } from "react-redux";
import MyProfileForm from './MyProfileForm';
import PasswordForm from './PasswordForm';

class MyProfileContent extends Component {

  deactivateAccount() {
    this.props.deleteUser(this.props.user.data[0].id);
    window.location.href = "/";
    this.props.resetLogIn();
  }

  render () {
    console.log(this.props.user);
    if (this.props.user.data) {
      const { username, firstname, lastname, email, phone, zipcode } = this.props.user.data[0];
      return (
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1>My Profile</h1>
            <hr className="my-2"/>
            <MyProfileForm
              username={username}
              firstname={firstname}
              lastname={lastname}
              email={email}
              phone={phone}
              zipcode={zipcode}
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
                      <button type="button" className="btn btn-danger" onClick={()=>this.deactivateAccount()}>Deactive My Account</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }

  }
}

function mapStateToProps(state) {
  return {
    user: state.logInUser,
    deleteUser: state.deleteUser
  }
}

export default connect(mapStateToProps, actions)(MyProfileContent);
