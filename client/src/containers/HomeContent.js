import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomeContent extends Component {

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
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 mb-2">
            <div className="card">
              <Link to="#"><img className="card-img-top img-fluid" src="http://via.placeholder.com/300x300"/></Link>
              <div className="card-body">
                <Link to="#"><h5 className="card-title">Brand New Bed Frame</h5></Link>
                <p className="text-muted">Buena Park, CA</p>
                <p><span className="badge badge-dark">1/22/2018 11:50 PM</span></p>
                <p className="card-text">$79.99</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-2">
            <div className="card">
              <Link to="#"><img className="card-img-top img-fluid" src="http://via.placeholder.com/300x300"/></Link>
              <div className="card-body">
                <Link to="#"><h5 className="card-title">Brand New Bed Frame</h5></Link>
                <p className="text-muted">Buena Park, CA</p>
                <p><span className="badge badge-dark">1/22/2018 11:50 PM</span></p>
                <p className="card-text">$79.99</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-2">
            <div className="card">
              <Link to="#"><img className="card-img-top img-fluid" src="http://via.placeholder.com/300x300"/></Link>
              <div className="card-body">
                <Link to="#"><h5 className="card-title">Brand New Bed Frame</h5></Link>
                <p className="text-muted">Buena Park, CA</p>
                <p><span className="badge badge-dark">1/22/2018 11:50 PM</span></p>
                <p className="card-text">$79.99</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-2">
            <div className="card">
              <Link to="#"><img className="card-img-top img-fluid" src="http://via.placeholder.com/300x300"/></Link>
              <div className="card-body">
                <Link to="#"><h5 className="card-title">Brand New Bed Frame</h5></Link>
                <p className="text-muted">Buena Park, CA</p>
                <p><span className="badge badge-dark">1/22/2018 11:50 PM</span></p>
                <p className="card-text">$79.99</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-2">
            <div className="card">
              <Link to="#"><img className="card-img-top img-fluid" src="http://via.placeholder.com/300x300"/></Link>
              <div className="card-body">
                <Link to="#"><h5 className="card-title">Brand New Bed Frame</h5></Link>
                <p className="text-muted">Buena Park, CA</p>
                <p><span className="badge badge-dark">1/22/2018 11:50 PM</span></p>
                <p className="card-text">$79.99</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-2">
            <div className="card">
              <Link to="#"><img className="card-img-top img-fluid" src="http://via.placeholder.com/300x300"/></Link>
              <div className="card-body">
                <Link to="#"><h5 className="card-title">Brand New Bed Frame</h5></Link>
                <p className="text-muted">Buena Park, CA</p>
                <p><span className="badge badge-dark">1/22/2018 11:50 PM</span></p>
                <p className="card-text">$79.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
