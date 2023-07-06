import { Reducer } from 'redux';
import { LoginState, LoginActions, EXECUTE__LOGIN__DONE } from './types';

const initialState: LoginState = {
  token: ''
}

const LoginReducer: Reducer<LoginState, LoginActions> = (state = initialState, action) => {
  switch (action.type) {
    case EXECUTE__LOGIN__DONE: {
      return { ...action.payload.response }
    }
    default:
      return state
  }
}

export default LoginReducer
