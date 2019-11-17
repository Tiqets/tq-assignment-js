import React from 'react';
import PropTypes from 'prop-types';
import './actionButton.css'

/* Feel free to make this a functional component if you consider it necessary */
const ActionButton = (props) => {
  const { label } = props

  return (
    <button className="actionButton" type="button">{label}</button>
  )
};

ActionButton.propTypes = {
  label: PropTypes.string
}

ActionButton.defaultProps = {
  label: 'Search'
}

export default ActionButton;
