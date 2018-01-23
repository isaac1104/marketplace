import React, { Component } from "react";
import * as actions from "./../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import UserInfo from "./UserInfo";

export default class Navbar extends Component {

  render() {

   return (

     <nav className="navbar navbar-expand-md navbar-light bg-light py-md-0">
       <div className="container">
         <h1 className="navbar-brand">Marketplace</h1>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-navbar" aria-controls="mobile-navbar" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>

         <div className="collapse navbar-collapse" id="mobile-navbar">
           <div className="card p-3 mb-3 d-md-none mt-3">
             <UserInfo/>
           </div>

           <Searchbar navbar/>

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
