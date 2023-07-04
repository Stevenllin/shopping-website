import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/types';

const IndexShowcase: React.FC = () => {
  const categories = useSelector((state: RootState) => state.common.category);

  return (
    <section id="index-showcase">
      <div className="index-showcase">
        <div className="menu">
          <div className="context">
            <ul>
              {
                categories.map((category) => (
                  <li id={category}>
                    {category.toUpperCase()}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndexShowcase;
