import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import commonReducer from './common/reducer';
import featuresLoginReducer from './features/login/reducer';
import featuresCartReducer from './features/cart/reducer';
import UIReducer from './ui/reducer';
import { routerHistory } from '../core/router/service';

const rootReducer = combineReducers({
  router: connectRouter(routerHistory),
  common: commonReducer,
  UI: UIReducer,
  features: combineReducers({
    login: featuresLoginReducer,
    cart: featuresCartReducer
  })
});

export default rootReducer;
