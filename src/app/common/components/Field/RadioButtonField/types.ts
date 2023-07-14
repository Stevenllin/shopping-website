import { FieldInputProps } from 'formik';

export interface RadioButtonFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  field?: FieldInputProps<any>;
  index?: number;
}
