import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Limitless from '../Hero/wistia';
import Card from '@material-ui/core/Card';
import grey from '@material-ui/core/colors/grey';
import CardContent from '@material-ui/core/CardContent';
import Modal from './Modal';
const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: `${theme.spacing.unit * 10}px 0`,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing.unit * 4}px 4px`
    }
  },
  headerContainer: {
    position: 'relative',
    height: '100%',
    ...theme.container
  },
  gridItem: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.87)'
  },
  overlayEffect: {
    position: 'absolute',
    backgroundColor: 'rgba(10, 10, 10, 0.7)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  heroText: {
    fontWeight: 300,
    padding: '0 16px'
  },
  margin: {
    margin: theme.spacing.unit
  },
  gridContainer: {
    padding: `0 ${theme.spacing.unit * 6}px`,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  },
  heroTitle: {
    marginBottom: '4rem'
  },
  divider: {
    background: 'red',
    height: '4px',
    maxWidth: '199px',
    margin: '10px auto 40px auto'
  },
  cardStyle: {
    backgroundColor: grey[50]
  },
  buttonDiv: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      display: 'block',
      width: '100%'
    }
  }
});
const Section01 = props => {
  const { classes } = props;
  return (
    <section className={classes.root + ' main-content'}>
      {/* <div className={classes.overlayEffect} /> */}
      <div className={classes.headerContainer}>
        <Grid
          container
          spacing={32}
          justify="center"
          alignItems="center"
          wrap="wrap"
        >
          <Grid item xs={12}>
            <Typography align="center" variant="h2" paragraph>
              Invest with your 401k / IRA
            </Typography>

            <Divider variant="middle" className={classes.divider} />
          </Grid>
        </Grid>

        <Grid
          container
          justify="center"
          spacing={32}
          alignItems="center"
          style={{ margin: '1rem 0' }}
        >
          <Grid item xs={12} sm={6}>
            <Typography align="left" paragraph variant="h4">
              Self-Directed Ira
            </Typography>
            <Typography align="left" paragraph component="p" variant="body1">
              Did you know you can invest with your IRA in 4 easy steps? Watch
              the video to find out more!
            </Typography>
            <Modal buttonText="Play Video" />
            <Typography align="left" paragraph component="p" variant="body1">
              If you find this information helpful and want to see how you can
              get started click the link below to connect with our preferred
              partners and setup your self-directed IRA
            </Typography>
            <div className={classes.buttonDiv}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.margin}
              >
                Preferred Partners
              </Button>
            </div>
            <div />
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default withStyles(styles)(Section01);
