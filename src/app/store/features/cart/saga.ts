import { takeEvery, all, put, call } from 'redux-saga/effects';
import { StorageKeysEnum } from '../../../core/enums/storage';
import storageService from '../../../core/services/storageService';
import { GetCartsUserResp, Product } from '../../../api/models/get/getCartsUser';
import { ExecuteInitCartAction, ExecuteAddProductAction, EXECUTE__INIT_CART, EXECUTE__ADD_PRODUCT } from './types';
import { executeInitCartDoneAction } from './actions';
import apiService from '../../../api/services/apiService';
import { useSelector } from 'react-redux';
import { RootState } from '../../types';
import { executeAddProductCartDoneAction } from './actions';


/**
 * @description 初始化使用者的購物車
 */
function* executeInitCart(action: ExecuteInitCartAction) {
  /** 將購物車由字串轉為 JSON 格式 */
  const cart: Product[] = JSON.parse(storageService.getItem(StorageKeysEnum.Cart))
  if (!cart) {
    /** Call API 取得使用者購物車 */
    const response: GetCartsUserResp[] = yield call(apiService.getCartsUser, action.payload.userId)
    /** 將第一筆儲存至 LocalStorage */
    storageService.setItem(StorageKeysEnum.Cart, JSON.stringify(response[0].products))
    /** 儲存至全域變數 */
    yield put(executeInitCartDoneAction(response[0].products))
  } else {
    /** 儲存至全域變數 */
    yield put(executeInitCartDoneAction(cart))
  }
}

/**
 * @description 將商品加入購物車（待調整）
 */
function* executeAddProduct(action: ExecuteAddProductAction) {
  const carts: Product[] = JSON.parse(storageService.getItem(StorageKeysEnum.Cart));
  let flag = false
  const cartsUpdated: Product[] = carts.map((product: Product) => {
    if (product.productId === action.payload.response.id) {
      flag = true
      return { ...product, quantity: product.quantity + 1 }
    } else {
      return { ...product }
    }
  })
  if (!flag) cartsUpdated.push({ productId: action.payload.response.id, quantity: 1 })
  
  /** 記得更新購物車 */
  yield put(executeAddProductCartDoneAction(cartsUpdated))
  storageService.setItem(StorageKeysEnum.Cart, JSON.stringify(cartsUpdated))
}

export default function * watchCartSaga () {
  yield all([
    takeEvery(EXECUTE__INIT_CART, executeInitCart),
    takeEvery(EXECUTE__ADD_PRODUCT, executeAddProduct)
  ])
}
