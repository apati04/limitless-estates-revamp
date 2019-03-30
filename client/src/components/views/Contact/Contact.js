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
const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '90vh',
    maxHeight: '1000px',
    background: `url(https://i.imgur.com/MwsHMrC.jpg)center center no-repeat`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  appContainer: {
    ...theme.container,
    zIndex: 200
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
          <Grid
            container
            spacing={40}
            justify="space-between"
            alignItems="center"
            wrap="wrap"
          >
            <Grid item xs />
            <Grid item xs={12} md={6}>
              <Card style={{ padding: '2em' }}>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <ContactInfo />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </HeroUnit>
    </div>
  );
}
export default withStyles(styles)(Contact);
