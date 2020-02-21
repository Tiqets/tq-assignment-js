import React  from 'react';

// Components
import Label from './elements/Label';

// HOC
const InputGroup = props => {
  const Component = props.component;
  return(
    <>
      {props.label && <Label label={props.label} id={`input-${props.name}`}/>}
      <div className={`form__cell ${props.wrapperCellClassName}`}>
        <Component {...props} />
        {props.renderComponent}
      </div>
    </>
  )
};

export default InputGroup;
