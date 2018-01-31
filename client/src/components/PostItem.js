import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = (props) => {
  const url = `/post/${props.id}`;

  let date = new Date(props.timestamp+' UTC');

  return(
    <div className="col-12 col-sm-6 col-lg-4 mb-2">
      <div className="card">
        <div className="card-img-top text-center d-flex align-items-center justify-content-center" style={{height: "100%", minHeight:"200px" , width: "100%", backgroundColor: "black"}}>
          <Link to={url}><img className="d-block" src="http://via.placeholder.com/340x300" alt="card" style={{maxHeight:"200px", maxWidth: "100%"}}/></Link>
        </div>
        <div className="card-body">
          <Link to={url}><h5 className="card-title">{props.title}</h5></Link>
          <p className="text-muted">{props.location}</p>
          <p><span className="badge badge-dark">{date.toLocaleString()}</span></p>
          <p className="card-text">$ {props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
