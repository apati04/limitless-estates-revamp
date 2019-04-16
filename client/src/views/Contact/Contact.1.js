import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import classNames from 'classnames';
import HeroUnit from '../Layouts/HeroUnit';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ContactForm from './ContactForm';
import grey from '@material-ui/core/colors/grey';
import ContactInfo from './ContactSidebar';
import Parallax from '../Layouts/Parallax';
import Button from 'components/CustomButtons/Button';
import Hidden from '@material-ui/core/Hidden';
import CallToAction from '../Home/CallToAction/CallToAction';
const styles = theme => ({
  root: {
    background: 'url(https://i.imgur.com/MwsHMrC.jpg) center center no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    paddingBottom: 80,
    [theme.breakpoints.down('xs')]: {
      padding: 0
    }
  },
  callToAction: {
    position: 'absolute'
  },
  appContainer: {
    ...theme.container,
    padding: 20,

    [theme.breakpoints.down('xs')]: {
      padding: '0 0 1em 0'
    }
    // [theme.breakpoints.down('md')]: {
    //   position: 'relative',
    //   height: '100%'
    // }
  },
  cardHeader: {
    height: theme.spacing.unit * 40,
    padding: `${theme.spacing.unit * 8}px 0`,
    background: grey[100]
  },
  overlayEffect: {
    ...theme.overlayEffect
  },
  cardBodyGrid: {
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      padding: 0
    }
  },
  sideBarItem: {
    padding: '0 2em 1em 2em',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('sm')]: {
      borderLeft: '1px solid rgba(0,0,0,0.12)'
    },
    [theme.breakpoints.down(1000)]: {
      padding: 0
    },
    [theme.breakpoints.down(1200)]: {
      padding: '0 1em 1em 1em'
    }
  },
  contentHeader: {
    fontWeight: 300,
    fontSize: '3em',
    letterSpacing: 0
  },
  gridContainer: {
    marginTop: '-15rem'
  },
  custom: {
    height: '80em',
    overflow: 'auto'
  },
  sideBarContainer: {
    paddingTop: '1em',
    [theme.breakpoints.up('md')]: { paddingTop: '3em', paddingBottom: '1em' }
  },
  cardClass: {
    borderRadius: '0.5em',
    [theme.breakpoints.down('xs')]: {
      borderRadius: 0,
      boxShadow: 'unset'
    }
  }
});

function Contact(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.overlayEffect} />
        <HeroUnit>
          <div className={classNames(classes.appContainer, 'main-content')}>
            <Card className={classes.cardClass}>
              <Grid
                container
                justify="center"
                alignItems="flex-start"
                wrap="wrap"
              >
                <Grid item xs={12} md={8}>
                  <div>
                    <CardContent>
                      <ContactForm />
                    </CardContent>
                  </div>
                </Grid>

                <Grid item xs={12} md={4}>
                  <div className={classes.sideBarContainer}>
                    <CardContent className={classes.sideBarItem}>
                      <ContactInfo />
                    </CardContent>
                  </div>
                </Grid>
              </Grid>
              <div style={{ margin: '2em' }} />
            </Card>
          </div>
        </HeroUnit>
      </div>
      {/* <div
        className={classNames(
          classes.appContainer,
          'main-content'
        )}
      >
        <CallToAction />
      </div> */}
    </React.Fragment>
  );
}
export default withStyles(styles)(Contact);
