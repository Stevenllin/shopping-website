import { CartActions, EXECUTE__INIT_CART, EXECUTE__INIT_CART__DONE, EXECUTE__ADD_PRODUCT, EXECUTE__ADD_PRODUCT__DONE } from './types';
import { Product } from '../../../api/models/get/getCartsUser';

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
export const executeAddProductCartAction = (response: Product): CartActions => ({
  type: EXECUTE__ADD_PRODUCT,
  payload: { response }
})

/**
 * @description 提供使用者將商品加入購物車 Done
 */
export const executeAddProductCartDoneAction = (response: Product): CartActions => ({
  type: EXECUTE__ADD_PRODUCT__DONE,
  payload: { response }
})

