import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import classNames from 'classnames';
import { CardActionArea } from '@material-ui/core/';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import { CardHeader } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Truncate from 'react-truncate';
import ReactHtmlParser from 'react-html-parser';
import OpenInNewRounded from '@material-ui/icons/OpenInNewRounded';
import ButtonBase from '@material-ui/core/ButtonBase';

import mic3Img from '../mic3test.jpg';
const styles = theme => ({
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.24
      },
      '& $imageMarked': {
        opacity: 0
      },
      '& $imageTitle': {
        border: '4px solid currentColor'
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.44,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  },
  root: {
    marginTop: theme.spacing.unit * 8,
    display: 'block'
  },
  gridListTile: {
    padding: theme.spacing.unit,
    margin: 0
  },
  imageStyle: {
    width: '100%',
    display: 'block',
    objectFit: 'cover',
    paddingTop: '66.66667%'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  cardGrid: {
    padding: '8px',
    [theme.breakpoints.up('840px')]: {
      width: 'calc(33.33333% -16px)',
      display: 'block'
    }
  },
  marginTop: {
    ...theme.container,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 4
    }
  },
  card: {
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '66.66667%',
    width: '100%'
  },
  cardContent: {
    flex: 1,
    marginTop: theme.spacing.unit * 3,
    padding: 0
  },
  cardActions: {
    justifyContent: 'space-between',
    margin: `0 ${theme.spacing.unit}px`,
    padding: '8px 14px'
  },
  eventName: {
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
    // 'white-space': 'nowrap'
    lineHeight: 'normal'
  },
  eventDate: {},
  eventDetailText: {
    color: 'rgba(0,0,0,0.87)',
    fontWeight: '300',
    fontSize: '1rem'
  },
  gridContent: {
    padding: '4px',
    [theme.breakpoints.down('md')]: {
      padding: 0
    }
  },
  icons: {
    marginRight: theme.spacing.unit + 1,
    verticalAlign: 'middle'
  },
  cardContentMargin: {
    margin: '0.rem 1rem'
  },
  truncateText: {
    marginTop: theme.spacing.unit * 3,
    color: '#5f6368',
    fontWeight: 400
    // display: 'flex',
    // justifyContent: 'flex-start',
    // alignItems: 'center'
  },
  navLink: {
    fontSize: '0.875rem',
    color: '#5f6368',
    verticalAlign: 'middle',
    fontFamily: 'Roboto Slab',
    textDecorationLine: 'none'
  },
  gradient: {
    backgroundImage: 'linear-gradient( 135deg, #3C8CE7 10%, #00EAFF 100%)'
  }
});

class EpisodeGrid extends Component {
  loadEpisodeList = () => {
    const { classes, episodes } = this.props;

    console.log();
    return episodes.map((item, index) => {
      let desc = ReactHtmlParser(item.description, {
        transform: function(node, index) {
          if (node.type === 'tag' && node.name === 'br') {
            return null;
          }
        }
      });
      return (
        <Grid
          item
          key={item.id}
          xs={12}
          sm={6}
          md={4}
          lg={4}
          className={classes.cardGrid}
        >
          <Card elevation={0} className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={`https://via.placeholder.com/300/0010ff?text=Ep. ${
                item.episode_number
              }`}
              title="Image title"
            />
            <div className={classNames(classes.cardMedia, classes.gradient)} />

            <div className={classes.cardContent}>
              <Typography
                align="left"
                variant="h5"
                component="div"
                gutterBottom
                className={classes.cardContentMargin}
              >
                Episode {item.episode_number} with
                <br />
                {item.artist}
              </Typography>

              <Typography
                style={{
                  hyphens: 'manual',
                  color: '#424242',
                  lineHeight: '20px',
                  marginTop: '4px',
                  fontWeight: 400
                }}
                variant="body2"
                paragraph
                component="div"
              >
                <Truncate
                  lines={4}
                  trimWhitespace
                  ellipsis={
                    <span>...</span>
                    // {/* <Typography
                    //   component="span"
                    //   paragraph
                    //   className={classes.truncateText}
                    // >
                    //   {' '}
                    //   {/* <NavLink className={classes.navLink}>
                    //     Full Episode
                    //   </NavLink> */}
                    // </Typography> */}
                  }
                >
                  <span style={{ hyphens: 'auto' }}>{desc}</span>
                </Truncate>
              </Typography>

              <Typography align="left">
                <OpenInNewRounded className={classes.icons} />
                Full Episode
              </Typography>
            </div>
          </Card>
        </Grid>
      );
    });
  };
  loadEpisodes = () => {
    const { classes, episodes } = this.props;
    return episodes.map((item, index) => {
      let desc = ReactHtmlParser(item.description, {
        transform: function(node, index) {
          if (node.type === 'tag' && node.name === 'br') {
            return null;
          }
        }
      });
      return (
        <Grid
          item
          key={item.id}
          xs={12}
          sm={6}
          md={4}
          lg={4}
          className={classes.cardGrid}
        >
          <Card elevation={0} className={classes.card}>
            <ButtonBase
              focusRipple
              key={item.id}
              className={classNames(classes.cardMedia, classes.image)}
              focusVisibleClassName={classes.focusVisible}
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${mic3Img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: 'auto'
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {item.artist}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>

            <div className={classes.cardContent}>
              <Typography
                align="left"
                variant="h5"
                component="div"
                gutterBottom
                className={classes.cardContentMargin}
              >
                {item.artist}, Ep. {item.episode_number}
              </Typography>

              <Typography
                style={{
                  hyphens: 'manual',
                  color: '#424242',
                  lineHeight: '20px',
                  marginTop: '4px',
                  fontWeight: 400
                }}
                variant="body2"
                paragraph
                component="div"
              >
                <Truncate
                  lines={4}
                  trimWhitespace
                  ellipsis={
                    <span>...</span>
                    // {/* <Typography
                    //   component="span"
                    //   paragraph
                    //   className={classes.truncateText}
                    // >
                    //   {' '}
                    //   {/* <NavLink className={classes.navLink}>
                    //     Full Episode
                    //   </NavLink> */}
                    // </Typography> */}
                  }
                >
                  <span style={{ hyphens: 'auto' }}>{desc}</span>
                </Truncate>
              </Typography>

              <Typography align="left">
                <OpenInNewRounded className={classes.icons} />
                Full Episode
              </Typography>
            </div>
          </Card>
        </Grid>
      );
    });
  };
  render() {
    const { classes, episodes } = this.props;
    console.log('clas: ', classes);
    return (
      <div style={{ paddingTop: '64px' }} className={classes.root}>
        <div className={classes.marginTop}>
          <Grid
            container
            spacing={40}
            justify="space-between"
            alignItems="center"
            wrap="wrap"
            className={classes.gridMargin}
          >
            {this.loadEpisodes()}
          </Grid>
        </div>
      </div>
    );
  }
}

EpisodeGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EpisodeGrid);
