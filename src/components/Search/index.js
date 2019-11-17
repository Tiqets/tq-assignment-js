import React from 'react';
import ActionButton from '../ActionButton';
import Input from '../Input';
import './search.css';

/* Feel free to make this a functional component if you consider it necessary */
const Search = () => {
  const formSubmitHandler = (e) => {
    // Place holder for now
    e.preventDefault();
    return false;
  };

  return (
    <form className="search" role="search" onSubmit={formSubmitHandler}>
      <div className="search_input"><Input placeholder="What are you looking for?" /></div>
      <ActionButton label="Search" />
    </form>
  );
};

export default Search;
