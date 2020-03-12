import React from 'react';
import './Footer.css';

export const Footer = props => {
  return (
    <footer className="Footer">
      <p>&copy; Copyright - {new Date().getFullYear()}.</p>
    </footer>
  );
};