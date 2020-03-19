import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PageWrapper } from '../components/hoc/pageWrapper/PageWrapper';
import { PortfolioSection } from '../components/contentBlocks/portfolioSection/PortfolioSection';
import { Footer } from '../components/footer/Footer';
import { ImagePanel } from '../components/contentBlocks/imagePanel/ImagePanel';
import { closeImage } from '../store/actions/imageAction';

export const Portfolio = () => {
  const { isOpened, image } = useSelector(state => state.image);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeImage());
  }, [dispatch]);

  return (
    <>
      <PageWrapper>
        <main className="Main">
          <PortfolioSection />
        </main>

        <Footer />
      </PageWrapper>

      {
        isOpened ? <ImagePanel image={image} /> : null
      }
    </>
  );
};