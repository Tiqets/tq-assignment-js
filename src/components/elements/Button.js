import React from 'react';

const Button = ({ children, className, ...props }) => (
  <button
    type="button"
    className={className || 'form__cell-button'}
    {...props}
  >
    {children}
  </button>
);


export default Button;
