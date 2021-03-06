import React, { Component } from 'react';
import * as actions from "./../actions";
import { connect } from "react-redux";
import CommentItem from "./../components/CommentItem";


class CommentList extends Component {

  renderCommentItem = () => {
    const { data } = this.props.commentData;
    if (data.length>=1) {
      return data.map(comment => {
        let date = new Date(comment.timestamp+' UTC');
        return (
          <CommentItem
            username={comment.username}
            currentUser={this.props.user}
            timestamp={date.toLocaleString()}
            comment={comment.comment}
            id={comment.id}
            key={comment.id}
          />
        );
      })
    } else {
      return(
        <div className="container text-center py-5">
          <h3><i className="fa fa-commenting-o" aria-hidden="true"></i> There's no comment yet.</h3>
          <p className="text-muted">Be the first one to leave a comment!</p>
        </div>
      )
    }
  }

  deleteComment(comment_id) {
    this.props.deleteComment(comment_id);
    this.props.refetchCommentData();
  }

  render() {

    return (
      <div>
        {this.renderCommentItem()}

        <div className="modal fade" id="delete-comment-confirmation" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-danger"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Delete Post</h5>
                <button type="button" className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body text-center">
                <h3>Are You Sure?</h3>
                <p className="text-danger">This action is irreversible.</p>
              </div>
              <div className="modal-footer">
                <input type="int" id="commentId" hidden/>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>this.deleteComment(document.getElementById("commentId").value)}>Delete Comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

function mapStateToProps(state) {
  return {
    deleteComment: state.deleteComment
  }
}

export default connect(mapStateToProps, actions)(CommentList);
