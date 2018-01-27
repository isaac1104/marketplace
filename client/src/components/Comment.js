import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "./../actions";
import CommentField from "./../containers/CommentField";
import CommentList from "./../containers/CommentList";

class Comment extends Component {

  componentDidMount() {
    this.props.fetchCommentData(this.props.postId);
  }

  componentWillReceiveProps(nextProps) {
    this.props.fetchCommentData(nextProps.postId);
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid py-2 my-2">
        <div className="container">
          <CommentField postId={this.props.postId}/>
          <hr className="my-2"/>
          <CommentList commentData={this.props.commentData} user={this.props.user.data? this.props.user.data[0].username:""}/>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    commentData: state.commentData,
    user: state.logInUser
  }
}

export default connect(mapStateToProps, actions)(Comment);
