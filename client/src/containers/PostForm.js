import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from './../actions';
import { connect } from 'react-redux';
import { Input } from "semantic-ui-react";

class PostForm extends Component {

  formSubmit = () => {
    const post = this.props.form.post.values;
    console.log(post);
  }

  render () {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <div>
          <div className="form-group">
            <label>Title</label>
            <Field name="title" component="input" type="text" className="form-control" style={{maxWidth:"380px"}} autoComplete="off"/>
          </div>
          <div className="form-group">
            <label>Category</label>
            <select className="form-control" style={{maxWidth:"380px"}}>
              <option value="">Select a Category</option>
              <option value="furniture">Furniture</option>
              <option value="electronics">Electronics</option>
              <option value="health&beauty">Health & Beauty</option>
              <option value="books">Books</option>
              <option value="officesupplies">Office Supplies</option>
              <option value="automotive">Automotive</option>
            </select>
          </div>
          <div className="form-group w-75">
            <label>Location</label>
            <Field name="location" component="input" type="text" className="form-control" style={{maxWidth:"380px"}} autoComplete="off"/>
          </div>
          <div className="form-group w-75">
            <label className="d-block">Price</label>
            <Field
              name="price"
              component={ Input }
              icon="dollar"
              iconPosition="left"
              size="small"
              type="number"
              autoComplete="off"
              fluid
              style={{maxWidth:"380px"}}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <Field name="description" component="textarea" type="text" className="form-control" style={{resize:"none", height: "160px"}}/>
          </div>
          <div className="text-center">
            <button className="btn btn-outline-primary mr-5">Upload</button>
            <button className="btn btn-outline-danger" onClick={()=>{window.history.back()}}>Cancel</button>
          </div>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    form: state.form,
  };
}

export default reduxForm({ form: "post" })(connect(mapStateToProps, actions)(PostForm));
