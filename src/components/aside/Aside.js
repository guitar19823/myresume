import React, { Fragment } from 'react';
import { AsideHeader } from './components/asideHeader/AsideHeader';
import { AsideMain } from './components/asideMain/AsideMain';
import './Aside.css';

export const Aside = () => {
  return (
    <aside className="Aside">
      <Fragment>
        <AsideHeader />

        <AsideMain />
      </Fragment>
    </aside>
  );
};