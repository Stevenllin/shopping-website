import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ROUTES } from '../../core/router/paths';
import { RouteLocationState } from './types';

const ProductDetail: React.FC = () => {
  const routerLocation = useLocation<RouteLocationState>();
  const routerHistory = useHistory();
  const detail = routerLocation.state?.detail ?? undefined;
  console.log('detail', detail);

  /** 
   * @description 若沒有 detail 重新返回首頁
   */
  useEffect(() => {
    if (!detail) routerHistory.push(ROUTES.HOME)
  }, [detail, routerHistory])

  return (
    <div id="product-detail">
      <div className="context content-section">
        <div className="row mb-3">
          <div className="col-md-6 d-flex align-item-center justify-content-center h-100">
            <img src={detail.image} alt={detail.title} loading="lazy" style={{ width: '70%', height: '70%' }} />
          </div>
          <div className="col-md-6 product-detail--container h-100">
            {/** Title */}
            <h3>{detail.title}</h3>
            {/** Category */}
            <h4>Category</h4>
            <p>{detail.category.toUpperCase()}</p>
            {/** Description */}
            <h4>Description:</h4>
            <p>{detail.description}</p>
            {/** Count */}
            <h4>Count:</h4>
            <p>{detail.rating.count}</p>
            {/** Rating */}
            <h4>Rate:</h4>
            <p>{detail.rating.rate}</p>
            {/** Price */}
            <h4>Price:</h4>
            <p>{detail.price}</p>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button type="button" className="button-main">Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail; 