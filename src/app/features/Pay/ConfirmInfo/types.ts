import { GetProductsResp } from '../../../api/models/get/getProducts';

export interface ProductDetails {
  detail: GetProductsResp | null;
  quantity: number;
}