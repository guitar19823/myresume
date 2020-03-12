import React from 'react';
import PageWrapper from '../../components/hoc/pageWrapper/PageWrapper';
import './NotFound.css';
import { Btfly } from './btfly/Btfly';

export const NotFound = () => {
  return (
    <PageWrapper>
      <div className="NotFound">
        <Btfly />

        <div className="PC">
          <h1>404</h1>
          <div></div>
        </div>
        <h2>Oops! Page not found</h2>
      </div>
    </PageWrapper>
  );
};