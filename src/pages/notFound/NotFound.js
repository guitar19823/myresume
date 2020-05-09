import React from 'react';
import { PageWrapper } from '../../components/hoc/pageWrapper/PageWrapper';
import './NotFound.css';
import { Btfly } from './btfly/Btfly';
import { Pc } from './pc/Pc';

export const NotFound = () => {
  return (
    <PageWrapper>
      <div className="NotFound">
        <Btfly />

        <Pc status={'404'} />
        <h2>Oops! Page not found</h2>
      </div>
    </PageWrapper>
  );
};