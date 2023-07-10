import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types';
import { ROUTES } from '../paths';

const useAuthorizationGuard = () => {
  const routerHistory = useHistory()
  const auth = useSelector((state: RootState) => state.features.login.token)
  const isAccessible = !!auth
  if (!isAccessible) routerHistory.replace(ROUTES.HOME)
  return isAccessible
}

export default useAuthorizationGuard;