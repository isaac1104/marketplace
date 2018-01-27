import React, { Component } from 'react';
import CommentItem from "./../components/CommentItem";


export default class CommentList extends Component {

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
        <div>Be the first one to leave a comment!</div>
      )
    }
  }

  deleteComment(comment_id) {
    console.log(comment_id);
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
                <button type="button" className="btn btn-danger" onClick={()=>this.deleteComment(document.getElementById("commentId").value)}>Delete Comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}
