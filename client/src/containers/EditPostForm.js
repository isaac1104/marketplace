import React, { Component } from 'react';
import * as actions from './../actions';
import { connect } from 'react-redux';
import { Button } from "semantic-ui-react";

class EditPostForm extends Component {
  state={
    title: this.props.postData.title,
    category: this.props.postData.category,
    location: this.props.postData.location,
    price: this.props.postData.price,
    description: this.props.postData.description
  }

  componentWillUnmount() {
    this.props.resetPostState();
  }

  formSubmit = () => {
    // console.log(this.state);
    const { category, location, price, description } = this.state;
    this.props.editPost(this.props.postData.id, category, location, price, description);
    window.history.back();
    // const post = this.props.form.post.values;
    // if (post.category && post.location && post.price && post.description) {
    //   console.log("edit post simulation");
    //   console.log(post);
    //   this.props.editPost(post.category, post.location, post.price, post.description);
    // } else {
    //   console.log("Required field validation");
    // }
  }

  // redirectToMarket = () => {
  //   if (this.props.editPost.success) {
  //     return (
  //       <Redirect to={"/market"}/>
  //     );
  //   } else {
  //     return (
  //       <div></div>
  //     );
  //   }
  // }

  render () {

    return (
      <form>
        <div>
          <div className="form-group">
            <label className="d-block">Title</label>
            <input name="title" type="text" className="form-control" style={{maxWidth:"380px"}} autoComplete="off" spellCheck="false" value={this.state.title} disabled/>
          </div>
          <div className="form-group">
            <label>Category</label>
            <select name="category" className="form-control" style={{maxWidth:"380px"}} value={this.state.category} onChange={e=>this.setState({category:e.target.value})}>
              <option value="furniture">Furniture</option>
              <option value="electronics">Electronics</option>
              <option value="healthandbeauty">Health & Beauty</option>
              <option value="books">Books</option>
              <option value="officesupplies">Office Supplies</option>
              <option value="automotive">Automotive</option>
            </select>
          </div>
          <div className="form-group w-75">
            <label>Location</label>
            <input name="location" type="text" className="form-control" style={{maxWidth:"380px"}} autoComplete="off" value={this.state.location} spellCheck="false" onChange={e=>this.setState({location:e.target.value})}/>
          </div>
          <div className="form-group">
            <label>Price</label>
            <div style={{position:"relative"}}>
              <i className="fa fa-dollar" style={{position:"absolute", opacity: 0.75, padding: "10px 10px"}}></i>
              <input name="price" type="number" autoComplete="off" style={{maxWidth:"380px"}} value={this.state.price} className="form-control pl-4" onChange={e=>this.setState({price:e.target.value})}/>
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea name="description" className="form-control" style={{resize:"none", height: "160px"}} value={this.state.description} onChange={e=>this.setState({description:e.target.value})}/>
          </div>
          <div className="text-center">
            <Button
              className="mb-2 mr-3"
              type="button"
              color="blue"
              disabled={!this.state.description || !this.state.price || !this.state.location}
              onClick={this.formSubmit}
            >
              Update
            </Button>
            <Button color="red" onClick={()=>{window.history.back();}} type="button">Cancel</Button>
          </div>
        </div>
        {/* {this.redirectToMarket()} */}
      </form>
    );
  }

}


function mapStateToProps(state) {
  return {
    form: state.form,
    user: state.logInUser,
    editPost: state.editPost
  }
}


// export default reduxForm({
//   form: "post"
//  })(connect(mapStateToProps, actions)(EditPostForm));
export default connect(mapStateToProps, actions)(EditPostForm);
