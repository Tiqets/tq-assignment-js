import React from 'react';

const Label = ({ id, label, className }) => (
  <label className={className || 'form__label'} htmlFor={id}>
    {label}
  </label>
);

export default Label;
