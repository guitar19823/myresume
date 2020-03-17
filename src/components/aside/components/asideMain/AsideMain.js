import React from 'react';
import { useSelector } from 'react-redux';
import { AsideSection } from '../asideHoc/asideSection/AsideSection';
import { images } from '../../../../images';
import './AsideMain.css';
import { Loader } from '../../../loader/Loader';

export const AsideMain = () => {
  const { pageData, isLoaded } = useSelector(state => state.page);

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <main className="AsideMain">
      <section className="User">
        <p className="User__name">
          { pageData.user.name }<br />
          <strong>{ pageData.user.surname }</strong>
        </p>
        <h3>{ pageData.user.status }</h3>
      </section>

      {
        Object.keys(pageData.user.data).map(value => {
          return (
            <AsideSection key={value} title={value}>
              {
                Object.keys(pageData.user.data[value]).map(item => {
                  return (
                    <p key={item}>
                      { value !== 'profile' && <img src={images[item]} alt={images[item]} /> }
                      { value === 'social' ? <a href={pageData.user.data[value][item]}>{item}</a> : pageData.user.data[value][item] }
                    </p>
                  );
                })
              }
            </AsideSection>
          );
        })
      }
    </main>
  );
};