import React from 'react';
import { PageWrapper } from '../components/hoc/pageWrapper/PageWrapper';
import { Footer } from '../components/footer/Footer';
import './css/Main.css';
import { ContactForm } from '../components/contentBlocks/contactForm/ContactForm';

export const Contact = () => (
  <PageWrapper>
    <main className="Main">
      <ContactForm />
    </main>

    <Footer />
  </PageWrapper>
);