import { useLocation, useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { ProcessRouteMatchesStep } from '../../../features/Pay/types';
import { RootState } from '../../../store/types';
import { ROUTES } from '../paths';

const usePayGuard = () => {
  const routerLocation = useLocation()
  const routerHistory = useHistory()
  /** 結帳流程可允許 State */
  const payState = useSelector((state: RootState) => state.features.pay.process);
  /** 目前的 Step */
  const currentStep = ProcessRouteMatchesStep[routerLocation.pathname]
  /** 檢查目前所處的 Step 是否在可被訪問 */
  const isAccessible = payState.includes(currentStep);
  /** 若不被允許，重新倒回 Confirm Info 頁面 */
  if (!isAccessible) routerHistory.replace(ROUTES.PAY_CONFIRMINFO);
  return isAccessible;
}

export default usePayGuard;
