import React from 'react';
import PropTypes from 'prop-types';
import './actionButton.css';

/* Feel free to make this a functional component if you consider it necessary */
const ActionButton = (props) => {
  const { label, role } = props;

  return (
    <button className="actionButton" type="button" role={role}>{label}</button>
  );
};

ActionButton.propTypes = {
  label: PropTypes.string,
  role: PropTypes.string,
};

ActionButton.defaultProps = {
  label: 'Search',
  role: 'button',
};

export default ActionButton;
