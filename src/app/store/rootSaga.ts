import { all, spawn } from 'redux-saga/effects';
import watchCommonSaga from './common/saga';
import watchLoginSaga from './features/login/saga';
import watchCartSaga from './features/cart/saga';

export default function * rootSaga () {
  yield all([
    spawn(watchCommonSaga),
    spawn(watchLoginSaga),
    spawn(watchCartSaga)
  ]);
};