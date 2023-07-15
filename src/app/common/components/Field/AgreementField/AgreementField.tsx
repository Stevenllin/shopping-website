import React from 'react';
import { useField } from 'formik';
import RadioGroup from '../../CompoundComponent/RadioGroup';
import moment from 'moment';
import { AgreementFieldProps } from './types';

const AgreementField: React.FC<AgreementFieldProps> = (props) => {
  /** 此 name 來自於 regTermAgreeTime */
  const [,, helpers] = useField(props.name)

  /** 
   * @description 按下同意 radio button
   */
  const handleAgreeChange = (event: any) => {
    helpers.setValue(moment().format('YYYY-MM-DD HH:mm:ss.SSS'))
    if (props.onClick) props.onClick(event)
  }
  
  /** 
   * @description 按下不同意 radio button
   */
  const handleDisagreeChange = () => {
    helpers.setValue('')
  }

  return (
    <section id="agreement-field">
      {/** props 會包含傳進來的 name，因此，需補上 name 在此 */}
      <RadioGroup {...props} name="radio" label="" onClick={props.onClick}>
        <RadioGroup.RadioButtonField value="1" onClick={handleAgreeChange}>
          <div className="m-2">{props.agreeText}</div>
        </RadioGroup.RadioButtonField>
        <RadioGroup.RadioButtonField value="0" onClick={handleDisagreeChange}>
          <div className="m-2">{props.disagreeText}</div>
        </RadioGroup.RadioButtonField>
      </RadioGroup>
    </section>
  )
}

export default AgreementField;