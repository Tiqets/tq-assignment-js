import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../reusable/ActionButton';
import Input from '../reusable/Input';
import './search.css';

/* Feel free to make this a functional component if you consider it necessary */
const Search = (props) => {
  const { handleSearch, updateQuery } = props;

  return (
    <form className="search" role="search" onSubmit={handleSearch}>
      <div className="search_input"><Input placeholder="What are you looking for?" name="search" onChangeHandler={updateQuery} /></div>
      <ActionButton label="Search" onSubmit={handleSearch} />
    </form>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func,
  updateQuery: PropTypes.func,
};

Search.defaultProps = {
  handleSearch: (e) => {
    e.preventDefault();
    return false;
  },
  updateQuery: () => false,
};


export default Search;
