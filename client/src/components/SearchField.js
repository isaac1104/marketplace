import React from "react";
import { Input } from "semantic-ui-react";

const SearchField = ({ input, label }) => {
  return (
    <div>
      <label>{label}</label>
      <Input {...input}
        icon="search"
        iconPosition="left"
        size="small"
        type="text"
        autoComplete="off"
      />
    </div>
  )
}

export default SearchField;
