import React from 'react';
import Hero from './Hero/Hero';
import SelfDirectIra from './SelfDirectIra/';
import IconSection from './IconSection/';
import ReasonsToInvest from './ReasonsToInvest/';
import Section04 from './Section04/';
import Section05 from './Section05/';
import Section06 from './Section06/';
import CallToAction from './CallToAction/';
import ImageGrid from '../Layouts/ImageGrid';

export default function Home() {
  return (
    <div>
      <Hero />
      <IconSection />
      <SelfDirectIra />

      <ReasonsToInvest />
      <Section04 />
      <Section05 />
      <Section06 />
      <CallToAction />
      <h1>remove after</h1>
      <ImageGrid />
    </div>
  );
}
