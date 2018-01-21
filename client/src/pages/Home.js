import React from "react";
import Sidebar from "./../components/Sidebar";
import Navbar from "./../components/Navbar";
import HomeContent from "./../containers/HomeContent";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <HomeContent/>
    </div>
  );
}

export default Home;
