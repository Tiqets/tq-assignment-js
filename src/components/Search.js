import React from 'react';

// Components
import Input from './elements/Input';
import Button from './elements/Button';

const Search = ({handleSearch}) => {
  return (
    <Input
      name="search"
      label="Search"
      placeholder="What are you looking for?"
      renderComponent={
        <Button onClick={handleSearch}>
          {'Search'}
        </Button>
      }
    />
  );
};


export default Search;
