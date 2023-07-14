import {
  CartActions,
  EXECUTE__INIT_CART,
  EXECUTE__INIT_CART__DONE,
  EXECUTE__ADD_PRODUCT,
  EXECUTE__ADD_PRODUCT__DONE,
  EXECUTE__REMOVE_PRODUCT,
  EXECUTE__REMOVE_PRODUCT__DONE,
  EXECUTE__RESET_CART
} from './types';
import { Product } from '../../../api/models/get/getCartsUser';
import { GetSingleProductResp } from '../../../api/models/get/getSingleProduct';

/**
 * @description 使用者初始化購物車
 */
export const executeInitCartAction = (userId: number): CartActions => ({
  type: EXECUTE__INIT_CART,
  payload: { userId }
})

/**
 * @description 使用者初始化購物車 Done
 */
export const executeInitCartDoneAction = (response: Product[]): CartActions => ({
  type: EXECUTE__INIT_CART__DONE,
  payload: { response }
})

/**
 * @description 提供使用者將商品加入購物車 
 */
export const executeAddProductCartAction = (response: GetSingleProductResp): CartActions => ({
  type: EXECUTE__ADD_PRODUCT,
  payload: { response }
})

/**
 * @description 提供使用者將商品加入購物車 Done
 */
export const executeAddProductCartDoneAction = (response: Product[]): CartActions => ({
  type: EXECUTE__ADD_PRODUCT__DONE,
  payload: { response }
})

/**
 * @description 提供使用者將從購物車移除商品 
 */
export const executeRemoveProductCartAction = (response: GetSingleProductResp): CartActions => ({
  type: EXECUTE__REMOVE_PRODUCT,
  payload: { response }
})

/**
 * @description 提供使用者將商品加入購物車 Done
 */
export const executeRemoveProductDoneAction = (response: Product[]): CartActions => ({
  type: EXECUTE__REMOVE_PRODUCT__DONE,
  payload: { response }
})

export const executeResetCartAction = (): CartActions => ({
  type: EXECUTE__RESET_CART
})