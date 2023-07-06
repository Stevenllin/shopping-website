import { takeEvery, call, all, put } from 'redux-saga/effects';
import apiService from '../../api/services/apiService';
import { sagaBoundary } from '../service';
import { COMMON__INIT_FETCH_COMMON_DATA } from './types';
import { initFetchCommonDataDoneAction } from './actions';

/**
 * @description 初始取得系統共用選項資料
 */
function * initFetchCommonData () {
  // const response: string[] = yield call(apiService.getAllCategories);
  // yield put(initFetchCommonDataDoneAction({
  //   category: response
  // }))
}

export default function * watchCommonSaga () {
  yield all([
    takeEvery(COMMON__INIT_FETCH_COMMON_DATA, sagaBoundary(initFetchCommonData)),
  ]);
}
