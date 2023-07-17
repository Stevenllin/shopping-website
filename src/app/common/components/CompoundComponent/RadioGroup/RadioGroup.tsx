import React from 'react';
import { useField } from 'formik';
import RadioButtonField from '../../Field/RadioButtonField';
import { RadioGroupProps, RadioGroupFieldChildComponents } from './types';

const RadioGroup: React.FC<RadioGroupProps> & RadioGroupFieldChildComponents = (props) => {
  /** 此 name 來自於 radio */
  const [field, meta] = useField(props.name)
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(event)
    }
    field.onChange(event)
  }

  return (
    <div className="radio-group-container">
      <div className="radio-name">{props.label}</div>
      <div className="d-flex justify-content-center">
        {React.Children.map(
          props.children,
          (child, index) => React.isValidElement(child) ? React.cloneElement<any>(child, { index, field: field, name: props.name, disabled: props.disabled,  onChange: handleChange }) : child
        )}
      </div>
      {
        meta.error && meta.touched && (
          <div>{meta.error}</div>
        )
      }
    </div>
  )
}

RadioGroup.RadioButtonField = RadioButtonField;

export default RadioGroup;
