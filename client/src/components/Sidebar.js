import React, { Component } from "react";
import * as actions from "./../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Sidebar extends Component {

  greetUser = () => {
    if (this.props.currentUser.loggedIn) {
      return (
        <div className="row">
          <div className="col-4 text-center">
            <img className="my-auto img-fluid" src="http://via.placeholder.com/300x300" alt="Generic placeholder"/>
          </div>
          <div className="col-8">
            <div>
              <h5 className="mt-0">Welcome, <Link to="/my-profile">{this.props.currentUser.data[0].username}</Link></h5>
              <p>{this.props.currentUser.data[0].firstname} {this.props.currentUser.data[0].lastname}</p>
              <a href="/" onClick={() => localStorage.clear()}><button className="btn btn-danger h-100 w-100">Log Out</button></a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p><i className="fa fa-user-times" aria-hidden="true"></i> You are not logged in</p>
          <p>Sign in to enjoy full features of Marketplace!</p>
          <Link to="/login" className="btn btn-primary d-block w-100">Sign In <i className="fa fa-sign-in" aria-hidden="true"></i></Link>
          <p>or <Link to="/" className="d-inline-block mx-auto mt-2">Sign Up</Link> with Marketplace for free</p>
          </div>
      );
    }
  }

  render() {
    return (
      <div className="position-sticky pt-3">
        <div className="card p-3 mb-3">
          {this.greetUser()}
        </div>
        <div className="card p-4 my-3">
          <form className="input-group">
            <input type="text" className="form-control" placeholder="Search" aria-label="search" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
              <button className="btn btn-outline-success" type="button">Search</button>
            </div>
          </form>
        </div>
      </div>
    );
  }


}


  function mapStateToProps(state) {
    return {
      currentUser: state.logInUser
    }
  }

export default connect(mapStateToProps, actions)(Sidebar);
