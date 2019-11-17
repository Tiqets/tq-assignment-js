import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

/* Feel free to make this a functional component if you consider it necessary */
const Input = (props) => {
  const { placeholder } = props;
  return (
    <input className="input" type="text" placeholder={placeholder} />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: 'Input',
};

export default Input;
