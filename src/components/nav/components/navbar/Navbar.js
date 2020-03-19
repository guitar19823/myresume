import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Loader } from '../../../loader/Loader';
import routes from '../../../../routes/routes';
import './Navbar.css';

export const Navbar = () => {
  const { pageData, isLoaded } = useSelector(state => state.page);

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <ul className="Navbar">
      {
        Object.keys(routes).map(route => {
          if (routes[route].path) {
            return (
              <li key={route} className="NavItem">
                <NavLink
                  to={routes[route].path}
                  exact={routes[route].exact}
                  className="NavLink"
                  activeClassName="active_page"
                >
                  {
                    pageData.routes[route] ? pageData.routes[route] : route
                  }
                </NavLink>
              </li>
            )
          }
          return null;
        })
      }
    </ul>
  );
}