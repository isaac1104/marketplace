import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class MyCommentContent extends Component {

  render () {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1>My Comments</h1>
          <hr className="my-2"/>

          <div className="table-responsive-md">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Post</th>
                  <th>Timestamp</th>
                  <th>Comment</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Link to="/post/1">Stolen iPhone X</Link></td>
                  <td>1/23/2018 4:30 PM</td>
                  <td>This is a comment</td>
                  <td><Link to="#">Delete</Link></td>
                </tr>
                <tr>
                  <td><Link to="/post/1">Stolen iPhone X</Link></td>
                  <td>1/23/2018 4:30 PM</td>
                  <td>This is a comment</td>
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
