import React from 'react';
import { Form, FormikProvider } from 'formik';
import FormSubmit from './FormSubmit';
import { FormikContainerProps, ChildComponents } from './types';

const FormikContainer: React.FC<FormikContainerProps> & ChildComponents = ({ formik, children }) => {
  return (
    <FormikProvider value={formik}>
      <Form>
        {children}
      </Form>
    </FormikProvider>
  )
}


FormikContainer.FormSubmit = FormSubmit;

export default FormikContainer;
