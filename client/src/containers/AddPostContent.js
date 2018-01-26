import React, { Component } from "react";
import AddPostForm from "./AddPostForm";
import { Dimmer, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "./../actions";
import { Link } from "react-router-dom";

class AddPostContent extends Component {

  renderPostForm = () => {
    if (this.props.user.loggedIn) {
      return (
        <div className="container">
          <h1 className="display-4">New Post</h1>
          <p className="lead">Some post policy/regulations can go here.</p>
          <hr className="my-2" />
          <AddPostForm />
        </div>
      );
    } else {
      return (
        <div className="container">
          <Dimmer active>
            <Header as="h2" style={{ color:"white" }}>
              Please <Link to="/">Sign In</Link> to upload a post.
            </Header>
            <p className="text-muted">Don't have an account yet?</p>
            <Link to="/signup">Sign up for full features for free!</Link>
          </Dimmer>
        </div>
      );
    }
  }

  render () {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid py-2">
          {this.renderPostForm()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.logInUser
  }
}

export default connect(mapStateToProps, actions)(AddPostContent);
