'use client';
import React from 'react';
import About from '@/components/protfolio/About';
import Bot from '@/components/protfolio/Bot';
import Hero from '@/components/protfolio/Hero';
import Hireme from '@/components/protfolio/Hireme';
import Project from '@/components/protfolio/Project';

export default function portofilioView() {
  return (
    <div className="box-border bg-gray-900 text-gray-100">
      <Hero />
      <About />
      <Hireme />
      <Project />
      <Bot />
    </div>
  );
}
