import React from 'react';
import LoadingSpinner from '../LoadingSpinner';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/types';
const AsyncSpinner: React.FC = () => {
    /** 取得 Spinner 的狀態 */
  const spinnerState = useSelector((state: RootState) => state.UI.spinners);
  const asyncSpinner = spinnerState.asyncSpinner;
  return (
    <>
      <LoadingSpinner visible={asyncSpinner.visible} />
    </>
  );
};

export default AsyncSpinner;
