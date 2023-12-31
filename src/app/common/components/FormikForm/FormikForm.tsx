import React, { useEffect } from 'react';
import { useFormikContext, Form } from 'formik';
import { FormikFormProps } from './types';

const FormikForm: React.FC<FormikFormProps> = (props) => {
  const { errors, isSubmitting } = useFormikContext();

  /**
   * @description Focus on invalid field
   */
  useEffect(() => {
    // 說明：這個 Effect 用於處理表單驗證錯誤，控制 Browser 視窗移動至第一個 invalid field。
    // 備註：支援 Nested 資料結構。
    if (!isSubmitting) return;
    if (Object.keys(errors).length > 0) {
      const selectorKey = getKeysRecursively(errors);
      const firstInvaildField = document.getElementsByName(selectorKey)[0];
      if (firstInvaildField) firstInvaildField.focus();
    }

    function getKeysRecursively (errors: any): any {
      if (isObject(errors)) {
        const currentKey = Object.keys(errors)[0];
        if (!getKeysRecursively(errors[currentKey])) {
          return currentKey;
        } else {
          return currentKey + '.' + getKeysRecursively(errors[currentKey]);
        }
      }
      if (Array.isArray(errors)) {
        const arrIndex = errors.map((_, i) => i).filter((i) => errors[i]);
        const currentKey = arrIndex[0];
        if (!getKeysRecursively(errors[currentKey])) {
          return currentKey;
        } else {
          return currentKey + '.' + getKeysRecursively(errors[currentKey]);
        }
      }
      return '';
    };

    function isObject (value: any) {
      return value && typeof value === 'object' && value.constructor === Object;
    };
  }, [errors, isSubmitting]);

  return (
    <Form {...props}>
      {props.children}
    </Form>
  )
}

export default FormikForm;
