import React, { useContext } from 'react';
import ProgressBarContext from '../ProgressBarContext';
import { FaCircleCheck } from 'react-icons/fa6';
import { ItemProps } from './types';

const Item: React.FC<ItemProps> = (props) => {
  const progressBarContext = useContext(ProgressBarContext)
  const stepSnippets = progressBarContext.currentStep ? progressBarContext.currentStep.split('-') : []
  const currentStep = stepSnippets[0]
  const currentSubStep = stepSnippets[1]
  const isActive = currentStep === props.step
  const subStepHalf = props.subSteps && props.subSteps.length > 0 ? props.subSteps.length / 2 : 0

  /** 
   * @description 檢核子步驟相關配置
   * 規則說明：「子步驟項目數量」需大於 0、「當前子步驟」需大於 0、「當前子步驟」必須小於等於「子步驟項目數量」
   */
  const validateSubStepConfig = () => {
    return props.subSteps && props.subSteps.length > 0 && currentSubStep && +currentSubStep > 0 && +currentSubStep <= props.subSteps.length
  }

  return (
    <div className="progress-item">
      <div className="d-flex align-items-center mb-4">
        <div className="line" />
        <div className="dot">
        {
          isActive && (
            <div className="checked">
              <FaCircleCheck className="icons-lg icons-minor-dark" />
            </div>
          )
        }
        </div>
        <div className="line" />
      </div>
      <div className={"text" + (isActive ? " active" : "")}>
        {props.children}
        {
          isActive && validateSubStepConfig() ? `(${currentSubStep}/${props.subSteps?.length})` : null
        }
      </div>
    </div>
  )
}

export default Item;
