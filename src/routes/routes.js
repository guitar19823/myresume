import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Chat } from '../pages/Chat';
import { NotFound } from '../pages/notFound/NotFound';

export default {
  home: {
    page: Home,
    path: '/',
    exact: true
  },
  about: {
    page: About,
    path: '/about',
    exact: true
  },
  chat: {
    page: Chat,
    path: '/chat',
    exact: true
  },
  notFound: {
    page: NotFound,
    exact: false
  }
};