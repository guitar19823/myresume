import React from 'react';
import { PageWrapper } from '../components/hoc/pageWrapper/PageWrapper';
import { ContentWrapper } from '../components/hoc/contentWrapper/ContentWrapper';
import { Aside } from '../components/aside/Aside';
import { HistorySection } from '../components/contentBlocks/historySection/HistorySection';
import { Footer } from '../components/footer/Footer';
import { DiagrammSection } from '../components/contentBlocks/diagrammSection/DiagramSection';
import './css/Main.css';

export const Home = () => (
  <PageWrapper>
    <Aside />

    <ContentWrapper>
      <main className="Main">
        <HistorySection section="experience" />
        <HistorySection section="education" />
        <DiagrammSection section="skills" />
      </main>

      <Footer />
    </ContentWrapper>
  </PageWrapper>
);