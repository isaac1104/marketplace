import React, { Component } from "react";
import * as actions from './../actions';
import { connect } from 'react-redux';

class HomeContent extends Component {

  greetUser = () => {
    return (
      <h1>Welcome {sessionStorage.getItem("user")}</h1>
    );
  }

  render () {

    const style = {
      container: {
        marginLeft: "210px"
      }
    }
    console.log(this.props.currentUser);
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
