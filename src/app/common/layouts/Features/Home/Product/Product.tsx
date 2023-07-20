import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../../../core/router/paths';
import apiService from '../../../../../api/services/apiService';
import { GetProductsCategoryResp } from '../../../../../api/models/get/getProductsCategory';
import { ProductProps } from './types';
import commonService from '../../../../../core/services/commonService';

const Product: React.FC<ProductProps> = (props) => {
  const routerHistory = useHistory();

  const [products, setProducts] = useState<GetProductsCategoryResp[]>([]);

  /** 
   * @description 取得類別所有商品
   */
  useEffect(() => {
    (async() => {
      const response = await apiService.getProductsCategory(props.category);
      if (response.length) setProducts(response);
      
      return () => {
        setProducts([])
      }
    })()
  }, [props.category])

  /**
   * @description 導至商品明細頁
   * @param productId 商品 Id
   */
  const handlePushToDetail = async (productId: number) => {
    const response = await apiService.getSingleProduct(productId);
    if (response) routerHistory.push({ pathname: ROUTES.PRODUCT_DETAIL, state: { detail: response } });
  }

  return (
    <section id={props.category} className="content-section">
      <div className="context">
        <h3 aria-label={`product-${props.category}`} className="text-center section-title">{props.category.toUpperCase()}</h3>
        <div className="product-container">
          {
            products.length === 0 && (
              [0, 1, 2, 3].map(item => (
                <div aria-label={`${props.category}-box`} key={item} className="box">
                  <div className="lds-box">
                  </div>
                </div>
              ))
            )
          }
          {
            products.map((product) => (
              <div aria-label={`product`} className="product" key={product.id}>
                <img aria-label={`image`} src={product.image} alt={product.title} height={300} loading="lazy" onClick={() => handlePushToDetail(product.id)} />
                <p>{product.title.substring(0, 50)}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="m-0">$ {Math.floor(product.price)}</p>
                  <button type="button" aria-label={`cart-${product.id}-button`} className="button-main" onClick={() => commonService.handleAddProductToCart(product)}>Add to cart</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Product;
