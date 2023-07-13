import React from 'react';
import { ProcessContainerProps } from './types';
import ProgressBar from '../../../../components/CompoundComponent/ProgressBar';

const ProcessContainer: React.FC<ProcessContainerProps> = (props) => (
  <div className="process">
    <div className="process-container">
      <h1 className="text-center mb-4">{props.title}</h1>
      {props.stepsBarVisible && props.step.length > 0 && (
        <ProgressBar currentStep={props.currentStep}>
          {props.step.map((step, index) =>
            step.visible ? (
              <ProgressBar.Item key={index}>
                {step.title}
              </ProgressBar.Item>
            ) : null
          )}
        </ProgressBar>
      )}
      {props.children}
    </div>
  </div>
)

export default ProcessContainer;
