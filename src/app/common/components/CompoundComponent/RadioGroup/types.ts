import RadioButtonField from '../../Field/RadioButtonField';

export interface RadioGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export interface RadioGroupFieldChildComponents {
  Radio: typeof RadioButtonField;
}
