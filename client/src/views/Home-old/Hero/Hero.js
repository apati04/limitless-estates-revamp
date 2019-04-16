import React, { Component } from 'react';
import './style.css';
import HeroUnit from '../../Layouts/HeroUnit';
import { withStyles } from '@material-ui/core/styles';
import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Button from 'components/CustomButtons/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ReactPlayer from 'react-player';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Limitless from './wistia';
import red from '@material-ui/core/colors/red';
const styles = theme => ({
  overlayEffect: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#7d7e7d',
    background: '-moz-linear-gradient(top, #7d7e7d 0%, #0e0e0e 100%)',
    background: '-webkit-linear-gradient(top, #7d7e7d 0%,#0e0e0e 100%)',
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.43) 0%, rgba(0,0,0,0.87) 100%)'
  },
  heroText: {
    color: 'rgba(255,255,255,0.97)',
    fontSize: '1.5rem',
    fontWeight: 300
  },
  margin: {
    margin: theme.spacing.unit,
    fontSize: '0.875rem',
    letterSpacing: '.39998px',
    lineHeight: '24.5px',
    fontWeight: '500',
    paddingLeft: '1.875rem',
    paddingRight: '1.875rem'
  },
  appContainer: { ...theme.container },
  heroTitle: {
    color: 'rgba(255,255,255,0.97)'
  },
  divider: {
    background: red['A700'],
    height: '3px',
    margin: '2rem auto 2rem 0',
    width: '20%'
  },
  card: {
    maxWidth: 345,
    paddingRight: 0,
    marginLeft: 'auto'
  },
  media: {
    objectFit: 'cover'
  },
  heroMain: {
    // background: 'cyan',
    [theme.breakpoints.up('sm')]: {
      padding: '6rem 0'
    },
    background: 'url(https://i.imgur.com/oxwtIbj.jpg) center bottom no-repeat',
    backgroundSize: 'cover',
    position: 'relative'
  }
});
/**
 *
 */
class Hero extends Component {
  render() {
    const { classes } = this.props;
    console.log('props: ', this.props);
    return (
      <div className={classes.heroMain}>
        <div className={classes.overlayEffect} />
        <HeroUnit>
          <Grid
            container
            justify="space-between"
            spacing={24}
            alignItems="flex-start"
            className={classNames(classes.appContainer + ' main-content')}
            wrap="wrap"
          >
            <Grid item xs={12}>
              <Typography
                align="left"
                paragraph
                variant="h3"
                component="h1"
                className={classes.heroTitle}
              >
                Welcome to Limitless Estates
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                align="left"
                paragraph
                component="h2"
                variant="h5"
                className={classes.heroText}
              >
                Our vision at Limitless Estates is to provide A-class living to
                lower income housing by putting our residents first and
                instilling a sense of community while inspiring others to do the
                same.
              </Typography>
              <Typography
                align="left"
                paragraph
                component="h2"
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
              {/* <Typography
                  align="left"
                  paragraph
                  component="h2"
                  variant="h5"
                  className={classes.heroText}
                >
                  Are you interested in investing with us? Fill out our{' '}
                  <Link to="/investor/questionnaire">
                    Investor Questionnaire
                  </Link>
                </Typography> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ width: '100%' }}>
                <Limitless
                  wistiaSrc="https://fast.wistia.com/embed/medias/pueh6irs0z/swatch"
                  wistiaClass="wistia_embed wistia_async_pueh6irs0z videoFoam=true"
                />
              </div>
            </Grid>
          </Grid>
        </HeroUnit>
      </div>
    );
  }
}
export default withStyles(styles)(Hero);
