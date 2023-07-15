import { takeEvery, all, put, call } from 'redux-saga/effects';
import { StorageKeysEnum } from '../../../core/enums/storage';
import storageService from '../../../core/services/storageService';
import { GetCartsUserResp, Product } from '../../../api/models/get/getCartsUser';
import {
  ExecuteInitCartAction,
  ExecuteAddProductAction,
  ExecuteRemoveProductAction,
  EXECUTE__INIT_CART,
  EXECUTE__ADD_PRODUCT,
  EXECUTE__REMOVE_PRODUCT,
  EXECUTE__RESET_CART
} from './types';
import { executeInitCartDoneAction } from './actions';
import apiService from '../../../api/services/apiService';
import { executeAddProductCartDoneAction, executeRemoveProductDoneAction, executeResetCartDoneAction } from './actions';


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
 * @description 將商品加入購物車
 */
function* executeAddProduct(action: ExecuteAddProductAction) {
  const carts: Product[] = JSON.parse(storageService.getItem(StorageKeysEnum.Cart));
  /** 判斷商品是否已存在購物車 */
  let flag = false
  /** 若存在，在已有的購物車商品的數量 + 1 */
  const cartsUpdated: Product[] = carts.map((product: Product) => {
    if (product.productId === action.payload.response.id) {
      flag = true
      return { ...product, quantity: product.quantity + 1 }
    } else {
      return { ...product }
    }
  })
  /** 若不存在，則 Push 一筆新商品 */
  if (!flag) cartsUpdated.push({ productId: action.payload.response.id, quantity: 1 })
  /** 記得更新購物車 */
  yield put(executeAddProductCartDoneAction(cartsUpdated))
  /** 儲存至 LocalStorage */
  storageService.setItem(StorageKeysEnum.Cart, JSON.stringify(cartsUpdated))
}

/**
 * @description 將商品移除購物車
 */
function* executeRemoveProduct(action: ExecuteRemoveProductAction){
  const carts: Product[] = JSON.parse(storageService.getItem(StorageKeysEnum.Cart));
  /** 兩種情況：商品數量等於 1、商品數量大於 1 */
  const cartsUpdated: Product[] = carts.map((product: Product) => {
    if (product.productId === action.payload.response.id) {
      if (product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 }
      } else {
        return { ...product, quantity: 0 }
      }
    } else {
      return { ...product }
    }
  }).filter(item => item.quantity !== 0)
  /** 記得更新購物車 */
  yield put(executeRemoveProductDoneAction(cartsUpdated))
  /** 儲存至 LocalStorage */
  storageService.setItem(StorageKeysEnum.Cart, JSON.stringify(cartsUpdated))
}

/** 
 * @description 清空使用者的購物車
 */
function* executeResetCart(){
  storageService.setItem(StorageKeysEnum.Cart, JSON.stringify([]))
  yield put(executeResetCartDoneAction())
}

export default function * watchCartSaga () {
  yield all([
    takeEvery(EXECUTE__INIT_CART, executeInitCart),
    takeEvery(EXECUTE__ADD_PRODUCT, executeAddProduct),
    takeEvery(EXECUTE__REMOVE_PRODUCT, executeRemoveProduct),
    takeEvery(EXECUTE__RESET_CART, executeResetCart)
  ])
}
