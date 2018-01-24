import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = (props) => {
  const url = `/post/${props.id}`;
  return(
    <div className="col-12 col-sm-6 col-md-4 mb-2">
      <div className="card">
        <Link to={url}><img className="card-img-top img-fluid" src="http://via.placeholder.com/300x300" alt="card"/></Link>
        <div className="card-body">
          <Link to={url}><h5 className="card-title">{props.title}</h5></Link>
          <p className="text-muted">{props.location}</p>
          <p><span className="badge badge-dark">{props.timestamp}</span></p>
          <p className="card-text">$ {props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
