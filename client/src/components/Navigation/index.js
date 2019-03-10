import 'typeface-roboto';
import React, { Fragment } from 'react';
import { MobileView, BrowserView } from 'react-device-detect';
import DesktopNav from './Desktop';
import MobileTopNav from './Mobile/MobileTopNav';

/**
 * xs, extra-small: 0px or larger
  sm, small: 600px or larger
  md, medium: 960px or larger
  lg, large: 1280px or larger
  xl, extra-large: 1920px or larger
 */
export default props => {
  return (
    <Fragment>
      <MobileTopNav />
    </Fragment>
  );
};
