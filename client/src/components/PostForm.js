import React from 'react';
import { Input } from "semantic-ui-react";

const PostForm = () => {
  return (
    <div>
      <div className="form-group">
        <label>Title</label>
        <input type="text" className="form-control" style={{maxWidth:"380px"}}/>
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
        <input type="text" className="form-control" style={{maxWidth:"380px"}}/>
      </div>
      <div className="form-group w-75">
        <label className="d-block">Price</label>
        <Input
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
        <textarea type="text" className="form-control" style={{resize:"none", height: "160px"}}></textarea>
      </div>
      <div className="text-center">
        <button className="btn btn-outline-primary mr-5">Upload</button>
        <button className="btn btn-outline-danger" onClick={()=>{window.history.back()}}>Cancel</button>
      </div>
    </div>
  );
}

export default PostForm;
