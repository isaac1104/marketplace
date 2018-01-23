import React, { Component } from "react";
import Searchbar from "./../containers/Searchbar";
import UserInfo from "./../containers/UserInfo";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="position-sticky pt-3">
        <div className="card p-3 mb-3">
          <UserInfo/>
        </div>
        <div className="card p-4 my-3">
          <Searchbar/>
        </div>
      </div>
    );
  }
}
