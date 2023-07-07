import { takeEvery, call, all, put } from 'redux-saga/effects';
import apiService from '../../../api/services/apiService';
import storageService from '../../../core/services/storageService';
import { sagaBoundary } from '../../service';
import { PostAuthLoginResp } from '../../../api/models/post/postAuthLogin';
import { EXECUTE__LOGIN, ExecuteLogin } from './types';
import { executeLoginDone } from './actions';
import { StorageKeysEnum } from '../../../core/enums/storage';
import { ModalNamesEnum } from '../../../core/enums/ui/modals';
import { setModalVisibleAction } from '../../../store/ui/actions';
import store from '../../store';

/**
 * @description 初始取得系統共用選項資料
 */
function* executeLogin(action: ExecuteLogin) {
  const response: PostAuthLoginResp = yield call(apiService.postAuthLogin, {
    username: action.payload.username,
    password: action.payload.password
  })

  if (response.token) {
    yield put(executeLoginDone(response))
    /** 儲存至 LocalStorage */
    storageService.setItem(StorageKeysEnum.Authorization, response.token)
    /** 關閉登入 Modal */
    store.dispatch(setModalVisibleAction(ModalNamesEnum.MemberLoginModal, false))    
  }
  
}

export default function * watchLoginSaga () {
  yield all([
    takeEvery(EXECUTE__LOGIN, sagaBoundary(executeLogin)),
  ]);
}

