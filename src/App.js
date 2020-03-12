import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Nav } from './components/nav/Nav';
import routes from './routes/routes';
import { PageState } from './store/page/PageState';

export const App = () => {
  return (
    <PageState>
      <BrowserRouter>
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
      </BrowserRouter>
    </PageState>
  );
};