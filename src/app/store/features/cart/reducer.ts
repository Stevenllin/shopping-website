import { Reducer } from 'redux';
import storageService from '../../../core/services/storageService';
import { StorageKeysEnum } from '../../../core/enums/storage';
import { CartState, CartActions, EXECUTE__INIT_CART__DONE } from './types';

/** 初始購物車 State */
const initialState: CartState = {
  products: storageService.getItem(StorageKeysEnum.Cart) ?? null
}

const cartReducer: Reducer<CartState, CartActions> = (state = initialState, action): CartState => {
  switch (action.type) {
    case EXECUTE__INIT_CART__DONE: {
      return { products: action.payload.response }
    }
    // case EXECUTE__ADD_PRODUCT__DONE: {
    //   return { products: [...] }
    // }
    default:
      return state;
  }
}

export default cartReducer;