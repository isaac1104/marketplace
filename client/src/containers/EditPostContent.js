import React, { Component } from "react";
import EditPostForm from "./EditPostForm";
import { Dimmer, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "./../actions";
import { Link } from "react-router-dom";

class EditPostContent extends Component {

  componentDidMount() {
    this.props.fetchSinglePostData(this.props.postId);
  }




  renderPostForm = () => {
    if (this.props.postData.post) {
      if (this.props.user.loggedIn && this.props.user.data[0].username === this.props.postData.post[0].author) {
        return (
          <div className="container">
            <h1 className="display-4">Edit Post</h1>
            <p className="lead">Some post policy/regulations can go here.</p>
            <hr className="my-2" />
            <EditPostForm postData={this.props.postData.post[0]}/>
          </div>
        );
      } else if (this.props.user.username !== this.props.postData.post[0].author) {
        return (
          <div className="container">
            <Dimmer active>
              <Header as="h2" style={{ color:"white" }}>
                Access Denied.
              </Header>
              <p className="text-muted">You are not authorized to edit this post.</p>
            </Dimmer>
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
    user: state.logInUser,
    postData: state.postData
  }
}

export default connect(mapStateToProps, actions)(EditPostContent);
