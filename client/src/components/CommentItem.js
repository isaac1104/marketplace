import React from 'react';

const CommentItem = (props) => {
  return (
    <div className="media mt-3">
      <div className="col-3">
        <img src="http://via.placeholder.com/300x300" alt="" className="img-fluid"/>
      </div>
      <div className="col-9">
        <div className="media-body">
          <h5 className="mt-0">{props.username}</h5>
          <p><span className="badge badge-secondary">{props.timestamp}</span></p>
          <p>{props.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
