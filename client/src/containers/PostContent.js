import React, { Component } from "react";
import Comment from "./../components/Comment";

export default class PostContent extends Component {

  render () {
    console.log(this.props.postId);
    return (
      <div>
        <div>
          <h1>Title</h1>
          <p className="text-danger">Post Id : {this.props.postId}. <br/>Use postId to call specific post using something like postdata.php?id=postId</p>
          <h4>By Author<span className="badge badge-pill badge-secondary ml-3"><i className="fa fa-clock-o" aria-hidden="true"></i> Timestamp</span></h4>
          <hr/>
          <img className="card-img img-fluid" src="http://via.placeholder.com/350x200" alt=""/>
          <hr/>
          <div className="card-body">
            <p className="card-text">Description</p>
            <p className="card-text">Location</p>
            <p className="card-text">$ Price</p>
          </div>
          <Comment/>
        </div>
      </div>
    );
  }
}
