import React, { Component } from "react";
import * as actions from "./../actions";
import { connect } from "react-redux";
import MyCommentTable from "./../components/MyCommentTable";

class MyCommentContent extends Component {

  componentDidMount() {
    this.props.fetchCommentData();
    this.props.fetchPostData();
  }


  renderCommentTable = (username) => {

    if (this.props.commentData.data) {
      const myComments = this.props.commentData.data.filter((comment)=>{return comment.username === username;});

      return myComments.map(comment=>{
        let commentedPost = this.props.postData.data.filter((post)=>{return post.id === comment.post_id;});
        return (
          <MyCommentTable comment={comment} post={commentedPost} key={comment.id}/>
        )
      });
    }
  }

  deleteComment = (commentId) => {
    this.props.deleteComment(commentId);
    window.location.reload();
  }

  render () {
    if (this.props.user.data) {
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
                  {this.renderCommentTable(this.props.user.data[0].username)}
                </tbody>
              </table>
            </div>
          </div>

          <div className="modal fade" id="delete-confirmation" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-danger"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Delete Comment</h5>
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
                  <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>this.deleteComment(document.getElementById("commentId").value)}>Delete Post</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.logInUser,
    commentData: state.commentData,
    postData: state.postData
  }
}

export default connect(mapStateToProps, actions)(MyCommentContent);
