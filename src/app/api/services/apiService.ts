import axios from 'axios';

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
  getProductsCategory: async () => {
    
  }
}
