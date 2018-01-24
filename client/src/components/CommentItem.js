import React from 'react';

const CommentItem = (props) => {
  return (
    <div class="media mt-3">
      <div class="col-3">
        <img src="http://via.placeholder.com/300x300" alt="" class="img-fluid"/>
      </div>
      <div class="col-9">
        <div class="media-body">
          <h5 class="mt-0">{props.username}</h5>
          <p><span class="badge badge-secondary">{props.timestamp}</span></p>
          <p>{props.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
