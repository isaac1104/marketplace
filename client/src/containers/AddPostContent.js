import React, { Component } from "react";
import PostForm from "./PostForm";
import { Dimmer, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "./../actions";

class PostContent extends Component {

  renderPostForm = () => {
    if (this.props.user.loggedIn) {
      return (
        <div className="container">
          <h1 className="display-4">New Post</h1>
          <p className="lead">Some post policy/regulations can go here.</p>
          <hr className="my-2" />
          <PostForm />
        </div>
      );
    } else {
      return (
        <div className="container">
          <Dimmer active>
            <Header as="h2" style={{ color: "white" }}>
              Please sign in to create a post
            </Header>
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

export default connect(mapStateToProps, actions)(PostContent);
