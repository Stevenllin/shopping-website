import axios from 'axios';
import { GetProductsCategoryResp } from '../models/get/getProductsCategory';
import { GetSingleProductResp } from '../models/get/getSingleProduct';
import { PostAuthLoginReq, PostAuthLoginResp } from '../models/post/postAuthLogin';
import { GetUsersResp } from '../models/get/getUsers';
import { GetCartsUserResp } from '../models/get/getCartsUser';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  /** 查詢所有商品 */
  getProducts: async () => {
    const argsModel = {};
    return axios.get('/products', argsModel).then((response) => response.data)
  },
  /** 查詢所有類別 */
  getAllCategories: async () => {
    const argsModel = {};
    return axios.get<string[]>('/products/categories', argsModel).then((response) => response.data)
  },
  /** 根據類別查詢商品 */
  getProductsCategory: async (args: string) => {
    const argsModel = {}
    return axios.get<GetProductsCategoryResp[]>(`/products/category/${args}`, argsModel).then((response) => response.data)
  },
  /** 根據 productId 查詢單一商品 */
  getSingleProduct: async (args: number) => {
    const argsModel = {}
    return axios.get<GetSingleProductResp>(`products/${args}`, argsModel).then((response) => response.data)
  },
  /** 根據 userId 查詢使用者的購物車內容 */
  getCartsUser: async (args: number) => {
    const argsModel = {}
    return axios.get<GetCartsUserResp[]>(`/carts/user/${args}`, argsModel).then((response) => response.data)
  },
  /** 提供使用者進行登入 */
  postAuthLogin: async (args: PostAuthLoginReq) => {
    return axios.post<PostAuthLoginResp>('/auth/login', args).then((response) => response.data); 
  },
  /** 查詢所有使用者資訊 */
  getUsers: async () => {
    return axios.get<GetUsersResp[]>('/users').then((response) => response.data);
  }
}
