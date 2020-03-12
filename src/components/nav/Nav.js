import React, { Fragment, useState } from 'react';
import { ButtonMenu } from './components/buttonMenu/ButtonMenu';
import { BlackPanel } from './components/blackPanel/BlackPanel';
import './Nav.css';
import { Navbar } from './components/navbar/Navbar';
import { NavFooter } from './components/navFooter/NavFooter';

export const Nav = () => {
  const [ navState, setNavState ] = useState(false);

  const cls = ['Nav'];

  const toggleClick = () => {
    setNavState(!navState);
  };

  if (navState) {
    cls.push('nav_open');
  } else {
    cls.push('nav_close')
  }

  return (
    <Fragment>
      {
        navState && <BlackPanel toggleClick={toggleClick} />
      }

      <nav className={cls.join(' ')}>
        <ButtonMenu toggleClick={toggleClick} navState={navState}/>
        
        <Navbar />

        <NavFooter />
      </nav>
    </Fragment>
  );
}