import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions";
import { Loader } from "semantic-ui-react";
import PostItem from "./../components/PostItem";

class SearchContent extends Component {

  componentDidMount() {
    this.props.searchPost(this.props.query);
  }

  renderPosting = () => {
    if (this.props.postData) {
      return this.props.postData.map(post => {
        return (
          <PostItem
            id={post.id}
            title={post.title}
            location={post.location}
            timestamp={post.timestamp}
            price={post.price}
            key={post.id}
          />
        );
      });
    } else if (this.props.postData === "") {
      return (
        <div className="jumbotron jumbotron-fluid w-100">
          <div className="container">
            <h1 className="text-center text-info"><i className="fa fa-info-circle" aria-hidden="true"></i> No Matching Result</h1>
            <h4 className="text-center">Try Different Search Keywords.</h4>
          </div>
        </div>
      );
    } else {
      return (
        <Loader active
          size="massive"
          inline="centered"
        >
          Loading
        </Loader>
      );
    }
  }

  renderNumOfResult = () => {
    if (this.props.postData) {
      let num_results = this.props.postData.length;
      if (num_results === 1) {
        return (
          <p className="text-muted">There is <span className="text-info">1</span> result.</p>
        );
      } else {
        return (
          <p className="text-muted">There are <span className="text-info">{num_results}</span> results.</p>
        );
      }
    }
  }

  render () {

    return (
      <div>
        <h1 className="d-inline-block">Search Result for: {this.props.query}</h1>
          {this.renderNumOfResult()}
        <hr className="my-3"/>
        <div className="row">
          {this.renderPosting()}
        </div>
      </div>
    );
  }
  }

  function mapStateToProps(state) {
  return {
    postData: state.postData,
  }
  }

  export default connect(mapStateToProps, actions)(SearchContent);
