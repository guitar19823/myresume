import React from 'react';
import { useSelector } from 'react-redux';
import { MainSection } from './components/mainHoc/MainSection';
import { images } from '../../images';
import './Main.css';
import { Loader } from '../loader/Loader';

export const Main = () => {
  const { pageData, isLoaded } = useSelector(state => state.page);
  
  if (!isLoaded) {
    return <Loader />;
  }
  
  return (
    <main className="Main">
      {
        Object.keys(pageData.info).map(value => {
          return (
            <MainSection key={value} title={pageData.info[value].title} image={images[value]}>
              {
                pageData.info[value].data.map((item, key) => {
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