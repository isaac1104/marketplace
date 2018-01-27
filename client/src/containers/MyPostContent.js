import React, { Component } from "react";
import * as actions from "./../actions";
import { connect } from "react-redux";
import MyPostTable from "./../components/MyPostTable";

class MyPostContent extends Component {

  state={
    myPosts: []
  }

  componentDidMount() {
    this.props.fetchPostData();
  }

  renderPostTable = (username) => {
    const myPosts = this.props.postData.data.filter((post)=>{return post.author === username;});
    return myPosts.map(post=>{
      return (
        <MyPostTable post={post} key={post.id}/>
      )
    });
  }

  deletePost = (postId) => {
    console.log(postId);
  }

  render () {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1>My Post</h1>
          <hr className="my-2"/>
          <div className="table-responsive-md">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Timestamp</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.renderPostTable(this.props.user.data[0].username)}
              </tbody>
            </table>
          </div>
        </div>

        <div className="modal fade" id="delete-confirmation" tabIndex="-1" role="dialog">
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
                <p>This will delete all comments belong to this post as well.</p>
                <p className="text-danger">This action is irreversible.</p>
              </div>
              <div className="modal-footer">
                <input type="int" id="postId" hidden/>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-danger" onClick={()=>this.deletePost(document.getElementById("postId").value)}>Delete Post</button>
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps, actions)(MyPostContent);
