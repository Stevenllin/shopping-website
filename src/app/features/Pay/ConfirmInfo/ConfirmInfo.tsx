import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import apiService from '../../../api/services/apiService';
import { GetProductsResp } from '../../../api/models/get/getProducts';
import { RootState } from '../../../store/types';
import { AiFillMinusCircle } from 'react-icons/ai';
import { IoIosAddCircle } from 'react-icons/io';
import { ProductDetails } from './types';
import commonService from '../../../core/services/commonService';

const ConfirmInfo: React.FC = () => {
  /** 會員資訊 */
  const member = useSelector((state: RootState) => state.common.member);
  /** 購物車資訊 */
  const carts = useSelector((state: RootState) => state.features.cart);
  /** 所有商品的 State */
  const [allProducts, setAllProducts] = useState<GetProductsResp[]>([]);
  /** 購物車商品的細節 */
  const [cartProducts, setCartProducts] = useState<ProductDetails[]>([]);
  /** 總價格 */
  const [totalPrice, setTotalPrice] = useState<number>(0)

  /** 
   * @description 取得所有商品的資訊
   */
  useEffect(() => {
    (async () => {
      const response = await apiService.getProducts()
      setAllProducts(response);
    })()
  }, [])

  /** 
   * @description 匹配購物車商品資訊
   */
  useEffect(() => {
    const result: ProductDetails[] = carts.products.map(item => {
      return { quantity: item.quantity, detail: allProducts.find(product => product.id === item.productId) ?? null }
    })
    setCartProducts(result)
  },[carts, allProducts])

  /**
   * 計算總價格
   */
  useEffect(() => {

  }, [cartProducts])

  console.log('cartProducts', cartProducts)

  return (
    <div id="confirm-info">
      <div className="context content-section">
        {/** 個人資訊 */}
        <h3 className="text-center section-title">CUSTOMER'S INFORMATION</h3>
        <section id="customer-info">
          <div className="row mb-3">
            <div className="col-3">
              <p className="info-label">Firstname:</p>
            </div>
            <div className="col-3">
              <p>{member?.name.firstname}</p>
            </div>
            <div className="col-3">
              <p className="info-label">Lastname:</p>
            </div>
            <div className="col-3">
              <p>{member?.name.lastname}</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-3">
              <p className="info-label">Phone:</p>
            </div>
            <div className="col-3">
              <p>{member?.phone}</p>
            </div>
            <div className="col-3">
              <p className="info-label">Email:</p>
            </div>
            <div className="col-3">
              <p>{member?.email}</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-3">
              <p className="info-label">Address:</p>
            </div>
            <div className="col-9">
              <p>{member?.address.zipcode} {member?.address.city} {member?.address.street}</p>
            </div>
          </div>
        </section>
        {/** 購物車內資訊 */}
        <h3 className="text-center section-title">CART'S INFORMATION</h3>
        <section id="cart-info">
          {
            cartProducts.length > 0 && cartProducts.map((item, index) => (
              <div className="row mb-5" key={index}>
                <div className="col-6 d-flex justify-content-center">
                  {/** image */}
                  <img src={item.detail?.image} alt={item.detail?.title} height={300} />
                </div>
                <div className="col-6 p-5 d-flex flex-column justify-content-around">
                  {/** 商品名稱 */}
                  <h4>{item.detail?.title}</h4>
                  {/** 數量 */}
                  <div className="d-flex align-items-center">
                    <button type="button" className="me-4">
                      <AiFillMinusCircle className="icons-md icons-grey" onClick={() => commonService.handleRemoveProductFromCart(item.detail)} />
                    </button>
                    <p className="m-0">{item.quantity}</p>
                    <button type="button" className="ms-4" onClick={() => commonService.handleAddProductToCart(item.detail)}>
                      <IoIosAddCircle className="icons-md icons-grey" />
                    </button>
                  </div>
                  {/** 價格 */}
                  <p>$ {item.detail?.price}</p>
                </div>
              </div>
            ))
          }
        </section>
        <div className="d-flex justify-content-center">
          <button type="button" className="button-main">NEXT</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmInfo;
