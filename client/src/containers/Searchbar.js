import React, { Component } from "react";
import SearchField from "./../components/SearchField";
import { Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import * as actions from './../actions';
import { connect } from 'react-redux';


class Search extends Component {

  formSubmit = ({ search }) => {
    // this.props.searchPost(search);
    window.location.href="/search/"+search;
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
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
          />
          <Button
            color="teal"
            size="mini"
            type="submit"
            disabled={pristine || submitting}>
            <Button.Content>SEARCH</Button.Content>
          </Button>
        </form>
      </div>
    )
  }
}

export default reduxForm({ form: "search" })(connect(null, actions)(Search));
