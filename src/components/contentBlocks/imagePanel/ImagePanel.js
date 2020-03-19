import React from 'react';
import './ImagePanel.css';
import { ButtonClose } from './components/buttonClose/ButtonClose';

export const ImagePanel = ({ image }) => {
  return (
    <figure className="ImagePanel">
      <img src={image} alt="example" />
      
      <ButtonClose />
    </figure>
  );
};