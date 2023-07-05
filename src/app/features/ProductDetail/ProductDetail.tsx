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
      <div className="context">
        <div className="row">
          <div className="col-md-6">
            <img src={detail.image} alt={detail.title} loading="lazy" style={{ width: '100%' }} />
          </div>
          <div className="col-md-6">
            {/** Title */}
            <h3>{detail.title}</h3>
            {/** Category */}
            <h6>Category</h6>
            <p>{detail.category.toUpperCase()}</p>
            {/** Description */}
            <h6>Description:</h6>
            <p>{detail.description}</p>
            {/** Count */}
            <h6>Description:</h6>
            <p>{detail.rating.count}</p>
            {/** Rating */}
            <h6>Rate:</h6>
            <p>{detail.rating.rate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail; 