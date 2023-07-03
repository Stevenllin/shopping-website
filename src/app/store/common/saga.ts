import { takeEvery, all } from 'redux-saga/effects';
import { sagaBoundary } from '../service';
import { COMMON__INIT_FETCH_COMMON_DATA } from './types';
// import { initFetchCommonDataDoneAction } from './actions';

/**
 * @description 初始取得系統共用選項資料
 */
function * initFetchCommonData () {
}

export default function * watchCommonSaga () {
  yield all([
    takeEvery(COMMON__INIT_FETCH_COMMON_DATA, sagaBoundary(initFetchCommonData)),
  ]);
}
