import React from 'react';
import ActionButton from './ActionButton';
import Input from './Input'

/* Feel free to make this a functional component if you consider it necessary */
class Search extends React.Component {
  render() {
    return (
      <div>
        <Input placeholder="What are you looking for?" />
        <ActionButton label="Search" />
      </div>
    );
  }
}

export default Search;
