import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "./../actions";
import CommentField from "./../containers/CommentField";
import CommentList from "./../containers/CommentList";

class Comment extends Component {

  componentDidMount() {
    this.props.fetchCommentData(this.props.postId);
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid py-2 my-2">
        <div className="container">
          <CommentField/>
          <hr className="my-2"/>
          <CommentList commentData={this.props.commentData}/>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    commentData: state.commentData
  }
}

export default connect(mapStateToProps, actions)(Comment);
