import React, { Component } from "react";
import * as actions from './../actions';
import { connect } from 'react-redux';

class HomeContent extends Component {

  greetUser = () => {
    if (this.props.currentUser) {
      return (
        <h1>Welcome {this.props.currentUser[0].username}</h1>
      );
    } else {
      return (
        <h1>Welcome Guest</h1>
      );
    }
  }

  render () {

    const style = {
      container: {
        marginLeft: "210px"
      }
    }
    console.log(this.props.currentUser);
    return (
      <div>
        <h1>Home Section</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.logInUser
  }
}

export default connect(mapStateToProps, actions)(HomeContent);
