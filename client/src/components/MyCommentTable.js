import React from 'react';
import { Link } from 'react-router-dom';

const MyCommentTable = (props) => {
  let date = new Date(props.comment.timestamp+ ' UTC');
  if (props.post[0]) {
    return (
        <tr>
          <td><Link to={"/post/"+props.post[0].id}>{props.post[0].title}</Link></td>
          <td>{date.toLocaleString()}</td>
          <td>{props.comment.comment}</td>
          <td><a href="#" data-toggle="modal" data-target="#delete-confirmation" onClick={()=>document.getElementById("commentId").value=props.comment.id}>Delete</a></td>
        </tr>
    );
  }
}

export default MyCommentTable;
