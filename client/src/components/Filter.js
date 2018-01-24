import React, { Component } from "react";
import { Input } from "semantic-ui-react";

export default class Filter extends Component {

  render() {
    return (
      <div className="container-fluid pb-3">
        <div className="form-group">
          <label>Category</label>
          <select className="form-control">
            <option value="">All</option>
            <option value="furniture">Furniture</option>
            <option value="electronics">Electronics</option>
            <option value="health&beauty">Health & Beauty</option>
            <option value="books">Books</option>
            <option value="officesupplies">Office Supplies</option>
            <option value="automotive">Automotive</option>
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
              <label className="d-block">Price Range: </label>
              <div className="row no-gutters">
                <div className="col-5">
                  <Input
                    icon="dollar"
                    iconPosition="left"
                    size="small"
                    type="number"
                    autoComplete="off"
                    placeholder="min"
                    fluid
                  />
                </div>
                <div className="mx-2 mt-2">&mdash;</div>
                <div className="col-5">
                  <Input
                    icon="dollar"
                    iconPosition="left"
                    size="small"
                    type="number"
                    autoComplete="off"
                    placeholder="max"
                    fluid
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <button className="btn btn-info w-100"><i className="fa fa-filter" aria-hidden="true"></i> Filter</button>
          </div>
        </div>
      </div>
    );
  }

}
