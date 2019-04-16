import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from 'components/CustomButtons/Button';
const ImpactLink = props => (
  <Link to="/resources/impact-investing" {...props} />
);
const styles = theme => ({
  root: {
    height: 20 + 'rem',
    position: 'relative',
    background: `url(https://i.imgur.com/kC8zbBM.jpg) no-repeat center`,
    backgroundSize: 'cover'
  },
  overlayEffect: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  headerText: {
    color: 'white',
    fontWeight: 300
  },
  headerContainer: {
    position: 'relative',
    height: '100%',
    ...theme.container
  },
  headerBody: {
    color: 'white',
    fontWeight: 300,

    [theme.breakpoints.up('sm')]: {
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: theme.spacing.unit
    }
  },
  margin: {
    margin: theme.spacing.unit
  }
});
const Section05 = props => {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <div className={classes.overlayEffect} />
      <div className={classes.headerContainer}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          wrap="wrap"
        >
          <Grid item>
            <Typography
              align="center"
              variant="h2"
              paragraph
              className={classes.headerText}
            >
              Impact Investing
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align="center"
              variant="h5"
              paragraph
              className={classes.headerBody}
            >
              Impact investing enables investors to put their money to good use
              in meaningful, intelligent ventures that provide both a financial
              AND a social return on their investment.
            </Typography>
            <div style={{ textAlign: 'center' }}>
              <Button
                size="large"
                color="primary"
                variant="contained"
                component={ImpactLink}
                className={classes.margin}
              >
                Impact Investing
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default withStyles(styles)(Section05);
