import React, { Component } from "react";
import * as actions from "./../actions";
import { connect } from "react-redux";
import PostItem from "./../components/PostItem";
import { Loader } from "semantic-ui-react";

class HomeContent extends Component {

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
        <div className="jumbotron">
          <h1 className="display-3">HOME</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim nunc sit amet mauris ornare, vel consequat velit luctus. Duis at accumsan lacus. Nulla sollicitudin convallis dolor vitae maximus. Praesent maximus est sed malesuada lobortis. Sed non dolor fringilla, consectetur dui vestibulum, semper arcu. Sed et cursus nisl.</p>
          <hr className="my-4"/>
          <p>Sed auctor ante mi, eget venenatis urna viverra sit amet. Morbi sit amet sollicitudin eros, egestas luctus leo. Ut fermentum tortor sit amet lacus hendrerit commodo.</p>
        </div>
        <h1>Recently Uploaded</h1>
        <hr className="my-2"/>
        <div className="row align-items-center">
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

export default connect(mapStateToProps, actions)(HomeContent);
