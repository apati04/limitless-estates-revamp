import React, { Component } from 'react';
import './style.css';
import HeroUnit from '../../Layouts/HeroUnit';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Button from '@material-ui/core/Button';

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
            <div className="container">
              <div
                style={{ paddingBottom: '64px' }}
                className="row flex-wrap-reverse justify-content-between align-items-center"
              >
                <div className="col-md-6">
                  <Typography
                    align="left"
                    gutterBottom
                    component="h2"
                    variant="h6"
                    className={classes.heroText}
                  >
                    Our vision at Limitless Estates is to provide A-class living
                    to lower income housing by putting our residents first and
                    instilling a sense of community while inspiring others to do
                    the same.
                  </Typography>
                  <Typography
                    align="left"
                    gutterBottom
                    component="h1"
                    variant="h6"
                    className={classes.heroText}
                  >
                    Our mission is to positively impact the lives of the people
                    in our local neighborhoods through{' '}
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
                  <div style={{ textAlign: 'left', marginTop: '16px' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      className={classes.margin}
                    >
                      Investor Questionnaire
                    </Button>
                  </div>
                </div>
                <div className="col-md-6">
                  <Limitless
                    wistiaSrc="https://fast.wistia.com/embed/medias/pueh6irs0z/swatch"
                    wistiaClass="wistia_embed wistia_async_pueh6irs0z videoFoam=true"
                  />
                </div>
              </div>

              <div
                style={{ paddingBottom: '32px' }}
                className="row flex-wrap-reverse justify-content-between align-items-center"
              >
                <div className="col-md-6">
                  <Limitless
                    wistiaSrc="https://fast.wistia.com/embed/medias/mtdamm7u8i/swatch"
                    wistiaClass="wistia_embed wistia_async_mtdamm7u8i videoFoam=true"
                  />
                </div>
                <div className="col-md-6">
                  <Typography
                    align="left"
                    gutterBottom
                    component="h1"
                    variant="h6"
                    className={classes.heroText}
                  >
                    Did you know you can invest with your 401k/IRA? Watch the
                    video to find out more.
                  </Typography>
                  <Typography
                    align="left"
                    gutterBottom
                    component="h1"
                    variant="h6"
                    className={classes.heroText}
                    style={{ marginBottom: '20px' }}
                  >
                    Click the link below to connect with our preferred partners
                    and setup your self-directed IRA
                  </Typography>
                  <div style={{ textAlign: 'left' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      className={classes.margin}
                    >
                      Preferred Partners
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </HeroUnit>
        </div>
        {/* next row */}
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Hero);
