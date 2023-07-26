import { screen, render } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  beforeAll(async () => {
    console.log('測試所有 Footer 模組的案例')
  })
  /** 測試 Footer 中的連接是否正確 */
  test('測試 Footer 中的連接是否正確', () => {
    render(<Footer />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://github.com/Stevenllin')
  })
})