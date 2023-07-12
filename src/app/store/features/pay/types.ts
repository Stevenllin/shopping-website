import { ProcessStepCodesEnum } from '../../../features/Pay/types';

/** 結帳流程 State */
export interface PayState {
  process: ProcessStepCodesEnum[];
}

/** 結帳流程 Action */
export const EXECUTE__SET_ACCESSIBLE_STEP = 'EXECUTE__SET_ACCESSIBLE_STEP'

export interface SetAccessibleStepAction {
  type: typeof EXECUTE__SET_ACCESSIBLE_STEP;
  payload: {
    step: ProcessStepCodesEnum;
  }
}

export type PayActions = SetAccessibleStepAction