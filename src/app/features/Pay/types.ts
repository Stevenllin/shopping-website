import { ROUTES } from '../../core/router/paths';
/**
 * @description 流程步驟代碼
 */
export enum ProcessStepCodesEnum {
  /** 資訊確認頁面 */
  ConfirmInfo = '1',
  /** 同意條款頁面 */
  Clause = '2'
}

/**
 * @description 流程步驟文字
 */
export enum ProcessStepTextEnum {
  /** 資訊確認頁面 */
  ConfirmInfo = 'Confirm Your Information',
  /** 同意條款頁面 */
  Clause = 'Check the Clause'
}

/**
 * @description 流程路由對應步驟代碼
 */
export const ProcessRouteMatchesStep: Readonly<Record<string, ProcessStepCodesEnum>> = {
  /** 資訊確認頁面 (Step-1) */
  [ROUTES.PAY_CONFIRMINFO]: ProcessStepCodesEnum.ConfirmInfo,
  /** 同意條款頁面 (Step-2) */
  [ROUTES.PAY_CLAUSE]: ProcessStepCodesEnum.Clause
};

/**
 * @description 流程步驟代碼對應路由
 */
export const ProcessStepMatchesRoute: Readonly<Record<ProcessStepCodesEnum, string>> = {
  /** 資訊確認頁面 (Step-1) */
  [ProcessStepCodesEnum.ConfirmInfo]: ROUTES.PAY_CONFIRMINFO,
  /** 同意條款頁面 (Step-2) */
  [ProcessStepCodesEnum.Clause]: ROUTES.PAY_CLAUSE
};
