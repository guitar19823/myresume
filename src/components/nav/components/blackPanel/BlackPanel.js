import React from 'react';
import './BlackPanel.css';

export const BlackPanel = props => (
  <div
    className="BlackPanel"
    onClick={props.toggleClick}
  ></div>
);