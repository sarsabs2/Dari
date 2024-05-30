import React from 'react';
import About from '@/components/protfolio/About';
import Contact from '@/components/protfolio/Contact';
import Footer from '@/components/protfolio/Footer';
import Hero from '@/components/protfolio/Hero';
import Hireme from '@/components/protfolio/Hireme';
import Skills from '@/components/protfolio/Skills';

export default function portofilioView() {
  return (
    <div className="box-border bg-gray-900 text-gray-100">
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Contact />
      <Footer />
    </div>
  );
}
