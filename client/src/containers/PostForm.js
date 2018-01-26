import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from './../actions';
import { connect } from 'react-redux';
import { Input, Button } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

class PostForm extends Component {

  componentWillUnmount() {
    this.props.resetPostState();
  }

  formSubmit = () => {
    const post = this.props.form.post.values;
    if (post.title && post.category && post.location && post.price && post.description) {
      this.props.addNewPost(this.props.user.data[0].username, post.title, post.category, post.location, post.price, post.description);
    } else {
      console.log("Required field validation");
    }
  }

  redirectToMarket = () => {
    if (this.props.newPost.success) {
      return (
        <Redirect to={"/market"}/>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  render () {

    const { handleSubmit, pristine, submitting, postId } = this.props;

    console.log(postId);

    return (
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <div>
          <div className="form-group">
            <label>Title</label>
            <Field name="title" component="input" type="text" className="form-control" style={{maxWidth:"380px"}} autoComplete="off"/>
          </div>
          <div className="form-group">
            <label>Category</label>
            <Field name="category" component="select" className="form-control" style={{maxWidth:"380px"}}>
              <option value="">Select a Category</option>
              <option value="furniture">Furniture</option>
              <option value="electronics">Electronics</option>
              <option value="healthandbeauty">Health & Beauty</option>
              <option value="books">Books</option>
              <option value="officesupplies">Office Supplies</option>
              <option value="automotive">Automotive</option>
            </Field>
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
            <Button
              className="btn btn-outline-primary mb-2 mr-3"
              type="submit"
              disabled={pristine || submitting}
              color="blue"
            >
              Upload
            </Button>
            <Button color="red" onClick={()=>{window.history.back();}} type="button">Cancel</Button>
          </div>
        </div>
        {this.redirectToMarket()}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    form: state.form,
    newPost: state.newPost,
    user: state.logInUser
  };
}

export default reduxForm({ form: "post" })(connect(mapStateToProps, actions)(PostForm));
