/** Login State */
export interface LoginState {
  token: string;
}

/** Login Action */
export const EXECUTE__LOGIN = 'EXECUTE__LOGIN';
export const EXECUTE__LOGIN__DONE = 'EXECUTE__LOGIN__DONE';

export interface ExecuteLogin {
  type: typeof EXECUTE__LOGIN,
  payload: {
    username: string,
    password: string
  }
}

export interface ExecuteLoginAction {
  type: typeof EXECUTE__LOGIN__DONE,
  payload: {
    response: LoginState
  }
}

export type LoginActions = ExecuteLogin | ExecuteLoginAction