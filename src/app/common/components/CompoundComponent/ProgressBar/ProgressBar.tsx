import React from 'react';
import Item from './Item';
import ProgressBarContext from './ProgressBarContext';
import { ProgressBarProps, ProgressBarChildComponents } from './types';

const ProgressBar: React.FC<ProgressBarProps> & ProgressBarChildComponents = (props) => {
  return (
    <ProgressBarContext.Provider value={{ currentStep: props.currentStep }}>
      <div className="progress-bar">
        {
          React.Children.map(props.children, (child, index) => 
            React.isValidElement(child)
              ? React.cloneElement<any>(child, { step: String(index + 1) })
              : child
        )}
      </div>
    </ProgressBarContext.Provider>
  )
}

ProgressBar.Item = Item;

export default ProgressBar;
