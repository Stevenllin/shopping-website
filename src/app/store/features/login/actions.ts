import { LoginState, LoginActions, EXECUTE__LOGIN, EXECUTE__LOGIN__DONE } from './types';

/**
 * @description 提供使用者進行登入 
 */
export const executeLogin = (username: string, password: string): LoginActions => ({
  type: EXECUTE__LOGIN,
  payload: { username, password }
})

/**
 * @description 登入成功後，儲存 token
 */
export const executeLoginDone = (response: LoginState) => ({
  type: EXECUTE__LOGIN__DONE,
  payload: {
    response
  }
})