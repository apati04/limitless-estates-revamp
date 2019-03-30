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
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
  root: {
    background: 'url(https://i.imgur.com/MwsHMrC.jpg) center center no-repeat',
    backgroundSize: 'cover',
    position: 'relative',

    [theme.breakpoints.down('xs')]: {
      padding: 0
    }
  },
  appContainer: {
    ...theme.container,
    zIndex: 200,
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
    [theme.breakpoints.up('sm')]: {
      borderLeft: '1px solid rgba(0,0,0,0.12)'
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
  }
});

function Contact(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.overlayEffect} />
      <HeroUnit>
        <div className={classNames(classes.appContainer, 'main-content')}>
          <Card>
            <div style={{ margin: '2em' }} />
            <Grid container justify="center" alignItems="stretch" wrap="wrap">
              <Grid item xs={12} md={8}>
                <div>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </div>
              </Grid>

              <Grid item xs={12} md={4}>
                <div style={{ padding: '1em 0' }}>
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
  );
}
export default withStyles(styles)(Contact);
