import React from "react";
import MyProfileSidebar from "./../components/MyProfileSidebar";
import Navbar from "./../components/Navbar";
import MyPostContent from "./../containers/MyPostContent";

const MyPost = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row py-3">
          <div className="col-12 col-md-4">
            <MyProfileSidebar/>
          </div>
          <div className="col-md-8 col-12 pt-2">
            <MyPostContent/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPost;
