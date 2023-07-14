import { ProcessStepCodesEnum } from '../../../features/Pay/types';

/** 結帳流程 State */
export interface PayState {
  process: ProcessStepCodesEnum[];
  clauses: boolean;
}

/** 結帳流程 Action */
export const EXECUTE__SET_ACCESSIBLE_STEP = 'EXECUTE__SET_ACCESSIBLE_STEP';
export const EXECUTE__SET_CLAUSE = 'EXECUTE__SET_CLAUSE';
export const EXECUTE__RESET_PAY = 'EXECUTE__RESET_PAY';

export interface SetAccessibleStepAction {
  type: typeof EXECUTE__SET_ACCESSIBLE_STEP;
  payload: {
    step: ProcessStepCodesEnum;
  }
}

export interface SetClauseAction {
  type: typeof EXECUTE__SET_CLAUSE;
  payload: {
    clause: boolean;
  }
}

export interface ResetPayAction {
  type: typeof EXECUTE__RESET_PAY
}

export type PayActions = SetAccessibleStepAction | SetClauseAction | ResetPayAction