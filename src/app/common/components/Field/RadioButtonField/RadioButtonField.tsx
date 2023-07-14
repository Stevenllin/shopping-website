import React, { useRef } from 'react';
import { RadioButtonFieldProps } from './types';

const RadioButtonField: React.FC<RadioButtonFieldProps> = ({ field, id, ...props }) => {

  return (
    <div className="field-radio">
      <input
        type="radio"
        {...field}
      />
      <label
      >
        {props.children}
      </label>
    </div>
  )
}

export default RadioButtonField;
