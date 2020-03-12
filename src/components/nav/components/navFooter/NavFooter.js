import React from 'react';
import './NavFooter.css';
import { images } from '../../../../images';

export const NavFooter = () => {
  return (
    <footer className="NavFooter">
      <img src={images.github} alt="github" />
      <a href={`https://github.com/guitar19823`}>GitHub</a>
    </footer>
  );
};