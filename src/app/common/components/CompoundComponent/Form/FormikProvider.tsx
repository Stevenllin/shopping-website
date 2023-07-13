import React from 'react';
import { FormikProvider } from 'formik';
import FormikForm from '../../FormikForm';
import FormSubmit from './FormSubmit';
import { FormikContainerProps, ChildComponents } from './types';

const FormikContainer: React.FC<FormikContainerProps> & ChildComponents = ({ formik, children }) => {
  return (
    <FormikProvider value={formik}>
      <FormikForm>
        {children}
      </FormikForm>
    </FormikProvider>
  )
}


FormikContainer.FormSubmit = FormSubmit;

export default FormikContainer;
