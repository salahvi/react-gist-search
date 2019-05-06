import React from "react";

const SearchForm = props => {
  return (
    <form onSubmit={e => props.handleSubmit(e)} className="form-inline">
      <div className="form-group">
        <input
          type="text"
          className="search-input"
          placeholder="Search Gist users"
          onChange={e => props.handleInputChange(e)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
