import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../../store/store';
import { executeLoginDone } from '../../../../store/features/login/actions';
import Header from '../Header';

/**
 * @description 未登入情況
 */
const MockHeaderLogout = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  )
}

/**
 * @description 登入情況，將 token 傳入 state 儲存
 */
const MockHeaderLogin = () => {
  store.dispatch(executeLoginDone({ token: 'TEST' }))
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  )
}

async function fetchProductsCartUser() {
  const response = await fetch('https://fakestoreapi.com/carts/user/2').then(result => result.json())
  return response[0].products
}


describe('Header', () => {
  beforeAll(() => {
    console.log('測試所有 Header 模組的案例')
  })
  /** 測試未登入下 Header 情況 */
  test('測試未登入下 Header 情況', async () => {
    render(<MockHeaderLogout />)
    const login = screen.getByLabelText('log-in-button')
    const cart = screen.getByLabelText('cart-button')
    await waitFor(() => {
      expect(login).toBeInTheDocument()
    })
    await waitFor(() => {
      expect(cart).toBeInTheDocument()
    })
  })
  /** 測試已登入下 Header 情況 */
  test('測試已登入下 Header 情況', async () => {
    render(<MockHeaderLogin />)
    const logout = screen.getByLabelText('log-out-button')
    const cart = screen.getByLabelText('cart-button')
    await waitFor(() => {
      expect(logout).toBeInTheDocument()
    })
    await waitFor(() => {
      expect(cart).toBeInTheDocument()
    })
    /** 呼叫使用者購物車數量 */
    const products = await fetchProductsCartUser()
    /** 加總購物車中的商品數量 */
    const counts = products.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)
    const cartNumber = screen.getByLabelText('cart-number')
    /** 驗證數量是否正確 */
    await waitFor(() => {
      expect(cartNumber).toBeInTheDocument(counts)
    })
  })
})
