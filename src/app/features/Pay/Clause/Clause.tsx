import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormikContainer from '../../../common/components/CompoundComponent/Form';
import ArticleDisplayField from '../../../common/components/Field/ArticleDisplayField';
import AgreementField from '../../../common/components/Field/AgreementField';
import { FormValues } from './types';
import { resetPayAction } from '../../../store/features/pay/actions';
import { executeResetCartAction } from '../../../store/features/cart/actions';
import { BsArrowRight } from 'react-icons/bs';
import { routerHistory } from '../../../core/router/service';
import { ROUTES } from '../../../core/router/paths';

const Clause: React.FC = () => {
  const reduxDispatch = useDispatch();
  /** 初始表單值 */
  const initialFormValues: FormValues = {
    clause: false,
    regTermAgreeTime: '',
    radio: ''
  }

  const formik = useFormik<FormValues>({
    initialValues: {
      ...initialFormValues
    },
    validationSchema: Yup.object().shape({
      clause: Yup.boolean().oneOf([true]),
      regTermAgreeTime: Yup.string().required()
    }),
    onSubmit: (formValues) => {
      if (formValues.clause && formValues.regTermAgreeTime && formValues.radio === '1') {
        /** 清空購物車 */
        reduxDispatch(executeResetCartAction())
        /** 導回至首頁 */
        routerHistory.push(ROUTES.HOME)
      }
    }
  })

  /** 
   * @description 重新導回上一頁
   */
  const handleRedirectToConfirmInfo = () => {
    routerHistory.replace(ROUTES.PAY_CONFIRMINFO)
    reduxDispatch(resetPayAction())
  }

  /** 
   * @desciption 重置
   */
  useEffect(() => {
    return () => {
      /** 清除結帳流程 */
      reduxDispatch(resetPayAction())
    }
  }, [reduxDispatch])

  return (
    <div id="clause">
      <div className="context content-section">
        <FormikContainer formik={formik}>
          <div className="wrapper">
            <ArticleDisplayField name="clause" title="terms of purchase" scrollbar>
              <div className="article-content">
                <p>Lorem ipsum dolor sit amet, mea prompta tractatos ea, enim clita an est. In est timeam intellegam, error consequuntur ius no. Prima placerat quo et, te usu dicat affert soluta, his choro graeco intellegam no. Id labore accusata persecuti est, ea eam quaeque recteque torquatos. Causae electram eloquentiam vel id, te percipit expetenda periculis nec. Ius natum moderatius intellegebat no, mel no utinam graeci eloquentiam. Mea commodo admodum detraxit ut.</p>
                <p>Et nec mentitum probatus, cum id doctus cotidieque. Ius no latine antiopam, labore fierent sea an, sit ad sapientem dignissim. Assum ancillae referrentur ei sit. Vel primis disputationi an, ubique cotidieque an vix. Te eos alia causae, eum ea deseruisse conclusionemque. Ex mei prima detracto voluptua, nec nostro verear albucius in.</p>
                <p>Delenit repudiandae at vix. In est tamquam temporibus. Id amet salutandi necessitatibus has. Saepe concludaturque in mei, nam in pertinacia eloquentiam, magna posse partem duo ut. Enim scaevola perpetua at usu.</p>
                <p>An vix doming copiosae ullamcorper, adhuc animal sed cu, in volumus singulis qui. Ei per iuvaret moderatius conclusionemque, agam feugait noluisse eum an. Eum cu vide vivendo, ad quis pericula vis. Ius suas ignota invidunt eu. Qui tota fabulas mediocrem ut, ex omittantur reformidans vix.</p>
                <p>At noster recusabo mei, nam ea nibh audiam detracto. Vix autem denique appellantur cu, omnium laoreet inermis est no, zril democritum scribentur an nec. Sea ferri mazim an, mei eu torquatos deseruisse. Aperiam sanctus perfecto usu in, qui at scribentur dissentiunt, ei qui oratio partem.</p>
              </div>
            </ArticleDisplayField>
            <AgreementField
              name="regTermAgreeTime"
              agreeText="Agree"
              disagreeText="Disagree"
              onClick={() => formik.validateForm()}
              disabled={!formik.values.clause}
            />
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button type="button" className="button-minor m-2" onClick={handleRedirectToConfirmInfo}>Previous Page</button>
            <button type="submit" className="button-main m-2">Confirm <span><BsArrowRight className="icons icons-white" /></span></button>
          </div>
        </FormikContainer>
      </div>
      
    </div>
  )
}

export default Clause;
