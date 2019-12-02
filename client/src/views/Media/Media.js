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
import ReactHtmlParser from 'react-html-parser';
import {
    cardTitle,
    cardLink,
    cardSubtitle
} from 'assets/jss/material-kit-react.jsx';
import classNames from 'classnames';
import GridContainer from 'components/Grid/GridContainer';
import Typography from '@material-ui/core/Typography';
import Button from 'components/CustomButtons/Button';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
import imagesStyles from 'assets/jss/material-kit-react/imagesStyles';
import Divider from '@material-ui/core/Divider';
import mediaApi from './api/mediaApi';
import ReadMore from '../../components/ReadMore';
const styles = theme => ({
    ...landingPageStyle,
    ...productStyle,
    ...imagesStyles,
    cardTitle,
    cardLink,
    cardSubtitle,
    textMuted: {
        color: '#6c757d',
        margin: 0
    },
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
    episodebutton: {
        paddingRight: 0
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
        width: '100%',
        height: '95%',
        position: 'relative'
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
        '-webkit-text-decoration': 'none',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    gradient: {
        backgroundImage: 'linear-gradient( 135deg, #3C8CE7 10%, #00EAFF 100%)'
    },
    buttonContainer: {
        textAlign: 'center',
        width: '100%'
    },
    cardBody: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        padding: '8px 16px'
    }
});

class MediaGrid extends Component {
    state = {
        error: false
    };
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
                            <Card className={classes.card}>
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
                                    <span className={classes.imageBackdrop} />
                                    <span className={classes.imageButton}>
                                        <Typography
                                            component='span'
                                            variant='h6'
                                            color='inherit'
                                            className={classes.imageTitle}
                                        >
                                            <span
                                                className={classes.imageMarked}
                                            />
                                        </Typography>
                                    </span>
                                </Button>
                                </a>

                                <CardBody className={classes.cardBody}>
                                    <div style={{ width: '100%' }}>
                                        <h4
                                            className={classes.cardTitle}
                                            style={{
                                                marginTop: 0,
                                                marginBottom: 4,
                                                minHeight: 40
                                            }}
                                        >
                                            {item.title}
                                        </h4>
                                        <h6
                                            className={classes.cardSubtitle}
                                            style={{
                                                marginTop: 0,
                                                marginBottom: '10px'
                                            }}
                                        >
                                            {item.author}
                                        </h6>

                                        {item.description && (
                                            <ReadMore lines={6} trimWhitespace>
                                                {ReactHtmlParser(
                                                    item.description
                                                ) || ''}
                                            </ReadMore>
                                        )}
                                    </div>
                                </CardBody>
                                <CardFooter
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '0 16px 8px'
                                    }}
                                >
                                    <a
                                        href={item.url}
                                        className={classes.navLink}
                                    >
                                        {item.duration && (
                                            <p className={classes.textMuted}>
                                                {item.duration} min
                                            </p>
                                        )}
                                        <Button
                                            style={{ marginLeft: 'auto' }}
                                            simple
                                            color='facebook'
                                            className={classes.episodebutton}
                                        >
                                            Go to Episode Page
                                        </Button>
                                    </a>
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
                                </CardFooter>
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
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    padding: '10px',
                    overflowX: 'hidden'
                }}
            >
                <Typography align='left' paragraph variant='h4'>
                    Other Podcasts & Shows Featuring Limitless Estates
                </Typography>
                <Divider style={{ margin: '16px 0' }} />

                <GridContainer
                    justify='space-between'
                    alignItems='stretch'
                    wrap='wrap'
                >
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
