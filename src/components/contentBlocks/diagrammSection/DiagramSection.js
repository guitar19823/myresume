import React from 'react';
import { useSelector } from 'react-redux';
import { Section } from '../sectionHoc/Section';
import { images } from '../../../images';
import { Loader } from '../../loader/Loader';
import './DiagrammSection.css';

export const DiagrammSection = ({ section }) => {
  const { pageData, isLoaded } = useSelector(state => state.page);
  
  if (!isLoaded) {
    return <Loader />;
  }
  
  return (
    <Section title={pageData.info[section].title} image={images[section]}>
      {
        pageData.info[section].data.map((item, key) => {
          return (
            <div key={key} className="DiagrammSection">
              <strong>{item.skillName}</strong>
              <div>
                <div style={{width: item.level + '%'}}></div>
              </div>
            </div>
          );
        })
      }
    </Section>
  );
};