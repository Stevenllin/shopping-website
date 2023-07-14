import { Product } from '../../../api/models/get/getCartsUser';
import { GetSingleProductResp } from '../../../api/models/get/getSingleProduct';

/** 購物車 State */
export interface CartState {
  products: Product[]
}

/** 購物車 Action */
export const EXECUTE__INIT_CART = 'EXECUTE__INIT_CART'
export const EXECUTE__INIT_CART__DONE = 'EXECUTE__INIT_CART__DONE'
export const EXECUTE__ADD_PRODUCT = 'EXECUTE__ADD_PRODUCT';
export const EXECUTE__ADD_PRODUCT__DONE = 'EXECUTE__ADD_PRODUCT__DONE';
export const EXECUTE__REMOVE_PRODUCT = 'EXECUTE__REMOVE_PRODUCT';
export const EXECUTE__REMOVE_PRODUCT__DONE = 'EXECUTE__REMOVE_PRODUCT__DONE';
export const EXECUTE__RESET_CART = 'EXECUTE__RESET_CART';

export interface ExecuteInitCartAction {
  type: typeof EXECUTE__INIT_CART,
  payload: {
    userId: number
  }
}

export interface ExecuteInitCartDoneAction {
  type: typeof EXECUTE__INIT_CART__DONE,
  payload: {
    response: Product[]
  }
}

export interface ExecuteAddProductAction {
  type: typeof EXECUTE__ADD_PRODUCT,
  payload: {
    response: GetSingleProductResp
  }
}

export interface ExecuteAddProductDoneAction {
  type: typeof EXECUTE__ADD_PRODUCT__DONE,
  payload: {
    response: Product[]
  }
}

export interface ExecuteRemoveProductAction {
  type: typeof EXECUTE__REMOVE_PRODUCT,
  payload: {
    response: GetSingleProductResp
  }
}

export interface ExecuteRemoveProductDoneAction {
  type: typeof EXECUTE__REMOVE_PRODUCT__DONE,
  payload: {
    response: Product[]
  }
}

export interface ExecuteResetCartAction {
  type: typeof EXECUTE__RESET_CART
}

export type CartActions = ExecuteInitCartAction 
| ExecuteInitCartDoneAction 
| ExecuteAddProductAction 
| ExecuteAddProductDoneAction
| ExecuteRemoveProductAction
| ExecuteRemoveProductDoneAction
| ExecuteResetCartAction;