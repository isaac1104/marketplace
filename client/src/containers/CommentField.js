import React, { Component } from 'react';
import { Dimmer, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "./../actions";
import { Link } from "react-router-dom";

class CommentField extends Component {

  state={
    comment: ""
  }

  onSubmit = () => {
    this.props.addNewComment(this.props.user.data[0].username, this.props.postId, this.state.comment);
    this.setState({comment:""});
  }

  renderCommentField = () => {
    if (this.props.user.data) {
      return (
        <div className="row align-items-center">
          <div className="col-3 text-center">
            <img src="http://via.placeholder.com/300x300" alt="" className="img-fluid"/>
            <h5 className="mt-0">{this.props.user.data[0].username}</h5>
          </div>
          <div className="col-9">
            <form>
              <div className="form-group">
                <label>Leave a Comment</label>
                <textarea className="form-control" style={{resize: "none", height: "100px"}} value={this.state.comment} onChange={e=>this.setState({comment:e.target.value})}/>
              </div>
              <button type="button" className="btn btn-primary pull-right" onClick={this.onSubmit} disabled={!this.state.comment}>Submit</button>
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
    user: state.logInUser,
    addComment: state.addComment
  }
}

export default connect(mapStateToProps, actions)(CommentField);
