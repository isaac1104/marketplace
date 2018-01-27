import React from 'react';
import { Link } from 'react-router-dom';

const MyPostTable = (props) => {
  let date = new Date(props.post.timestamp+ ' UTC');
  return (
      <tr>
        <td>{props.post.category}</td>
        <td>{date.toLocaleString()}</td>
        <td><Link to={"/post/"+props.post.id}>{props.post.title}</Link></td>
        <td>$ {props.post.price}</td>
        <td><Link to={"/edit-post/"+props.post.id}>Edit</Link></td>
        <td><a href="#" data-toggle="modal" data-target="#delete-confirmation">Delete</a></td>
      </tr>


  );
}

export default MyPostTable;
