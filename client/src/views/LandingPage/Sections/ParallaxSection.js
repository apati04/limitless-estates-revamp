import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from 'components/CustomButtons/Button';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
const styles = theme => ({
  ...productStyle,
  sectionStyle: {
    ...productStyle.section
  },
  title: {
    ...landingPageStyle.title,
    marginTop: 14,
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
      background: 'rgba(0, 0, 0, 0.64)'
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
const ParallaxSection = props => {
  const { classes } = props;
  let bgHeight = 320;
  if (props.description) {
    bgHeight = 400;
  }
  return (
    <div
      className={classNames(classes.section, classes.view)}
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: bgHeight + 'px'
      }}
    >
      <div className={classes.darkOverlay}>
        <div className={classes.mask}>
          <GridContainer justify="center" alignItems="center">
            <GridItem xs={12} className={classes.gridItem}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  flexDirection: 'column'
                }}
              >
                <h2 className={classes.title}>{props.title}</h2>
                {props.description && (
                  <div style={{ maxWidth: '560px', zIndex: '400' }}>
                    <h4
                      style={{
                        fontWeight: '400',
                        color: 'rgba(255,255,255,0.87)'
                      }}
                      className={classes.description}
                    >
                      {props.description}
                    </h4>
                    <Button
                      color="success"
                      style={{
                        fontWeight: 500,
                        letterSpacing: '1.2',
                        marginTop: 14,
                        marginBottom: 14
                      }}
                      component={props => (
                        <Link {...props} to="/resources/impact-investing" />
                      )}
                    >
                      Read More on Impact Investing
                    </Button>
                  </div>
                )}
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(ParallaxSection);
