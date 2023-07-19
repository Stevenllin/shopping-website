import React from 'react';
import { useSelector } from 'react-redux';
import commonService from '../../../../../core/services/commonService';
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
                  <li key={category} aria-label="category">
                    <a href="/#" onClick={(event) => commonService.handleWindowScrollToTargetSection(event, category)}>
                      {category.toUpperCase()}
                    </a>
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
