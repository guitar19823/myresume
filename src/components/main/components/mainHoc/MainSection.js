import React from 'react';

export const MainSection = props => {
  return (
    <section className="MainSection">
      <div className="MainSection__title">
        <img src={props.image} alt={props.image} />

        <p>{ props.title }</p>
      </div>

      <div className="MainSection__content_wrap">
        { props.children }
      </div>
    </section>
  );
};