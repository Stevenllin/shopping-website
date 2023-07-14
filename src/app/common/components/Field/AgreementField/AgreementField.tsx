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
      <RadioGroup {...props} label="">
        <RadioGroup.Radio value="1" onChange={handleAgreeChange}>
          <>{props.agreeText}</>
        </RadioGroup.Radio>
        <RadioGroup.Radio value="0" onChange={handleDisagreeChange}>
          <>{props.disagreeText}</>
        </RadioGroup.Radio>
      </RadioGroup>
    </section>
  )
}

export default AgreementField;