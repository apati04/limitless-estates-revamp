import React from 'react';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import withStyles from '@material-ui/core/styles/withStyles';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
const styles = theme => ({
  ...landingPageStyle,
  sectionStyle: {
    ...productStyle.section
  },
  title: {
    ...landingPageStyle.title,
    marginTop: 0,
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.3125rem'
    }
  },
  mask: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    backgroundAttachment: 'fixed'
  },
  view: {
    position: 'relative',
    overflow: 'hidden',
    cursor: 'default'
  },
  darkOverlay: {
    '&:before': {
      background: 'rgba(0, 0, 0, 0.6)'
    },
    '&:after,&:before': {
      position: 'absolute',
      zIndex: '1',
      width: '100%',
      height: '100%',
      display: 'block',
      left: '0',
      top: '0',
      content: "''"
    }
  },
  gridItem: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.87)',
    zIndex: '500'
  }
});
const LandingParallax = props => {
  const imgpara = 'https://i.imgur.com/vnCJr0J.jpg';
  const { classes } = props;
  return (
    <div>
      <div
        className={classes.view}
        style={{
          backgroundImage: `url(${imgpara})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '320px'
        }}
      >
        <div className={classes.darkOverlay}>
          <div className={classes.mask}>
            <GridContainer justify="center" alignItems="center">
              <GridItem xs={12} className={classes.gridItem}>
                <h1 className={classes.title}>
                  Reasons to Invest in Multifamily
                </h1>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(LandingParallax);
