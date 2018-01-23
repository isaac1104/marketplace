import React, { Component } from "react";

export default class Filter extends Component {

  render() {
    return (
      <div className="container-fluid pb-3">
        <div className="form-group">
          <label>Category</label>
          <select className="form-control">
            <option>Furniture</option>
            <option>Electronics</option>
            <option>Health & Beauty</option>
          </select>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 col-lg-4">
            <div className="form-group">
              <label>Order By</label>
              <select className="form-control">
                <option>Newest</option>
                <option>Cheapest</option>
              </select>
            </div>
          </div>
          <div className="col-10 col-lg-8">
            <div className="form-group">
              <label>Price Range: </label>
              <div className="row no-gutters">
                <div className="col-5 input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">$</div>
                  </div>
                  <input type="number" min="0" className="form-control" placeholder="min" />
                </div>
                <div className="mx-2 mt-2">&mdash;</div>
                <div className="col-5 input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">$</div>
                  </div>
                  <input type="number" min="0" className="form-control" placeholder="max" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <button className="btn btn-info w-100"><i class="fa fa-filter" aria-hidden="true"></i> Filter</button>
          </div>
        </div>
      </div>
    );
  }

}
