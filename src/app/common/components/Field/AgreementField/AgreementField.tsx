import React from 'react';
import { useField } from 'formik';
import RadioGroup from '../../CompoundComponent/RadioGroup';
import { AgreementFieldProps } from './types';

const AgreementField: React.FC<AgreementFieldProps> = (props) => {
  const [,, helpers] = useField(props.name)

  /** 
   * @description 
   */
  const handleAgreeChange = () => {}
  
  /** 
   * @description
   */
  const handleDisagreeChange = () => {}

  return (
    <section id="agreement-field">
      <RadioGroup {...props} name="radio" label="">
        <RadioGroup.RadioButtonField value="1" onChange={handleAgreeChange}>
          <div className="m-2">{props.agreeText}</div>
        </RadioGroup.RadioButtonField>
        <RadioGroup.RadioButtonField value="0" onChange={handleDisagreeChange}>
          <div className="m-2">{props.disagreeText}</div>
        </RadioGroup.RadioButtonField>
      </RadioGroup>
    </section>
  )
}

export default AgreementField;