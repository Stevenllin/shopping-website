import { FormikContextType } from 'formik';
import FormSubmit from './FormSubmit';

export interface ChildComponents {
  FormSubmit: typeof FormSubmit;
}

export interface FormikContainerProps {
  formik: FormikContextType<any>
}
