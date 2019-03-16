import React, { Component } from 'react';
import './style.css';
import HeroUnit from '../../Layouts/HeroUnit';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Limitless from './wistia';
const styles = theme => ({
  overlayEffect: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  heroText: {
    color: 'white',
    fontWeight: 300
  },
  margin: {
    margin: theme.spacing.unit
  },
  gridContainer: {
    padding: theme.spacing.unit * 6
  },
  heroTitle: {
    color: 'white',
    marginBottom: '8px'
  },
  divider: {
    background: 'red',
    height: '4px',
    margin: '24px 0',
    width: '20%'
  }
});

class Hero extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div
          style={{
            padding: '0',
            background:
              'url(https://i.imgur.com/oxwtIbj.jpg) center center no-repeat',
            backgroundSize: 'cover',
            position: 'relative'
          }}
        >
          <div className={classes.overlayEffect} />
          <HeroUnit>
            <Grid
              container
              spacing={24}
              justify="space-between"
              alignItems="flex-start"
              className={classes.gridContainer}
              wrap="wrap"
            >
              <Grid
                item
                md={6}
                style={{ paddingRight: '10px' }}
                className={classes.gridItem}
              >
                <Typography
                  align="left"
                  variant="h2"
                  paragraph
                  className={classes.heroTitle}
                >
                  Limitless Estates
                </Typography>
                <Divider className={classes.divider} />
                <Typography
                  align="left"
                  paragraph
                  component="h1"
                  variant="h5"
                  className={classes.heroText}
                >
                  Our vision at Limitless Estates is to provide A-class living
                  to lower income housing by putting our residents first and
                  instilling a sense of community while inspiring others to do
                  the same.
                </Typography>
                <Typography
                  align="left"
                  paragraph
                  component="h1"
                  variant="h5"
                  className={classes.heroText}
                >
                  Our mission is to positively impact the lives of the people in
                  our local neighborhoods through{' '}
                  <NavLink id="impact-link" to="/resources/impactinvesting">
                    <span
                      style={{
                        fontWeight: 'bold',
                        color: '#00c851!important',
                        fontStyle: 'italic'
                      }}
                    >
                      impact investing
                    </span>
                  </NavLink>{' '}
                  while achieving double digit returns for our investors.
                </Typography>
                {/* <div style={{ textAlign: 'left', marginTop: 'auto' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.margin}
                  >
                    Investor Questionnaire
                  </Button>
                </div> */}
              </Grid>

              <Grid item md={6} className={classes.gridItem}>
                <Limitless
                  wistiaSrc="https://fast.wistia.com/embed/medias/pueh6irs0z/swatch"
                  wistiaClass="wistia_embed wistia_async_pueh6irs0z videoFoam=true"
                />
              </Grid>
            </Grid>
          </HeroUnit>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Hero);
