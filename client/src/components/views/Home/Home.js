import React from 'react';
import Hero from './Hero/Hero';
import SelfDirectIra from './SelfDirectIra/SelfDirectIra';
import IconSection from './IconSection/IconSection';
import ReasonsToInvest from './ReasonsToInvest/ReasonsToInvest';
import CTASection from './CTASection/CTASection';
import Section05 from './Section05/';
import Section06 from './Section06/';
import CallToAction from './CallToAction/CallToAction';

export default function Home() {
	return (
		<React.Fragment>
			<Hero />
			<IconSection />
			<SelfDirectIra />
			<ReasonsToInvest />
			<CTASection />
			<Section05 />
			<Section06 />
			<CallToAction />
		</React.Fragment>
	);
}
