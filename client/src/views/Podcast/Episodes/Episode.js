import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';

import Typography from '@material-ui/core/Typography';
import ReactHtmlParser from 'react-html-parser';

import Card from '@material-ui/core/Card';

import Chip from '@material-ui/core/Chip';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Paper from '@material-ui/core/Paper';
import HomeIcon from '@material-ui/icons/Home';
import Player from '../Player';
const styles = theme => ({
  podcastCard: {
    ...theme.cardTitle
  },
  alignGrid: {
    position: 'relative'
  },
  appContainer: {
    ...theme.container,
    flexGrow: 1
  },
  fontStyles: {
    color: 'white'
  },
  podcastGrid: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 16,
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 4}px 0 ${theme
      .spacing.unit * 4}px`
  },
  mobileContainer: {
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      padding: '0 8px',
      maxWidth: 'unset'
    }
  },
  imgFluid: {
    maxWidth: '100%',
    height: 'auto',
    margin: '0 auto'
  },
  imageStyle: {
    width: '100%',
    height: '300px',
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing.unit * 8
    }
  },
  scheduleText: {
    color: 'rgba(0,0,0,0.8)'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,

    transition: theme.transitions.create('opacity')
  },
  podcastSubtitle: {
    marginTop: theme.spacing.unit * 4
  },
  aside: {
    marginLeft: theme.spacing.unit * 4,
    position: 'absolute',
    top: 0,
    left: '100%',
    width: '25%'
  },
  subheader: {
    fontSize: '24px',

    marginBottom: '23px',
    marginTop: '12px',
    lineHeight: '32px',
    fontWeight: ' 500',
    color: '#424242'
  },
  chip: {
    margin: theme.spacing.unit
  },
  icon: {
    marginRight: theme.spacing.unit / 2,
    width: 20,
    height: 20,
    verticalAlign: 'sub'
  },
  navLink: {
    '-webkit-text-decoration-line': 'none',
    textDecorationLine: 'none',
    color: 'rgba(0,0,0, 0.87)',
    fontWeight: 400
  },
  root: {
    padding: `${theme.spacing.unit}px 15px`,
    background: '#f5f5f5',
    margin: `0 0 ${theme.spacing.unit * 2}px 0`
  },
  player: {
    margin: `0 0 ${theme.spacing.unit * 2}px 0px`,
    position: 'relative'
  }
});
/**
 *
 */
class Episode extends Component {
  loadChips = () => {
    const {
      classes,
      location: {
        state: { episode }
      }
    } = this.props;
    return episode.tags
      .split(',')
      .filter(
        item =>
          !item.includes('passiveincomethrough') &&
          !item.includes('#listen') &&
          !item.includes('#podcast') &&
          !item.includes('#limitless-estates')
      )
      .map(item => (
        <Chip key={item} label={item.trim()} className={classes.chip} />
      ));
  };

  render() {
    const {
      classes,
      location: {
        state: { episode }
      }
    } = this.props;
    const s1 = episode.audio_url.split('/');
    const s2 = s1[s1.length - 1].split('.')[0];
    console.log(this.props.location);
    const episodetitle = episode.title.split(':')[1].trim();
    const newDate = new Date(episode.published_at).toDateString();
    // const minutes = Math.floor(episode.duration / 60);
    // const seconds = episode.duration - minutes * 60;
    return (
      <React.Fragment>
        <div
          className={classNames(classes.podcastGrid, classes.appContainer, {
            background: 'rgba(250,250,250,0.87)'
          })}
        >
          <Grid
            container
            spacing={24}
            justify="flex-start"
            className={classes.alignGrid}
          >
            <Grid item xs={12} sm={12} md={12}>
              <Card elevation={0}>
                <Paper className={classes.root} elevation={0}>
                  <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="Breadcrumb"
                  >
                    <NavLink className={classes.navLink} to="/podcasts">
                      <Typography style={{ color: '#337ab7' }} variant="body2">
                        <HomeIcon className={classes.icon} />
                        All Episodes
                      </Typography>
                    </NavLink>
                    <Typography color="textPrimary" variant="body2">
                      {episodetitle}
                    </Typography>
                  </Breadcrumbs>
                </Paper>
                <Card className={classes.player}>
                  <Player playerUrl={s2} />
                </Card>

                <Typography
                  align="left"
                  style={{ color: '#414549' }}
                  gutterBottom
                  variant="subtitle1"
                >
                  {newDate}
                </Typography>

                <Typography paragraph align="left" variant="h4">
                  {episodetitle}
                </Typography>

                <Typography
                  align="left"
                  variant="body2"
                  className={classes.subheader}
                >
                  {episode.summary}
                </Typography>

                <div style={{ marginBottom: '1rem' }} id="parseText">
                  {ReactHtmlParser(episode.description)}
                </div>
                {/*  TAGS   <Divider />
                <div style={{ margin: '16px 0' }}>{this.loadChips()}</div> */}
              </Card>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

Episode.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Episode);
