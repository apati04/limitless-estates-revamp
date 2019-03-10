import React from 'react';
import { Link } from 'react-router-dom';
const AboutLink = props => <Link to="/members/about" {...props} />;

const TucsonLink = props => <Link to="/markets/tucson" {...props} />;
const PhoenixLink = props => <Link to="/markets/phoenix" {...props} />;
const ColumbusLink = props => <Link to="/markets/columbus" {...props} />;

const WhyInvestLink = props => <Link to="/resources" {...props} />;
const ImpactInvestingLink = props => (
  <Link to="/resources/impactinvesting" {...props} />
);
const IraLink = props => <Link to="/info/investing/ira401k" {...props} />;
const RisksLink = props => <Link to="/resources/investingrisks/1" {...props} />;
const FaqLink = props => <Link to="/resources/faq" {...props} />;

const QuestionnaireLink = props => <Link to="/info/questionnaire" {...props} />;
const LongBeachLink = props => (
  <Link to="/events/meetups/longbeach" {...props} />
);
const CerritosLink = props => <Link to="/events/meetups/cerritos" {...props} />;
const PodcastLink = props => <Link to="/podcasts" {...props} />;
const ContactLink = props => <Link to="/info/contact" {...props} />;

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
  ContactLink
};
