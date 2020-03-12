import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../../../routes/routes';
import './Navbar.css';

export const Navbar = () => {
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
                  { route }
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