import axios from 'axios';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import MemberLoginModal from '../MemberLoginModal';
import { Provider } from 'react-redux';
import { ModalNamesEnum } from '../../../../../core/enums/ui/modals';
import { setModalVisibleAction } from '../../../../../store/ui/actions';
import store from '../../../../../store/store';
// import { executeLogin } from '../../../../../store/features/login/actions';
import '../../../../../core/services/interceptorsService';

const MockMemberCloseLoginModal = () => {
  store.dispatch(setModalVisibleAction({ name: ModalNamesEnum.MemberLoginModal, visible: false }))
  return (
    <Provider store={store}>
      <MemberLoginModal visible={false} />
    </Provider>
  )
}

const MockMemberOpenLoginModal = () => {
  store.dispatch(setModalVisibleAction({ name: ModalNamesEnum.MemberLoginModal, visible: true }))
  return (
    <Provider store={store}>
      <MemberLoginModal visible={true} />
    </Provider>
  )
}

async function postAuthLogin(username, password) {
  const response = await axios.post('https://fakestoreapi.com/auth/login', {
    username: username,
    password: password
  }).then(result => result.json())
  return response
}

describe('MemberLoginModal', () => {
  beforeAll(() => {
    console.log('測試所有 MemberLoginModal 模組的案例 ')
  })
  /** 測試 Modal 是否有打開 */
  test('測試 Modal 關閉', async () => {
    render(<MockMemberCloseLoginModal />)
    await waitFor(() => {
      expect(screen.getByLabelText('modal-memberLoginModal')).not.toHaveClass('modal--show show');
    })
  })
  /** 測試 Modal 是否有打開 */
  test('測試 Modal 打開', async () => {
    render(<MockMemberOpenLoginModal />)
    await waitFor(() => {
      expect(screen.getByLabelText('modal-memberLoginModal')).toHaveClass('modal--show show');
    })
  })
  /** 測試 username 和 password 存在 */
  test('測試 username 和 password 存在', async () => {
    render(<MockMemberOpenLoginModal />)
    const usernameElement = screen.getByText('username'.toUpperCase())
    const passwordElement = screen.getByText('password'.toUpperCase())
    expect(usernameElement).toBeInTheDocument()
    expect(passwordElement).toBeInTheDocument()
  })
  /** 測試尚未輸入 username 和 password 情況 */
  test('測試尚未輸入 username 和 password 情況', async () => {
    render(<MockMemberOpenLoginModal />)
    const submitBtn = screen.getByText('Submit')
    fireEvent.click(submitBtn)
    await waitFor(() => {
      expect(screen.getByLabelText('input-error-username')).toHaveTextContent(`username is a required field`)
    })
    await waitFor(() => {
      expect(screen.getByLabelText('input-error-password')).toHaveTextContent(`password is a required field`)
    })
  })
  /** 測試輸入 password 是否為加密 * */
  test('測試輸入 password 是否為加密 *', async () => {
    render(<MockMemberOpenLoginModal />)
    const password = screen.getByLabelText('input-field-password')
    fireEvent.change(password, { target: { value: '123' } })
    await waitFor(() => {
      expect(password).toBeInTheDocument('***')
    })
  })
  /** 測試僅輸入 username 情況 */
  test('測試僅輸入 username 情況', async () => {
    render(<MockMemberOpenLoginModal />)
    const username = screen.getByLabelText('input-field-username')
    const submitBtn = screen.getByText('Submit')
    fireEvent.change(username, { target: { value: '123' } })
    fireEvent.click(submitBtn)
    await waitFor(() => {
      expect(screen.getByLabelText('input-error-password')).toHaveTextContent(`password is a required field`)
    })
  })
  /** 輸入匹配的帳號密碼情況 */
  test('輸入匹配的帳號密碼情況', async () => {
    render(<MockMemberOpenLoginModal />)
    // const username = screen.getByLabelText('input-field-username')
    // const password = screen.getByLabelText('input-field-password')
    // fireEvent.change(username, { target: { value: 'mor_2314' } })
    // fireEvent.change(password, { target: { value: '83r5^_' } })

    // if (password.value && username.value) {}

    // const submitBtn = screen.getByText('Submit')
    // fireEvent.click(submitBtn)

    // store.dispatch(executeLogin(username.value, password.value ))

    // await waitFor(() => {
    //   expect(screen.queryByLabelText('modal-memberLoginModal')).not.toHaveClass('modal--show show');
    // })
  })
})
