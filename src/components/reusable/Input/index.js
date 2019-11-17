import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

/* Feel free to make this a functional component if you consider it necessary */
const Input = (props) => {
  const { placeholder, name, onChangeHandler } = props;
  return (
    <input className="input" type="text" placeholder={placeholder} name={name} onChange={onChangeHandler} />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChangeHandler: PropTypes.func,
};

Input.defaultProps = {
  placeholder: 'Input',
  name: '',
  onChangeHandler: () => false,
};

export default Input;
