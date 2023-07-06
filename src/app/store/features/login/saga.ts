import { takeEvery, call, all, put } from 'redux-saga/effects';
import apiService from '../../../api/services/apiService';
import { sagaBoundary } from '../../service';
import { PostAuthLoginResp } from '../../../api/models/post/postAuthLogin';
import { EXECUTE__LOGIN, ExecuteLogin } from './types';
import { executeLoginDone } from './actions';

/**
 * @description 初始取得系統共用選項資料
 */
function* executeLogin(action: ExecuteLogin) {
  console.log('32132131');
  const response: PostAuthLoginResp = yield call(apiService.postAuthLogin, {
    username: action.payload.username,
    password: action.payload.password
  })

  if (response.token) yield put(executeLoginDone(response))
}

export default function * watchLoginSaga () {
  yield all([
    takeEvery(EXECUTE__LOGIN, sagaBoundary(executeLogin)),
  ]);
}

