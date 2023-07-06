import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ModalNamesEnum } from '../../../../core/enums/ui/modals';
import FormikProvider from '../../CompoundComponent/Form';
import InputTextField from '../../Field/InputTextField';
import Modal from '../Modal';
import { MemberLoginModalProps, FormValues } from './types';

const MemberLoginModal: React.FC<MemberLoginModalProps> = (props) => {
  /**
   * @description 建立 Formik
   */
  const formik = useFormik<FormValues>({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required()
    }),
    onSubmit: async () => {
    }
  });
  return (
    <Modal
      name={ModalNamesEnum.MemberLoginModal}
      className="member-login-modal"
      title="會員登入"
      visible={props.visible}
    >
      <FormikProvider formik={formik}>
        <InputTextField
          name="username"
          type="text"
          label="username"
          disabled={false}
        />
        <InputTextField
          name="password"
          type="password"
          label="password"
          disabled={false}
        />
        <FormikProvider.FormSubmit></FormikProvider.FormSubmit>
      </FormikProvider>
    </Modal>
  )
}

export default MemberLoginModal;
