import Product from '../Product';
import { screen, render, waitFor } from '@testing-library/react';
import apiService from '../../../../../../api/services/apiService';

/**
 * @description 取得所有類別
 */
 async function fetchAllCategories () {
  const response = await apiService.getAllCategories()
  return response
}

/**
 * @description 取得類別下所有商品
 */
async function fetchProductsCategory (category) {
  const response = await apiService.getProductsCategory(category)
  return response
}

describe('Product', () => {
  let categories = []
  beforeAll(async () => {
    console.log('測試所有 Product 模組的案例')
    categories = await fetchAllCategories()
  })
  /** 測試當類別中商品尚未 Loading 完畢 */
  test('測試當類別中商品尚未 Loading 完畢', async () => {
    render(<Product key="box" category="box" />)
    const boxs = screen.getAllByLabelText('box-box')
    /** 驗證 Loading box 數量是否匹配 */
    await waitFor(() => {
      expect(boxs).toHaveLength(4)
    })
  })
  /** 測試當類別中商品 Loading 完畢後，商品的顯示 */
  test('測試當類別中商品 Loading 完畢後，商品的顯示', async () => {
    render(<Product key={categories[0]} category={categories[0]} />)
    const products = await fetchProductsCategory(categories[0])
    /** title */
    // const productTitle = 
    /** 圖片 */
    // const productImageElement = screen.getByAltText(products[0].id)
    /** buttons */
    // const buttons = screen.getAllByRole('button');

    /** 驗證圖片是否存在 */
    await waitFor(async () => {
      expect(await screen.findByAltText(products[0].id)).toBeInTheDocument()
    })
    /** 驗證 title 是否存在 */
    await waitFor(async () => {
      expect(await screen.findByText(products[0].title.substring(0, 50))).toBeInTheDocument()
    })
    /** 驗證 button 數量是否正確 */
    await waitFor(async () => {
      expect(await screen.findAllByRole('button')).toHaveLength(products.length)
    })
  })
})
