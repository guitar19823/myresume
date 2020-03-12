import React from 'react';
import PageWrapper from '../components/hoc/pageWrapper/PageWrapper';
import { ContentWrapper } from '../components/hoc/contentWrapper/ContentWrapper';
import { Aside } from '../components/aside/Aside';
import { Footer } from '../components/footer/Footer';

export const About = () => {
  return (
    <PageWrapper>
      <Aside />

      <ContentWrapper>
        <Footer />
      </ContentWrapper>
    </PageWrapper>
  );
};