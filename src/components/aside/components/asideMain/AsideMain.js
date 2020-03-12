import React, { useContext } from 'react';
import { AsideSection } from '../asideHoc/asideSection/AsideSection';
import { images } from '../../../../images';
import { PageContext } from '../../../../store/page/pageContext';
import './AsideMain.css';

export const AsideMain = () => {
  const { user } = useContext(PageContext);

  return (
    <main className="AsideMain">
      <section className="User">
        <p className="User__name">
          { user.name }<br />
          <strong>{ user.surname }</strong>
        </p>
        <h3>{ user.status }</h3>
      </section>

      {
        Object.keys(user.data).map(value => {
          return (
            <AsideSection key={value} title={value}>
              {
                Object.keys(user.data[value]).map(item => {
                  return (
                    <p key={item}>
                      { value !== 'profile' && <img src={images[item]} alt={images[item]} /> }
                      { value === 'social' ? <a href={user.data[value][item]}>{item}</a> : user.data[value][item] }
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