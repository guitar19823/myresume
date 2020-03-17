import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Nav } from './components/nav/Nav';
import routes from './routes/routes';
import { loadPageData } from './store/actions/pageAction';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadPageData());
    }, Math.random() * 2000);
  }, [dispatch]);

  return (
    <>
      <Nav />

      <Switch>
        {
          Object.keys(routes).map(route => (
            <Route
              key={route}
              path={routes[route].path}
              exact={routes[route].exact}
              component={routes[route].page}
            />
          ))
        }
      </Switch>
    </>
  );
};