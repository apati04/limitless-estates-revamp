import React, { Component } from 'react';
import HeroUnit from '../Layouts/HeroUnit';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid';
import Limitless from './Hero/wistia';
const styles = theme => ({
  overlayEffect: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  heroText: {
    color: 'white',
    fontWeight: 400
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
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
          <div className="row">
            <div className="column-md-6">
              <Typography
                align="left"
                gutterBottom
                component="h1"
                variant="h6"
                className={classes.heroText}
              >
                Our vision at Limitless Estates is to provide A-class living to
                lower income housing by putting our residents first and
                instilling a sense of community while inspiring others to do the
                same.
                <br />
                Our mission is to positively impact the lives of the people in
                our local neighborhoods through{' '}
                <NavLink
                  style={{ fontWeight: 'bold' }}
                  className="text-success font-italic font-weight-bold"
                  to="/resources/impactinvesting"
                >
                  impact investing
                </NavLink>{' '}
                while achieving double digit returns for our investors.
              </Typography>
            </div>

            <div className="col-md-6">
              <Limitless
                wistiaSrc="https://fast.wistia.com/embed/medias/pueh6irs0z/swatch"
                wistiaClass="wistia_embed wistia_async_pueh6irs0z videoFoam=true"
              />
            </div>
          </div>
        </HeroUnit>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
