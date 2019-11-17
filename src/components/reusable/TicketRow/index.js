import React from 'react';
import PropTypes from 'prop-types';
import './ticketRow.css';

/* Feel free to make this a functional component if you consider it necessary */
const TicketRow = (props) => {
  const {
    imageUrl, title, summary, price, productUrl,
  } = props;


  return (
    <a className="ticketRow" href={productUrl} target="_blank" rel="noopener noreferrer">
      <div className="ticketRow_imageWrapper">
        <img className="ticketRow_imageWrapper_image" src={imageUrl} alt="event venue" />
      </div>
      <div className="ticketRow_body">
        <h1 className="ticketRow_body_title">{title}</h1>
        <p className="ticketRow_body_summary">{summary}</p>
        <div className="ticketRow_body_priceWrapper">
          <p className="ticketRow_body_priceWrapper_price">{price.toFixed(2)}</p>
        </div>
      </div>
    </a>
  );
};

TicketRow.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  price: PropTypes.number,
  productUrl: PropTypes.string,
};

TicketRow.defaultProps = {
  imageUrl: '',
  title: 'Event',
  summary: 'Summary',
  price: 0,
  productUrl: '',
};

export default TicketRow;
