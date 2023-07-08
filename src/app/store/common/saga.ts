import { takeEvery, call, all, put } from 'redux-saga/effects';
import apiService from '../../api/services/apiService';
import { sagaBoundary } from '../service';
import { GetUsersResp } from '../../api/models/get/getUsers';
import { COMMON__INIT_FETCH_COMMON_DATA, COMMON__FETCH_MEMBER_DATA, FetchMemberDataAction } from './types';
import { initFetchCommonDataDoneAction, fetchMemberDataDoneAction } from './actions';

/**
 * @description 初始取得系統共用選項資料
 */
function * initFetchCommonData () {
  const response: string[] = yield call(apiService.getAllCategories);
  yield put(initFetchCommonDataDoneAction(response))
}

function * fetchMember (action: FetchMemberDataAction) {
  const response: GetUsersResp[] = yield call(apiService.getUsers);
  /** 尋找對應的 member 資料 */
  const responseUpdated = response.find(item => item.username === action.payload.username);
  /** 儲存 member 資料 */
  if (responseUpdated) yield put(fetchMemberDataDoneAction(responseUpdated))
}

export default function * watchCommonSaga () {
  yield all([
    takeEvery(COMMON__INIT_FETCH_COMMON_DATA, sagaBoundary(initFetchCommonData)),
    takeEvery(COMMON__FETCH_MEMBER_DATA, sagaBoundary(fetchMember))
  ]);
}
