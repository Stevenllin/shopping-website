import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProducts: async () => {
    const argsModel = {};
    return axios.get('/products', argsModel).then((response) => response.data)
  }
}
