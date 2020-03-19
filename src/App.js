import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Nav } from './components/nav/Nav';
import routes from './routes/routes';
import { getData } from './store/actions/pageAction';

export const App = () => {
  const dispatch = useDispatch();
  const { activeLanguage } = useSelector(state => state.page);

  useEffect(() => {
    getData(activeLanguage)(dispatch);
  }, [dispatch, activeLanguage]);

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