import { ProcessStepCodesEnum } from '../../../features/Pay/types';
import { EXECUTE__SET_ACCESSIBLE_STEP } from './types';

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
