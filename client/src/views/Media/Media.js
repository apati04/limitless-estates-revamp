import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { NavLink, withRouter } from 'react-router-dom';
import Truncate from 'react-truncate';
import withStyles from '@material-ui/core/styles/withStyles';
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import { cardTitle, cardLink, cardSubtitle } from "assets/jss/material-kit-react.jsx";

import classNames from 'classnames';
import GridContainer from 'components/Grid/GridContainer';
import Typography from '@material-ui/core/Typography';
import Button from 'components/CustomButtons/Button';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
import imagesStyles from 'assets/jss/material-kit-react/imagesStyles';
import Divider from '@material-ui/core/Divider';
import mediaApi from './api/mediaApi';
const styles = theme => ({
    ...landingPageStyle,
    ...productStyle,
    ...imagesStyles,
    cardTitle, cardLink, cardSubtitle,
    image: {
        position: 'relative'
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
        opacity: 0.18,
        transition: theme.transitions.create('opacity')
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit *
            4}px ${theme.spacing.unit + 6}px`
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
        // padding: '0 16px',
        textAlign: 'left'
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
        justifyContent: 'space-between',
        alignItems: 'stretch',
        margin: '16px 0px',
        borderRadius: 0,
        height: '100%',
        width: '100%',
        // [theme.breakpoints.up('sm')]: {
        //     maxWidth: 275
        // }
    },
    cardMedia: {
        margin: 0,
        '&:hover': {
            backgroundColor: 'none',
            color: 'none'
        },
        boxShadow: 'unset',
        paddingTop: '66.66667%',
        width: '100%'
    },
    cardActions: {
        justifyContent: 'space-between',
        margin: `0 ${theme.spacing.unit}px`
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
    cardContentMargin: {},
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
        '-webkit-text-decoration': 'none'
        // '&:hover': {
        //     color: grey[800] + '!important'
        // }
    },
    gradient: {
        backgroundImage: 'linear-gradient( 135deg, #3C8CE7 10%, #00EAFF 100%)'
    },
    buttonContainer: {
        textAlign: 'center',
        width: '100%'
    }
});

class MediaGrid extends Component {
    state = {
        error: false
    };
    loadCards = () => {
        const {classes } = this.props;
        return (
            <Card style={{ width: "20rem", textAlign: 'left'}}>
                <CardBody>
                    <h4 className={classes.cardTitle}>Card Title</h4>
                    <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
                    <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
        </p>
                    <a
                        href="#pablo"
                        className={classes.cardLink}
                        onClick={(e) => e.preventDefault()}>
                        Card link
        </a>
                    <a
                        href="#pablo"
                        className={classes.cardLink}
                        onClick={(e) => e.preventDefault()}>
                        Another link
        </a>
                </CardBody>
            </Card>
        )
    }
    loadEpisodes = () => {
        const { classes, location } = this.props;
        return (
            <React.Fragment>
                {mediaApi.map((item, index) => {
                    return (
                        <GridItem
                            key={item.id}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={4}
                            className={classes.cardGrid + ' tile fade-in'}
                        >
                            <Card>
                                    <a
                                        href={item.url}
                                        className={classes.navLink}
                                    >
                                        <Button
                                            focusRipple
                                            key={item.id}
                                            className={classNames(
                                                classes.cardMedia,
                                                classes.image
                                            )}
                                        >
                                            <div
                                                className={classes.imageSrc}
                                                style={{
                                                    background: `url(${item.thumbnail})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: `${item.bgPos ||
                                                        'center'}`,
                                                    width: 'auto',
                                                    borderRadiusTop: '29px'
                                                }}
                                            />
                                            <span
                                                className={
                                                    classes.imageBackdrop
                                                }
                                            />
                                            <span
                                                className={classes.imageButton}
                                            >
                                                <Typography
                                                    component='span'
                                                    variant='h6'
                                                    color='inherit'
                                                    className={
                                                        classes.imageTitle
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            classes.imageMarked
                                                        }
                                                    />
                                                </Typography>
                                            </span>
                                        </Button>

                                        <CardBody>
                                        <h6 className={classes.cardSubtitle} style={{marginBottom: 0}}>{item.date}</h6>

                                        <h4 className={classes.cardTitle} style={{marginTop: 0, marginBottom: 4}}>{item.title}</h4>
                                        <h6 className={classes.cardSubtitle} style={{marginTop: 0, marginBottom: '10px'}}>{item.author}</h6>

                                        {item.snippet ? <p>
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
                                                {item.snippet || ''}
                                            </Truncate>
                                        </p> : null} 
                                        </CardBody>
                                        {/* <Typography
                                                variant="caption"
                                                align="left"
                                                style={{ fontSize: '14px' }}
                                            >
                                                <OpenInNewRounded
                                                    style={{
                                                        fontSize: '18px'
                                                    }}
                                                    className={classes.icons}
                                                />
                                                Watch Episode
                                            </Typography> */}
                                    </a>
                            </Card>
                        </GridItem>
                    );
                })}
            </React.Fragment>
        );
    };
    render() {
        const { classes } = this.props;
        return (
            <div className={classNames(classes.container)}>
                <Typography align='left' paragraph variant='h4'>
                    Other Podcasts & Shows Featuring Limitless Estates
                </Typography>
                <Divider style={{ margin: '16px 0' }} />
            
                <GridContainer
                    justify='flex-start'
                    alignItems='baseline'
                    wrap='wrap'
                >
                    {this.loadCards()}
                    {this.loadEpisodes()}
                </GridContainer>
            </div>
        );
    }
}

MediaGrid.propTypes = {
    classes: PropTypes.object.isRequired
};

export default compose(withRouter, withStyles(styles))(MediaGrid);
