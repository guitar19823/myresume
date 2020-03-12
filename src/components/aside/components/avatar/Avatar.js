import React from 'react';
import './Avatar.css';
import { images } from '../../../../images';

export const Avatar = props => {
  return (
    <div className="Avatar">
      <img src={images.avatar} alt="avatar"/>
    </div>
  );
};