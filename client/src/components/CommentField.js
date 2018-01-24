import React, { Component } from 'react';

export default class CommentField extends Component {

  render() {
    return(
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
  }
}
