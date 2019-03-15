import React from 'react';
import { NavLink } from 'react-router-dom';
const HomeLink = props => <NavLink to="/" {...props} />;
const AboutLink = props => <NavLink to="/members/about" {...props} />;

const TucsonLink = props => <NavLink to="/markets/tucson" {...props} />;
const PhoenixLink = props => <NavLink to="/markets/phoenix" {...props} />;
const ColumbusLink = props => <NavLink to="/markets/columbus" {...props} />;

const WhyInvestLink = props => (
  <NavLink to="/resources/why-invest-in-multifamily" {...props} />
);
const ImpactInvestingLink = props => (
  <NavLink to="/resources/impact-investing" {...props} />
);
const IraLink = props => (
  <NavLink to="/resources/self-direct-401k-ira" {...props} />
);
const RisksLink = props => (
  <NavLink to="/resources/investing-risks?page=1" {...props} />
);
const FaqLink = props => (
  <NavLink to="/resources/frequently-answered-questions" {...props} />
);

const QuestionnaireLink = props => (
  <NavLink to="/info/questionnaire" {...props} />
);
const LongBeachLink = props => (
  <NavLink to="/events/meetups/longbeach" {...props} />
);
const CerritosLink = props => (
  <NavLink to="/events/meetups/cerritos" {...props} />
);
const PodcastLink = props => <NavLink to="/podcasts" {...props} />;
const ContactLink = props => <NavLink to="/contact-us" {...props} />;

export {
  AboutLink,
  TucsonLink,
  PhoenixLink,
  ColumbusLink,
  WhyInvestLink,
  ImpactInvestingLink,
  IraLink,
  RisksLink,
  FaqLink,
  QuestionnaireLink,
  LongBeachLink,
  CerritosLink,
  PodcastLink,
  HomeLink,
  ContactLink
};
