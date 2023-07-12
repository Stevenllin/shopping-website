import React from 'react';
import { useLocation } from 'react-router-dom';
import PayRoutes from './PayRoutes';
import ProcessContainer from '../../common/layouts/Features/Pay/ProcessContainer';
import { ProcessRouteMatchesStep, ProcessStepTextEnum } from './types';

const Pay: React.FC = () => {
  const routerLocation = useLocation();
  return (
    <ProcessContainer
      title="Pay"
      currentStep={ProcessRouteMatchesStep[routerLocation.pathname]}
      stepsBarVisible
      step={[
        { title: ProcessStepTextEnum.ConfirmInfo, visible: true },
        { title: ProcessStepTextEnum.Clause, visible: true }
      ]}
    >
      <PayRoutes />
    </ProcessContainer>
  )
}

export default Pay;
