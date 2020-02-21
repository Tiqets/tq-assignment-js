import React from 'react';

// Components
import InputGroup from '../InputGroup';
import Label from './Label';

const InputField = ({ name, placeholder, className, onChange }) => (
  <input
    type="text"
    id={`input-${name}`}
    name={name}
    className={className || 'form__cell-input'}
    placeholder={placeholder}
    onChange={onChange}
  />
  < />
);

const Input = props => <InputGroup {...props} component={InputField} />;

export default Input;
