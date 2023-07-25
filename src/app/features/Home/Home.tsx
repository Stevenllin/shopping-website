import React from 'react';
import { useSelector } from 'react-redux';
import IndexShowcase from '../../common/layouts/Features/Home/IndexShowcase';
import Announcement from '../../common/layouts/Features/Home/Announcement';
import Product from '../../common/layouts/Features/Home/Product';
import { RootState } from '../../store/types';

const Home: React.FC = () => {
  /** 取得所有的類別 */
  const categories = useSelector((state: RootState) => state.common.category);
  return (
    <div id="home-main-page">
      {/** 公告 Section */}
      <Announcement />
      {/** 主視覺 Section */}
      <IndexShowcase />
      {/** 商品 Section */}
      {
        categories.length > 0 && categories.map((category) => (
          <Product key={category} category={category} />
        ))
      }
    </div>
  )
}

export default Home;
