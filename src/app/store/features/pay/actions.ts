import { ProcessStepCodesEnum } from '../../../features/Pay/types';
import { EXECUTE__SET_ACCESSIBLE_STEP, EXECUTE__SET_CLAUSE, EXECUTE__RESET_PAY } from './types';

/**
 * @description 設置可訪問步驟 (Action)
 * @param step 當前步驟
*/
export const setAccessibleStepAction = (step: ProcessStepCodesEnum) => ({
  type: EXECUTE__SET_ACCESSIBLE_STEP,
  payload: {
    step
  }
})

/** 
 * @description 設置同意條款 (Action)
 */
export const setClauseAction = (clause: boolean) => ({
  type: typeof EXECUTE__SET_CLAUSE,
  payload: {
    clause
  }
})

/** 
 * @description 重置資料緩存
 */
export const resetPayAction = () => ({
  type: typeof EXECUTE__RESET_PAY
})