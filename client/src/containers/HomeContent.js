import React, { Component } from "react";
import * as actions from './../actions';
import { connect } from 'react-redux';

class HomeContent extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render () {

    const style = {
      container: {
        marginLeft: "210px"
      }
    }
    console.log(this.props.data);
    return (
      <div style={style.container}>
        <h1>Welcome</h1>
        <h3>More info is on the way...</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps, actions)(HomeContent);
