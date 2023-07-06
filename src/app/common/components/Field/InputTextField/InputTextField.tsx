import React from 'react';
import { useField } from 'formik';
import { InputTextFieldProps } from './types';

const InputTextField: React.FC<InputTextFieldProps> = ({ name, label, type, disabled, placeholder }) => {
  const [field, meta, helper] = useField(name);
  return (
    <div className={`field ${meta.error && meta.touched ? 'field__invalid' : ''}`}>
      <div className="field__title">{label.toUpperCase()}</div>
      <div className="field__body">
        <input
          {...field}
          type={type}
          className="field__input-text"
          disabled={disabled}
          placeholder={placeholder}
        />
      </div>
      <div className="field__error-message">{meta.error && meta.touched ? meta.error : ''}</div>
    </div>
  )
}

export default InputTextField;
