import React, { Component } from "react";
import Comment from "./../components/Comment";
import { connect } from "react-redux";
import * as actions from "./../actions";
import { Loader } from "semantic-ui-react";
import { Link } from "react-router-dom";

class PostContent extends Component {

  componentDidMount() {
    this.props.fetchSinglePostData(this.props.postId);
  }

  deletePost = (postId) => {
    console.log(postId);
  }


  renderEditDelete = () => {
    if (this.props.postData.post && this.props.user.data) {
      if (this.props.postData.post[0].author === this.props.user.data[0].username) {
        return (
          <div>
            <Link className="btn btn-outline-success mr-4" to={"/edit-post/"+this.props.postData.post[0].id}>Edit Post</Link>
            <button className="btn btn-outline-danger" type="button" data-toggle="modal" data-target="#delete-confirmation">Delete Post</button>
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
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-danger" onClick={()=>this.deletePost(this.props.postId)}>Delete Post</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  }

  renderDetail = () => {
    if (this.props.postData.post) {
      const data = this.props.postData.post[0];
      const date = new Date(data.timestamp+' UTC');
      const modified = new Date(data.modified+ ' UTC');
      return (
        <div>
          <div className="row justify-content-between">
            <button className="btn btn-outline-info rounded-circle" onClick={() => { window.history.back() }}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>

            {this.renderEditDelete()}

          </div>
          <h1>{data.title}</h1>
          <h4>By {data.author}</h4>
          <h4>Posted On: <span className="badge badge-pill badge-secondary ml-3"><i className="fa fa-clock-o" aria-hidden="true"></i> {date.toLocaleString()}</span></h4>
          <h4>Last Modified: <span className="badge badge-pill badge-info ml-3"><i className="fa fa-clock-o" aria-hidden="true"></i> {modified.toLocaleString()}</span></h4>

          <hr/>
          <img className="card-img img-fluid" src="http://via.placeholder.com/300x300" alt=""/>
          <hr/>
          <div className="card-body">
            <div className="list-group">
              <div className="list-group-item bg-light">
                <h3>Description</h3>
              </div>
              <div className="list-group-item">
                <p className="card-text" style={{whiteSpace:"pre"}}>{data.description}</p>
              </div>
            </div>
            <table className="table table-bordered my-4">
              <tbody>
                <tr>
                  <td className="w-25 bg-light"><strong>Location</strong></td>
                  <td><p className="card-text">{data.location}</p></td>
                </tr>
                <tr>
                  <td className="w-25 bg-light"><strong>Price</strong></td>
                  <td><p className="card-text">$ {data.price}</p></td>
                </tr>
              </tbody>
            </table>
          </div>
          <Comment postId={this.props.postId}/>
        </div>
      );
    } else {
      return (
        <Loader
          active
          inline="centered"
          size="massive"
        >
          Loading
        </Loader>
      );
    }
  }

  render () {
    return (
      <div>
        {this.renderDetail()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postData: state.postData,
    user: state.logInUser
  }
}

export default connect(mapStateToProps, actions)(PostContent);
