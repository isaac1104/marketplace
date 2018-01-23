import React, { Component } from "react";
import * as actions from './../actions';
import { connect } from 'react-redux';

class HomeContent extends Component {

  greetUser = () => {
    if (this.props.currentUser.loggedIn) {
      return (
        <h1>Welcome {this.props.currentUser.data[0].username}</h1>
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
    console.log(this.props.currentUser.loggedIn);
    return (
      <div style={style.container}>
        {this.greetUser()}
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
