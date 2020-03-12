import React from 'react';
import './ContentWrapper.css';

export const ContentWrapper = props => {
  return (
    <div className="ContentWrapper">
      { props.children }
    </div>
  );
};