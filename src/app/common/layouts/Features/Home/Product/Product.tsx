import React, { useState, useEffect } from 'react';
import apiService from '../../../../../api/services/apiService';
import { GetProductsCategoryResp } from '../../../../../api/models/get/getProductsCategory';
import { ProductProps } from './types';

const Product: React.FC<ProductProps> = (props) => {
  const [products, setProducts] = useState<GetProductsCategoryResp[]>([]);
  /** 
   * @description 取得類別所有商品
   */
  useEffect(() => {
    (async() => {
      const response = await apiService.getProductsCategory(props.category);
      setProducts(response);
    })()
  }, [props.category])

  return (
    <section id={props.category} className="content-section">
      <div className="context">
        <h3 className="text-center">{props.category.toUpperCase()}</h3>
        <div className="product-container">
          {
            products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.image} alt={product.title} height={300} width={300} loading="lazy" />
                <p>{product.title}</p>
                <div className="d-flex justify-content-around">
                  <p>{product.price}</p>
                  <button type="button">Add to cart</button>
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
