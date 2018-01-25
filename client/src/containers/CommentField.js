import React, { Component } from 'react';
import { Dimmer, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "./../actions";
import { Link } from "react-router-dom";

class CommentField extends Component {

  renderCommentField = () => {
    if (this.props.user.loggedIn) {
      return (
        <div className="row">
          <div className="col-3 text-center">
            <img src="http://via.placeholder.com/300x300" alt="" className="img-fluid"/>
            <h5 className="mt-0">Username</h5>
          </div>
          <div className="col-9">
            <form>
              <div className="form-group">
                <label>Comment</label>
                <textarea className="form-control" style={{resize: "none", height: "100px"}}></textarea>
              </div>
              <button type="submit" className="btn btn-primary pull-right">Submit</button>
            </form>
          </div>
        </div>
      );
    } else {
      return (
          <div className="row justify-content-center">
            <div className="col-11" style={{height:"200px"}}>
              <Dimmer active>
                <Header as="h2" style={{ color:"white" }}>
                  Please <Link to="/">Sign In</Link> to post a comment
                </Header>
                <p className="text-muted">Don't have an account yet?</p>
                <Link to="/signup">Sign up for full features for free!</Link>
              </Dimmer>
            </div>
          </div>
      );
    }
  }

  render() {
    return(
      <div>
        {this.renderCommentField()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.logInUser
  }
}

export default connect(mapStateToProps, actions)(CommentField);
