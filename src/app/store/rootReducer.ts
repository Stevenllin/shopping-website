import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import commonReducer from './common/reducer';
import UIReducer from './ui/reducer';
import { routerHistory } from '../core/router/service';

const rootReducer = combineReducers({
  router: connectRouter(routerHistory),
  common: commonReducer,
  UI: UIReducer
});

export default rootReducer;
