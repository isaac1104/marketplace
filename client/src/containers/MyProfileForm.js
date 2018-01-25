import React, { Component } from 'react';

export default class MyProfileForm extends Component {

  render() {
    return(
      <form>
        <div className="form-group">
          <label>Username</label>
          <input type="text" disabled className="form-control" value={this.props.username}/>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-6">
              <label>First Name</label>
              <input type="text" disabled className="form-control" value={this.props.firstname}/>
            </div>
            <div className="col-6">
              <label>Last Name</label>
              <input type="text" disabled className="form-control" value={this.props.lastname}/>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" value={this.props.email}/>
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="number" min="0" className="form-control" value={this.props.phone}/>
        </div>
        <div className="form-group">
          <label>Zip Code</label>
          <input type="number" min="0" className="form-control" value={this.props.zipcode}/>
        </div>
        <div className="text-center">
          <button className="btn btn-outline-info mr-3">Update</button>
          <button className="btn btn-outline-warning">Reset</button>
        </div>
      </form>
    );
  }

}
