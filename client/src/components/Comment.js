import React from 'react';
import CommentField from "./CommentField";
import CommentList from "./CommentList";

const Comment = () => {
  return (
    <div className="jumbotron jumbotron-fluid py-2 my-2">
      <div className="container">
        <CommentField/>
        <hr className="my-2"/>
        <CommentList/>
      </div>
    </div>
  );
}

export default Comment;