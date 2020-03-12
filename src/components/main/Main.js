import React, { useContext } from 'react';
import { MainSection } from './components/mainHoc/MainSection';
import { images } from '../../images';
import { PageContext } from '../../store/page/pageContext';
import './Main.css';

export const Main = () => {
  const { info } = useContext(PageContext);

  return (
    <main className="Main">
      {
        Object.keys(info).map(value => {
          return (
            <MainSection key={value} title={info[value].title} image={images[value]}>
              {
                info[value].data.map((item, key) => {
                  if (value === 'education' || value === 'experience') {
                    return (
                      <div key={key} className="MainSection__content">
                        <strong>{item.interval}</strong>
                        <div></div>
                        <div className="MainSection__content_text">
                          <p>
                            <strong>{item.position}</strong>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  }

                  if (value === 'skills') {
                    return (
                      <div key={key} className="MainSection__skill">
                        <strong>{item.skillName}</strong>
                        <div><div style={{width: item.level + '%'}}></div></div>
                      </div>
                    );
                  }

                  return null;
                })
              }
            </MainSection>
          );
        })
      }
    </main>
  );
};