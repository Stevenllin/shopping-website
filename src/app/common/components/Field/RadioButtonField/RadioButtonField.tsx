import React, { useRef } from 'react';
import { RadioButtonFieldProps } from './types';

const RadioButtonField: React.FC<RadioButtonFieldProps> = ({ field, index, id, onClick, ...props }) => {
  const inputElemIdRef = useRef<string>(field ? `${id || field.name.split('.').join('-')}-${index}` : String(index));
  return (
    <div className="field-radio">
      <input
        type="radio"
        className="form-check-input"
        {...field}
        id={inputElemIdRef.current}
        name={props.name}
        value={props.value}
        onClick={onClick}
        onChange={props.onChange}
      />
      <label
        htmlFor={inputElemIdRef.current}
      >
        {props.children}
      </label>
    </div>
  )
}

export default RadioButtonField;
