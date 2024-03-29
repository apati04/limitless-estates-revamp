import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from 'components/CustomButtons/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Limitless from '../Hero/wistia';
import Card from '@material-ui/core/Card';
import grey from '@material-ui/core/colors/grey';
import CardContent from '@material-ui/core/CardContent';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
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

  divider: {
    background: 'red',
    height: '4px',
    maxWidth: '199px',
    margin: '10px auto 40px auto'
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
              How to start investing
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
          <Grid item xs={12} sm={4}>
            <Paper>
              <div style={{ textAlign: 'center' }}>
                <Avatar style={{ padding: '3rem' }}>
                  <AccountBalanceIcon style={{ fontSize: '4rem' }} />
                </Avatar>
              </div>
            </Paper>
            <Typography align="left" paragraph component="p" variant="body1">
              Don't know where to start? Investing with your 401k/IRA is one of
              the many options you can use to invest in Real Estate. All it
              takes is 4 easy to follow steps find out more!
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
