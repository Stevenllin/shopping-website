import React from 'react';
import { useField } from 'formik';
import RadioButtonField from '../../Field/RadioButtonField';
import { RadioGroupProps, RadioGroupFieldChildComponents } from './types';

const RadioGroup: React.FC<RadioGroupProps> & RadioGroupFieldChildComponents = (props) => {
  const [field, meta] = useField(props.name)
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(event)
    field.onChange(event)
  }

  return (
    <>
      <div className="radio-name">{props.label}</div>
      <div className="d-flex justify-content-center">
        {React.Children.map(
          props.children,
          (child, index) => React.isValidElement(child) ? React.cloneElement<any>(child, { ...props, field: field, onChange: handleChange }) : child
        )}
      </div>
      {
        meta.error && meta.touched && (
          <div>{meta.error}</div>
        )
      }
    </>
  )
}

RadioGroup.Radio = RadioButtonField;

export default RadioGroup;
