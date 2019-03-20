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
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 6,
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
    marginBottom: '8px'
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
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      display: 'block',
      width: '100%'
    }
  }
});
const Section01 = (props) => {
  const { classes } = props;
  return (
    <section className={classes.root}>
      {/* <div className={classes.overlayEffect} /> */}
      <div className={classes.headerContainer}>
        <div style={{ marginBottom: '20px' }}>
          <Grid container justify='center' alignItems='center' className={classes.gridContainer} wrap='wrap'>
            <Grid item xs={12} className={classes.gridItem}>
              <Typography align='center' variant='h2' paragraph className={classes.heroTitle}>
                Invest with your 401k / IRA
              </Typography>
            </Grid>
          </Grid>
          <Divider variant='middle' className={classes.divider} />
        </div>
        <Grid container justify='center' spacing={16} alignItems='center' className={classes.gridContainer}>
          <Grid item xs={12}>
            <Limitless
              wistiaSrc='https://fast.wistia.com/embed/medias/mtdamm7u8i/swatch'
              wistiaClass='wistia_embed wistia_async_mtdamm7u8i videoFoam=true'
            />
          </Grid>
        </Grid>
        <Grid container justify='center' spacing={16} alignItems='center' className={classes.gridContainer}>
          <Grid item xs={12}>
            <Card elevation={3} className={classes.cardStyle}>
              <CardContent>
                <Typography align='left' paragraph component='h1' variant='h5' className={classes.heroText}>
                  Did you know you can invest with your 401k/IRA? Watch the video to find out more.
                </Typography>
                <Typography
                  align='left'
                  paragraph
                  component='h1'
                  variant='h5'
                  className={classes.heroText}
                  style={{ marginBottom: '20px' }}
                >
                  If you find this information helpful and want to see how you can get started click the link below to
                  connect with our preferred partners and setup your self-directed IRA
                </Typography>
                <div className={classes.buttonDiv}>
                  <Button variant='contained' color='primary' size='large' className={classes.margin}>
                    Preferred Partners
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default withStyles(styles)(Section01);
