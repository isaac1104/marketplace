import React from "react";
import Sidebar from "./../components/Sidebar";
import Navbar from "./../components/Navbar";
import MarketContent from "./../containers/MarketContent";

const Market = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row py-3">
          <div className="col-md-4 d-none d-md-block">
            <Sidebar/>
          </div>
          <div className="col-md-8 col-12 pt-2">
            <MarketContent/>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Market;
