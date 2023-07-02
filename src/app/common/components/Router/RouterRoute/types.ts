import { RouteProps } from 'react-router-dom';

export interface RouterRouteProps extends RouteProps {
  activate?: (() => boolean)[];
}
