import React from 'react';

const CommentItem = (props) => {
  return (
    <div className="card my-3 bg-light py-2 pr-4">
      <div className="media mt-3">
        <div className="col-3">
          <img src="http://via.placeholder.com/300x300" alt="" className="img-fluid"/>
        </div>
        <div className="col-9">
          <div className="media-body">
            <div className="row justify-content-between">
              <div className="col">
                <h5 className="mt-0">{props.username}</h5>
              </div>
              <div className="col text-right">
                {props.currentUser===props.username? <i className="fa fa-trash" style={{cursor:"pointer"}} data-toggle="modal" data-target="#delete-comment-confirmation" onClick={()=>document.getElementById("commentId").value=props.id}></i>:<div></div>}
              </div>
            </div>
            <p><span className="badge badge-secondary">{props.timestamp}</span></p>
            <p style={{whiteSpace:"pre-wrap"}}>{props.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
