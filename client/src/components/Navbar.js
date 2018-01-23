import React, {Component} from "react";
import * as actions from "./../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Navbar extends Component {

  greetUser = () => {
    if (this.props.currentUser.loggedIn) {
      return (
        <div className="row">
          <div className="col-4 text-center">
            <img className="my-auto img-fluid" src="http://via.placeholder.com/300x300" alt="Generic placeholder"/>
          </div>
          <div className="col-8">
            <div>
              <h5 className="mt-0">Welcome, <Link to="#">{this.props.currentUser.data[0].username}</Link></h5>
              <p>{this.props.currentUser.data[0].firstname} {this.props.currentUser.data[0].lastname}</p>
              <button className="btn btn-danger h-100 w-100">Log Out</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p><i className="fa fa-user-times" aria-hidden="true"></i> You are not logged in</p>
          <p>Sign in to enjoy full features of Marketplace!</p>
          <p className="text-muted">or Sign Up with Marketplace for free</p>
          <Link to="/login" className="btn btn-primary w-100">Sign In <i className="fa fa-sign-in" aria-hidden="true"></i></Link>
          <Link to="/" className="d-inline-block mx-auto mt-2">Sign Up</Link>
        </div>
      );
    }
  }


  render() {

   return (

     <nav className="navbar navbar-expand-md navbar-light bg-light py-md-0">
       <div className="container">
         <Link className="navbar-brand" to="/">Marketplace</Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-navbar" aria-controls="mobile-navbar" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>

         <div className="collapse navbar-collapse" id="mobile-navbar">
           <div className="card p-3 mb-3 d-md-none mt-3">
             {this.greetUser()}
           </div>

           <form className="input-group d-md-none my-3">
             <input type="text" className="form-control search-query-mobile" placeholder="Search"/>
             <div className="input-group-append">
               <button className="btn btn-outline-success btn-search" type="button">Search</button>
             </div>
           </form>

           <ul className="navbar-nav ml-auto">
             <li className="nav-item py-2">
               <Link className="nav-link" to="/home">Home</Link>
             </li>
             <li className="nav-item py-2">
               <Link className="nav-link" to="/about">About</Link>
             </li>
             <li className="nav-item py-2">
               <Link className="nav-link" to="/market">Market</Link>
             </li>
           </ul>
         </div>
       </div>
     </nav>
   );
  }

}

function mapStateToProps(state) {
  return {
    currentUser: state.logInUser
  }
}

export default connect(mapStateToProps, actions)(Navbar);
