import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from '../../loader/Loader';
import { Section } from '../sectionHoc/Section';
import { images, portfolioImages } from '../../../images';
import { openImage } from '../../../store/actions/imageAction';
import './PortfolioSection.css';

export const PortfolioSection = React.memo(() => {
  const { pageData, isLoaded } = useSelector(state => state.page);
  const dispatch = useDispatch();

  if (!isLoaded) {
    return <Loader />;
  }

  const handleClick = image => {
    dispatch(openImage(image));
    document.body.classList.add('hidden');
  };

  return (
    <div className="PortfolioSection_wr">
      <Section title={pageData.info.portfolio.title} image={images.portfolio}>
        <div className="PortfolioSection">
          {
            Object.keys(portfolioImages).map(image => (
              !image.indexOf('example') ? (
                <div key={image} className="Portfolio__example">
                  <img
                    src={portfolioImages[image]}
                    alt={image}
                    onClick={() => handleClick(image)}
                  />
                </div>
              ) : null
            ))
          }
        </div>
      </Section>
    </div>
  );
});