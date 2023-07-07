import { Reducer } from 'redux';
import { LoginState, LoginActions, EXECUTE__LOGIN__DONE } from './types';
import storageService from '../../../core/services/storageService';
import { StorageKeysEnum } from '../../../core/enums/storage';

const initialState: LoginState = {
  token: storageService.getItem(StorageKeysEnum.Authorization) ?? ''
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
