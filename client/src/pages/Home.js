import React from "react";
import Sidebar from "./../components/Sidebar";
import Navbar from "./../components/Navbar";
import HomeContent from "./../containers/HomeContent";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row py-3">
          <div className="col-md-4 d-none d-md-block">
            <Sidebar/>
          </div>
          <div className="col-md-8 col-12 pt-2">
            <HomeContent/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
