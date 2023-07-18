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
  })
})
