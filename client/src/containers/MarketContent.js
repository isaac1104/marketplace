import React, { Component } from "react";
import PostItem from "./../components/PostItem";
import Filter from "./../components/Filter";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./../actions";
import { Loader } from "semantic-ui-react";

class MarketContent extends Component {

  componentDidMount() {
    this.props.fetchPostData();
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

  render () {
    return (
      <div>
        <h1 className="d-inline-block">Market</h1>
        <Link to="/add-post"><button className="btn btn-success d-inline-block pull-right">Write a Post</button></Link>
        <hr className="my-3"/>
        <Filter />
        <div className="row">
          {this.renderPosting()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postData: state.postData
  }
}

export default connect(mapStateToProps, actions)(MarketContent);
