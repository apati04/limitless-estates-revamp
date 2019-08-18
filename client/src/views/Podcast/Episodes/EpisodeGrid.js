import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { NavLink, withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';

import classNames from 'classnames';
import CardActionArea from '@material-ui/core/CardActionArea';
import GridContainer from 'components/Grid/GridContainer';
import Typography from '@material-ui/core/Typography';
import Button from 'components/CustomButtons/Button';
import Truncate from 'react-truncate';
import ReactHtmlParser from 'react-html-parser';
import OpenInNewRounded from '@material-ui/icons/OpenInNewRounded';

import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
import imagesStyles from 'assets/jss/material-kit-react/imagesStyles';
import grey from '@material-ui/core/colors/grey';
import episodeLogo from './ep.svg';
const styles = theme => ({
  ...landingPageStyle,
  ...productStyle,
  ...imagesStyles,
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
      height: 100
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.4
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
    ...imagesStyles,

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
    opacity: 0.4,
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
  },
  marginTop: {
    ...theme.container,
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 4
    }
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 0
  },
  cardMedia: {
    margin: 0,
    boxShadow: 'unset',
    paddingTop: '66.66667%',
    width: '100%'
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
  loadMore: {},
  icons: {
    marginRight: theme.spacing.unit + 1,
    verticalAlign: 'middle'
  },
  cardContentMargin: {
    margin: '0rem 1rem'
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
    color: '#5f6368',
    textDecorationLine: 'none',
    '-webkit-text-decoration': 'none',
    '&:hover': {
      color: grey[800] + '!important'
    }
  },
  gradient: {
    backgroundImage: 'linear-gradient( 135deg, #3C8CE7 10%, #00EAFF 100%)'
  },
  buttonContainer: {
    textAlign: 'center',
    width: '100%'
  }
});

class EpisodeGrid extends Component {
  state = {
    items: [],
    visible: 6,
    error: false
  };
  componentDidMount() {
    let len = this.props.episodes.length - 1;
    let episodeArray = [];
    for (let i = 0; i < len; i++) {
      episodeArray.push(this.props.episodes[i]);
    }
    this.setState({ items: episodeArray });
  }
  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 6 };
    });
  };
  loadEpisodes = () => {
    const { classes, location } = this.props;
    return (
      <React.Fragment>
        {this.props.episodes.slice(0, this.state.visible).map((item, index) => {
          let episodeZero;
          if (item.id === 949981) {
            episodeZero = '0';
          }
          let desc = ReactHtmlParser(item.summary, {
            transform: function(node, index) {
              if (node.type === 'tag' && node.name === 'br') {
                return null;
              }
            }
          });

          return (
            <GridItem
              key={item.id}
              xs={12}
              sm={6}
              md={4}
              lg={4}
              className={classes.cardGrid + ' tile fade-in'}
            >
              <Card elevation={0} className={classes.card}>
                <CardActionArea component="div">
                  <NavLink
                    className={classes.navLink}
                    to={{
                      pathname: `/podcasts/${item.id}`,
                      state: {
                        episode: item,
                        parentStyles: this.props.parentStyles,
                        originalPath: location.pathname
                      }
                    }}
                  >
                    <Button
                      focusRipple
                      key={item.id}
                      className={classNames(classes.cardMedia, classes.image)}
                      focusVisibleClassName={classes.focusVisible}
                    >
                      <div
                        className={classes.imageSrc}
                        style={{
                          backgroundImage: `url(${episodeLogo})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          width: 'auto',
                          borderRadiusTop: '29px'
                        }}
                      />
                      <span className={classes.imageBackdrop} />
                      <span className={classes.imageButton}>
                        <Typography
                          component="span"
                          variant="h6"
                          color="inherit"
                          className={classes.imageTitle}
                        >
                          Episode {episodeZero || item.episode_number}
                          <span className={classes.imageMarked} />
                        </Typography>
                      </span>
                    </Button>
                    <div
                      style={{
                        height: '275px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'stretch'
                      }}
                    >
                      <CardBody>
                        <h4
                          style={{ textAlign: 'left' }}
                          className={classes.cardTitle}
                        >
                          {item.title.split(': ')[1].trim() || item.title}
                        </h4>
                        <div style={{ textAlign: 'left', hyphens: 'auto' }}>
                          <Truncate
                            lines={3}
                            trimWhitespace
                            ellipsis="..."
                            style={{
                              textAlign: 'left',
                              width: '100%',
                              hyphens: 'auto'
                            }}
                          >
                            {desc}
                          </Truncate>
                        </div>
                      </CardBody>
                      <CardFooter className={classes.cardFooter}>
                        <p>
                          <OpenInNewRounded className={classes.icons} />
                          Full Episode
                        </p>
                      </CardFooter>
                    </div>
                  </NavLink>
                </CardActionArea>
              </Card>
            </GridItem>
          );
        })}
        <div
          style={{ textAlign: 'center' }}
          className={classes.buttonContainer}
        >
          {this.state.visible < this.state.items.length && (
            <Button
              onClick={this.loadMore}
              size="lg"
              color="success"
              className={classes.loadMore}
            >
              Load More
            </Button>
          )}
        </div>
      </React.Fragment>
    );
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classNames(classes.container)}>
        <GridContainer
          justify="space-between"
          alignItems="flex-start"
          wrap="wrap"
        >
          {this.loadEpisodes()}
        </GridContainer>
      </div>
    );
  }
}

EpisodeGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(EpisodeGrid);
