import React from 'react';
import PageWrapper from '../components/hoc/pageWrapper/PageWrapper';
import { ContentWrapper } from '../components/hoc/contentWrapper/ContentWrapper';
import { Aside } from '../components/aside/Aside';
import { Main } from '../components/main/Main';
import { Footer } from '../components/footer/Footer';

export const Home = () => {
  return (
    <PageWrapper>
      <Aside />

      <ContentWrapper>
        <Main />

        <Footer />
      </ContentWrapper>
    </PageWrapper>
  );
};