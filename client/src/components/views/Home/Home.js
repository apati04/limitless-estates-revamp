import React from 'react';
import Hero from './Hero/Hero';
import SelfDirectIra from './SelfDirectIra/';
import IconSection from './IconSection/';
import ReasonsToInvest from './ReasonsToInvest/';
import Section04 from './Section04/';
import Section05 from './Section05/';
import Section06 from './Section06/';
import CallToAction from './CallToAction/';

export default function Home() {
  return (
    <React.Fragment>
      <Hero />

      <IconSection />
      <SelfDirectIra />

      <ReasonsToInvest />
      <Section04 />
      <Section05 />
      <Section06 />
      <CallToAction />
    </React.Fragment>
  );
}
