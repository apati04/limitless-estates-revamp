import React from 'react';
import Hero from './Hero/Hero';
import SelfDirectIra from './SelfDirectIra/';
import IconSection from './IconSection/';
import ReasonsToInvest from './ReasonsToInvest/';
import Section04 from './Section04/';
import Section05 from './Section05/';
import Section06 from './Section06/';
import Section07 from './Section07/';

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
      <Section07 />
    </div>
  );
}
