import React from 'react';
import './AsideSection.css';

export const AsideSection = props => {
  return (
    <section className="AsideSection">
      <h2 className="AsideSection__title">
        { props.title }
      </h2>

      <div className="AsideSection__content">
        { props.children }
      </div>
    </section>
  );
};