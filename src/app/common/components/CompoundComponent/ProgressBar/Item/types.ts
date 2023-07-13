import React from 'react';

export interface ItemProps {
  step?: string;
  subSteps?: string[];
  children: React.ReactNode;
}