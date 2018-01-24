import React, { Component } from "react";
import PostForm from "./../components/PostForm";

export default class PostContent extends Component {

  render () {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid py-2">
          <div className="container">
            <h1 className="display-4">New Post</h1>
            <p className="lead">Some post policy/regulations can go here.</p>
            <hr className="my-2" />
            <PostForm />
          </div>
        </div>
      </div>
    );
  }
}
