import React from 'react';
import ActionButton from '../ActionButton';
import Input from '../Input'
import './search.css'

/* Feel free to make this a functional component if you consider it necessary */
const Search = () => {
  return (
    <div className="search">
      <div className="search_input"><Input placeholder="What are you looking for?" /></div>
      <ActionButton label="Search" />
    </div>
  );
}

export default Search;
