import React, { Component } from "react";

class Searchbar extends Component {

  render() {
    return (
        <form className={this.props.navbar? "input-group d-md-none my-3": "input-group"}>
          <input type="text" className="form-control" placeholder="Search" aria-label="search" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button className="btn btn-outline-success" type="button">Search</button>
          </div>
        </form>
    );
  }

}

export default Searchbar;
