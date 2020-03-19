import React from 'react';
import './Section.css';

export const Section = props => {
  return (
    <section className="Section">
      <div className="Section__title">
        <img src={props.image} alt={props.image} />

        <p>{ props.title }</p>
      </div>

      <div className="Section__content_wrap">
        { props.children }
      </div>
    </section>
  );
};