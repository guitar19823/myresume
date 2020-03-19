import { Home } from '../pages/Home';
import { Settings } from '../pages/Settings';
import { Portfolio } from '../pages/Portfolio';
import { NotFound } from '../pages/notFound/NotFound';

export default {
  home: {
    page: Home,
    path: '/',
    exact: true
  },
  portfolio: {
    page: Portfolio,
    path: '/portfolio',
    exact: true
  },
  settings: {
    page: Settings,
    path: '/settings',
    exact: true
  },
  notFound: {
    page: NotFound,
    exact: false
  }
};