import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import * as actions from './../actions';
import { connect } from 'react-redux';
import { Input } from "semantic-ui-react";

class Filter extends Component {

  formSubmit = () => {
    const filter = this.props.form.filter.values;
    this.props.fetchFilteredPostData(filter.category, filter.order, filter.min, filter.max);
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <div className="container-fluid pb-3">
          <div className="form-group">
            <label>Category</label>
            <Field name="category" component="select" className="form-control">
              <option value="all">All</option>
              <option value="furniture">Furniture</option>
              <option value="electronics">Electronics</option>
              <option value="healthandbeauty">Health & Beauty</option>
              <option value="books">Books</option>
              <option value="officesupplies">Office Supplies</option>
              <option value="automotive">Automotive</option>
            </Field>
          </div>
          <div className="row justify-content-center">
            <div className="col-10 col-lg-4">
              <div className="form-group">
                <label>Order By</label>
                <Field name="order" component="select" className="form-control">
                  <option value="newest">Newest</option>
                  <option value="cheapest">Cheapest</option>
                </Field>
              </div>
            </div>
            <div className="col-10 col-lg-8">
              <div className="form-group">
                <label className="d-block">Price Range: </label>
                <div className="row no-gutters">
                  <div className="col-5">
                    <Field
                      name="min"
                      component={ Input }
                      icon="dollar"
                      iconPosition="left"
                      size="small"
                      type="number"
                      autoComplete="off"
                      fluid
                      min="0"
                      onFocus={(e)=>{e.target.select()}}
                    />
                  </div>
                  <div className="mx-2 mt-2">&mdash;</div>
                  <div className="col-5">
                    <Field
                      name="max"
                      component={ Input }
                      icon="dollar"
                      iconPosition="left"
                      size="small"
                      type="number"
                      autoComplete="off"
                      fluid
                      min="0"
                      onFocus={(e)=>{e.target.select()}}
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
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    form: state.form,
    postData: state.postData
  };
}

export default reduxForm({
  form: "filter",
  initialValues: { category: "all", order: "newest", min: 1, max: 10000 }
 })(connect(mapStateToProps, actions)(Filter));
