import React from 'react';
import './PageWrapper.css';

export const PageWrapper = props => (
  <div className="PageWrapper">
    <div className="PageWrapper_wr page_in">
      { props.children }
    </div>
  </div>
);