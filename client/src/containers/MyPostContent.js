import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MyPostContent extends Component {

  render () {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1>My Post</h1>
          <hr className="my-2"/>
          <div className="table-responsive-md">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Timestamp</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Electronics</td>
                  <td>1/22/2018 4:30 PM</td>
                  <td><Link to="/post/1">Stolen iPhone X</Link></td>
                  <td>$ 500.00</td>
                  <td><Link to="#">Edit</Link></td>
                  <td><Link to="#">Delete</Link></td>
                </tr>
                <tr>
                  <td>Electronics</td>
                  <td>1/22/2018 4:30 PM</td>
                  <td><Link to="/post/1">Stolen iPhone X</Link></td>
                  <td>$ 500.00</td>
                  <td><Link to="#">Edit</Link></td>
                  <td><Link to="#">Delete</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
