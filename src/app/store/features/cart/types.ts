import { Product } from '../../../api/models/get/getCartsUser';

/** 購物車 State */
export interface CartState {
  products: Product[]
}

/** 購物車 Action */
export const EXECUTE__INIT_CART = 'EXECUTE__INIT_CART'
export const EXECUTE__INIT_CART__DONE = 'EXECUTE__INIT_CART__DONE'
export const EXECUTE__ADD_PRODUCT = 'EXECUTE__ADD_PRODUCT';
export const EXECUTE__ADD_PRODUCT__DONE = 'EXECUTE__ADD_PRODUCT__DONE';

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
    response: Product
  }
}

export interface ExecuteAddProductDoneAction {
  type: typeof EXECUTE__ADD_PRODUCT__DONE,
  payload: {
    response: Product
  }
}



export type CartActions = ExecuteInitCartAction | ExecuteInitCartDoneAction | ExecuteAddProductAction | ExecuteAddProductDoneAction;