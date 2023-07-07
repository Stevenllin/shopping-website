import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { ModalNamesEnum } from '../../../../core/enums/ui/modals';
import { executeLogin } from '../../../../store/features/login/actions'
import FormikProvider from '../../CompoundComponent/Form';
import InputTextField from '../../Field/InputTextField';
import Modal from '../Modal';
import { MemberLoginModalProps, FormValues } from './types';

const MemberLoginModal: React.FC<MemberLoginModalProps> = (props) => {
  const reduxDispatch = useDispatch();
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
    onSubmit: async (formValues) => {
      reduxDispatch(executeLogin(formValues.username, formValues.password))
    }
  });
  return (
    <Modal
      name={ModalNamesEnum.MemberLoginModal}
      className="member-login-modal"
      title="Member Login"
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
        <p className="color-main-normal">Please this username: mor_2314 password: 83r5^_ to login</p>
        <FormikProvider.FormSubmit></FormikProvider.FormSubmit>
      </FormikProvider>
    </Modal>
  )
}

export default MemberLoginModal;
