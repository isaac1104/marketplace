import React from "react";
import Sidebar from "./../components/Sidebar";
import Navbar from "./../components/Navbar";
import SearchContent from "./../containers/SearchContent";

const Search = (props) => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row py-3">
          <div className="col-md-4 d-none d-md-block">
            <Sidebar/>
          </div>
          <div className="col-md-8 col-12 pt-2">
            <SearchContent query={props.match.params.query}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
