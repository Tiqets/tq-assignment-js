import React from 'react';
import PropTypes from 'prop-types';

/* Feel free to make this a functional component if you consider it necessary */
const Input = (props) => {
  const { placeholder } = props;
  return (
    <input type="text" placeholder={placeholder} />
  )
}

Input.propTypes = {
  placeholder: PropTypes.string
}

Input.defaultProps = {
  placeholder: 'Input'
}

export default Input;
