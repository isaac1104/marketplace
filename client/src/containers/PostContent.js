import React, { Component } from "react";
import Comment from "./../components/Comment";
import { connect } from "react-redux";
import * as actions from "./../actions";
import { Loader } from "semantic-ui-react";

class PostContent extends Component {

  componentDidMount() {
    this.props.fetchSinglePostData(this.props.postId);
  }

  goBack = () => {
    window.history.back();
  }

  renderDetail = () => {
    if (this.props.postData) {
      const data = this.props.postData[0];
      let date = new Date(data.timestamp+' UTC');
      let description = data.description.toString();
      return (
        <div>
          <button className="btn btn-outline-info rounded-circle" onClick={() => {this.goBack()}}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
          <h1>{data.title}</h1>
          <h4>{data.author}<span className="badge badge-pill badge-secondary ml-3"><i className="fa fa-clock-o" aria-hidden="true"></i> {date.toLocaleString()}</span></h4>
          <hr/>
          <img className="card-img img-fluid" src="http://via.placeholder.com/350x200" alt=""/>
          <hr/>
          <div className="card-body">
            <p className="card-text" style={{whiteSpace:"pre"}}>{description}</p>
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
