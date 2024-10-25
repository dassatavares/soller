import React from 'react';

import Main from './components/Main/Main';
import SectionTwo from './components/SectionTwo/SectionTwo';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Features from './components/Features/Features';
import LastSection from './components/Last Section/LastSection';
import Card from './components/Card/Card';

export default function index() {

  return (
    <>

      <Main />

      <SectionTwo /> 

      <Services />

      <Features />

      <Card /> 

      <LastSection />

      <Footer />

    </>
  );
}