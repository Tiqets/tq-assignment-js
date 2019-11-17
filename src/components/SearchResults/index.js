import React from 'react';
import PropTypes from 'prop-types';
import TicketRow from '../reusable/TicketRow';
import './searchResults.css';

/* Feel free to make this a functional component if you consider it necessary */
const SearchResults = (props) => {
  const { searchResults } = props;
  const rows = searchResults.map((row) => (
    <TicketRow imageUrl={row.image} title={row.title} summary={row.summary} price={row.price} productUrl={row.productUrl} key={row.id} />
  ));
  return (
    <div className="searchResults">
      {rows}
    </div>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.shape({
    productUrl: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    summary: PropTypes.string,
  })),
};

SearchResults.defaultProps = {
  searchResults: [],
};

export default SearchResults;
