import React, { Fragment } from 'react';
import { MobileView, BrowserView } from 'react-device-detect';
import PrimaryNav from './PrimaryNav';
import MobileTopNav from './Mobile/MobileTopNav';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  desktop: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  responsiveStyle: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  navColor: theme.palette.primary.main
});
function NavMain(props) {
  // console.log('props location', props.currLocation);
  const { classes, ...rest } = props;
  return (
    <Fragment>
      <BrowserView>
        <Hidden smDown>
          <PrimaryNav {...rest} />
        </Hidden>
        <Hidden mdUp>
          <MobileTopNav />
        </Hidden>
      </BrowserView>
      <MobileView>
        <MobileTopNav />
      </MobileView>
    </Fragment>
  );
}

export default withStyles(styles)(NavMain);
