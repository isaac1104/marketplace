import React, { Component } from "react";
import PostItem from "./../components/PostItem";
import Filter from "./../components/Filter";

export default class AboutContent extends Component {

  render () {
    return (
      <div>
        <Filter />
        <div className="row">
          {/* Map Through post data and pass into PostItem as props? */}
          <PostItem
            id="1"
            title="Post Title"
            location="city, state"
            timestamp="1/23/2018 12:23 PM"
            price="20.00"
          />
          <PostItem
            id="2"
            title="Post Title"
            location="city, state"
            timestamp="1/23/2018 12:23 PM"
            price="20.00"
          />
          <PostItem
            id="3"
            title="Post Title"
            location="city, state"
            timestamp="1/23/2018 12:23 PM"
            price="20.00"
          />
        </div>
      </div>
    );
  }
}
