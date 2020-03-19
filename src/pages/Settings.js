import React from 'react';
import { PageWrapper } from '../components/hoc/pageWrapper/PageWrapper';
import { SettingsSection } from '../components/contentBlocks/settingsSection/SettingsSection';
import { Footer } from '../components/footer/Footer';

export const Settings = () => (
  <PageWrapper>
    <main className="Main">
      <SettingsSection />
    </main>

    <Footer />
  </PageWrapper>
);