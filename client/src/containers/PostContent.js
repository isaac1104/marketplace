import React, { Component } from "react";
import Comment from "./../components/Comment";
import { connect } from "react-redux";
import * as actions from "./../actions";
import { Loader } from "semantic-ui-react";

class PostContent extends Component {

  componentDidMount() {
    this.props.fetchSinglePostData(this.props.postId);
  }

  renderDetail = () => {
    if (this.props.postData.post) {
      const data = this.props.postData.post[0];
      const date = new Date(data.timestamp+' UTC');
      return (
        <div>
          <div className="row justify-content-between">
            <button className="btn btn-outline-info rounded-circle" onClick={() => { window.history.back() }}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
            <div>
              <button className="btn btn-outline-success mr-4" type="button">Edit Post</button>
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
                      <button type="button" className="btn btn-danger">Delete Post</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1>{data.title}</h1>
          <h4>{data.author}<span className="badge badge-pill badge-secondary ml-3"><i className="fa fa-clock-o" aria-hidden="true"></i> {date.toLocaleString()}</span></h4>
          <hr/>
          <img className="card-img img-fluid" src="http://via.placeholder.com/350x200" alt=""/>
          <hr/>
          <div className="card-body">
            <p className="card-text" style={{whiteSpace:"pre"}}>{data.description}</p>
            <p className="card-text">{data.location}</p>
            <p className="card-text">$ {data.price}</p>
          </div>
          <Comment/>
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
    postData: state.postData
  }
}

export default connect(mapStateToProps, actions)(PostContent);
