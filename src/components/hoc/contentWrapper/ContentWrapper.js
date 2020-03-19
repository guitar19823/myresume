import React from 'react';
import './ContentWrapper.css';

export const ContentWrapper = props => (
  <div className="ContentWrapper">
    { props.children }
  </div>
);