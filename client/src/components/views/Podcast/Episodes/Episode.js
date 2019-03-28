import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import ReactHtmlParser from 'react-html-parser';
import Button from '@material-ui/core/Button';
import Share from '@material-ui/icons/Share';
import Card from '@material-ui/core/Card';
import Player from '../Player';
const styles = theme => ({
  podcastCard: {
    ...theme.cardTitle
  },
  alignGrid: {
    position: 'relative',
    marginLeft: '213px'
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
  }
});
/**
 *
 */
class Episode extends Component {
  render() {
    const {
      classes,
      location: {
        state: { episode }
      }
    } = this.props;
    const s1 = episode.audio_url.split('/');
    const s2 = s1[s1.length - 1].split('.')[0];
    return (
      <React.Fragment>
        <div className={classNames(classes.podcastGrid, classes.appContainer)}>
          <Grid
            container
            spacing={40}
            justify="space-around"
            className={classes.alignGrid}
          >
            <Grid item xs={8}>
              <Player playerUrl={s2} />
              <div style={{ margin: '64px 0' }} />
              <Card elevation={0}>
                <Typography align="left" variant="h2">
                  Limitless Estates Podcast, Episode {episode.episode_number}
                </Typography>

                <Typography
                  align="left"
                  variant="subtitle1"
                  className={classes.subheader}
                >
                  {episode.summary}
                </Typography>

                <div id="parseText">{ReactHtmlParser(episode.description)}</div>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Share />
              <Button variant="contained" color="primary" size="large">
                Click here
              </Button>
            </Grid>
          </Grid>

          {/* <EpisodeGrid episodes={this.state.episodes} /> */}
        </div>
      </React.Fragment>
    );
  }
}

Episode.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Episode);
