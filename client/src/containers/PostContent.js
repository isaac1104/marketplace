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
    if (this.props.postData) {
      const data = this.props.postData[0];
      return (
        <div>
          <h1>{data.title}</h1>
          <p className="text-danger">Post Id : {this.props.postId}. <br/>Use postId to call specific post using something like postdata.php?id=postId</p>
          <h4>{data.author}<span className="badge badge-pill badge-secondary ml-3"><i className="fa fa-clock-o" aria-hidden="true"></i> {data.timestamp}</span></h4>
          <hr/>
          <img className="card-img img-fluid" src="http://via.placeholder.com/350x200" alt=""/>
          <hr/>
          <div className="card-body">
            <p className="card-text">{data.description}</p>
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