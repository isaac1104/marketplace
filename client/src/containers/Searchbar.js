import React, { Component } from "react";
import SearchField from "./../components/SearchField";
import { Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import * as actions from './../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Search extends Component {
  state={
    search: ""
  }


  formSubmit = ({ search }) => {
    this.setState({
      search: search
    });
  }

  renderSearchBtn = () => {
    if (this.state.search === "") {
      return (
        <Button
          color="teal"
          size="mini"
          type="submit"
          disabled
          >
          <Button.Content>SEARCH</Button.Content>
        </Button>
      );
    } else {
      return (
      <Link to={"/search/"+this.state.search} className="d-block">
       <Button
         color="teal"
         size="mini"
         type="submit"
         className="h-100"
         >
         <Button.Content>SEARCH</Button.Content>
       </Button>
       </Link>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    const style = {
      display: "flex",
      justifyContent: "center"
    }

    return (
      <div style={{textAlign:"center"}}>
        <form onSubmit={handleSubmit(this.formSubmit)} style={style} className={this.props.navbar? "input-group d-md-none my-3": "input-group"}>
          <Field
            name="search"
            component={SearchField}
            onFocus={(e)=>{e.target.select()}}
            onChange={(e)=>{this.setState({search: e.target.value})}}
          />
         {this.renderSearchBtn()}
        </form>
      </div>
    )
  }
}

export default reduxForm({ form: "search" })(connect(null, actions)(Search));
