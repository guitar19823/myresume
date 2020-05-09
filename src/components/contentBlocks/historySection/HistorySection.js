import React from 'react';
import { useSelector } from 'react-redux';
import { Section } from '../sectionHoc/Section';
import { images } from '../../../images';
import './HistorySection.css';
import { Loader } from '../../loader/Loader';

export const HistorySection = ({ section }) => {
  const { pageData, isLoaded } = useSelector(state => state.page);
  
  if (!isLoaded) {
    return <Loader />;
  }
  
  return (
    <Section title={pageData.info[section].title} image={images[section]}>
      {
        pageData.info[section].data.map((item, key) => {
          return (
            <div key={key} className="HistorySection">
              <strong>{item.interval}</strong>
              <div></div>
              <div className="HistorySection_text">
                <p>
                  <strong>{item.position}</strong>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })
      }
    </Section>
  );
};