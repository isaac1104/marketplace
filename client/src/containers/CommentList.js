import React, { Component } from 'react';
import CommentItem from "./../components/CommentItem";

export default class CommentList extends Component {
  render() {
    return (
      // Loop through data and display each in CommentItem component
      <CommentItem
        username="username"
        timestamp="1/23/2018 4:00 PM"
        comment="This is a test comment"
      />
    );
  }
}
