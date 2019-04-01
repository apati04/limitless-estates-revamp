import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ExpansionList from '../../Layouts/ExpansionList';
import api from './api';
import testImage from './tidbits-1.png';
import Avatar from '@material-ui/core/Avatar';
import green from '@material-ui/core/colors/green';
import Hidden from '@material-ui/core/Hidden';
import bgpattern from './bg11.jpg';
const SectionLink = props => (
  <Link to="/resources/why-invest-in-multifamily" {...props} />
);
const styles = theme => ({
  root: {
    minHeight: 20 + 'rem',
    padding: '80px',
    position: 'relative',
    background: `url(${bgpattern}) no-repeat center center`,
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      padding: '16px'
    }
  },
  buttonMargin: {
    margin: theme.spacing.unit * 2,

    [theme.breakpoints.down('md')]: {
      width: '100%',
      margin: 0,
      marginTop: '16px',
      padding: '8px 0',
      fontSize: '1rem'
    }
  },
  overlayEffect: {
    position: 'absolute',
    backgroundColor: 'rgba(10,10,18,0.7)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  headerText: {
    color: 'white',
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem'
    }
  },
  headerContainer: {
    position: 'relative',
    height: '100%',
    ...theme.container
  },
  cardContainer: {
    height: '100%',
    marginBottom: '48px',
    [theme.breakpoints.down('sm')]: {
      margin: 10
    }
  },
  avatar: {
    margin: '0 auto',
    padding: '42px 0px',
    height: 360,
    width: 360,
    background: green['A700']
  }
});
const Section3 = props => {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <div className={classes.overlayEffect} />
      <div className={classes.headerContainer}>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.cardContainer}
        >
          <Grid item xs={12}>
            <Typography
              variant="h2"
              align="center"
              paragraph
              className={classes.headerText}
            >
              Reasons to invest in multifamily
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          spacing={16}
        >
          <Grid item xs={12}>
            <ExpansionList itemList={api} />
          </Grid>
          {/* <Grid item md={6} xs={12}>
            <div style={{ textAlign: 'center' }}>
              <Hidden smDown>
                <Avatar
                  alt="investment"
                  src={testImage}
                  className={classes.avatar}
                />
              </Hidden>

              <Button
                component={SectionLink}
                variant="contained"
                className={classes.buttonMargin}
                color="default"
                size="large"
              >
                Introduction to Multifamily Investing
              </Button>
            </div>
          </Grid> */}
        </Grid>
      </div>
    </section>
  );
};

export default withStyles(styles)(Section3);
