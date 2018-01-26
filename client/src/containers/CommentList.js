import React, { Component } from 'react';
import CommentItem from "./../components/CommentItem";


export default class CommentList extends Component {

  render() {

    const { data } = this.props.commentData;
    // console.log(data);
    if (data.length>=1) {
      return data.map(comment => {
        let date = new Date(comment.timestamp+' UTC');
        return (
          <CommentItem
            username={comment.username}
            timestamp={date.toLocaleString()}
            comment={comment.comment}
            key={comment.id}
          />
        );
      })
    } else {
      return(
        <div>Be the first one to leave a comment!</div>
      )
    }
  }
}
