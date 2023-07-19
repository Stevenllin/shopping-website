import axios from 'axios';
import { screen, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import IndexShowcase from '../IndexShowcase';
import store from '../../../../../../store/store';
import { initFetchCommonDataDoneAction } from '../../../../../../store/common/actions';

const MockIndexShowcase = (categories) => {
  store.dispatch(initFetchCommonDataDoneAction(categories.categories))
  return (
    <Provider store={store}>
      <IndexShowcase />
    </Provider>
  )
}

/**
 * @description 取得所有類別
 */
async function fetchAllCategories () {
  const response = await axios.get('https://fakestoreapi.com/products/categories').then((response) => response.data)
  return response
}

describe('IndexShowcase', () => {
  beforeAll(() => {
    console.log('測試所有 IndexShowcase 模組的案例 ')
  })
  /** 測試取得 Categories 是否顯示於頁面上 */
  test('測試取得 Categories 是否顯示於頁面上', async () => {
    const categories = await fetchAllCategories()
    render(<MockIndexShowcase categories={categories} />)
    const li = screen.getAllByLabelText('category')
    /** 驗證數量是否匹配 */
    await waitFor(() => {
      expect(li).toHaveLength(categories.length)
    })
  })
})