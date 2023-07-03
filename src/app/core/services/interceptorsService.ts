import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import store from '../../store';
import { setAsyncSpinnerVisibleAction } from '../../store/ui/actions';

/**
 * @description 全局設定 AJAX Request 攔截器 (interceptor)
*/
axios.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    config.baseURL = 'https://fakestoreapi.com'
    /** 開啟 Async Spinner */
    store.dispatch(setAsyncSpinnerVisibleAction(true));
    return config;
  },
  function (error) {
    store.dispatch(setAsyncSpinnerVisibleAction(false));
    return Promise.reject(error);
  }
)
  
/**
 * @description 全局設定 AJAX Response 攔截器 (interceptor)
*/
axios.interceptors.response.use(
  function (response: AxiosResponse) {
    /** 關閉 Async Spinner */
    store.dispatch(setAsyncSpinnerVisibleAction(false));
    return response;
  },
)