import { Home } from '../pages/Home';
import { Portfolio } from '../pages/Portfolio';
import { Contact } from '../pages/Contact';
import { Settings } from '../pages/Settings';
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
  contact: {
    page: Contact,
    path: '/contact',
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