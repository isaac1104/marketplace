import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as actions from "./../actions";
import { connect } from "react-redux";
import PostItem from "./../components/PostItem";

class HomeContent extends Component {

  componentDidMount() {
    this.props.fetchPostData();
  }

  render () {
    console.log(this.props.postData);
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
        <div className="row">
          {/* Map Through post data and pass into PostItem as props? */}
          <PostItem
            id="1"
            title="Post Title"
            location="city, state"
            timestamp="1/23/2018 12:23 PM"
            price="20.00"
          />
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
