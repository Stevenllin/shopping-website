export interface ProcessContainerProps {
  title: string;
  currentStep: string;
  stepsBarVisible: boolean;
  step: Step[];
}

export interface Step {
  title: string;
  subTitles?: string[];
  visible: boolean;
}