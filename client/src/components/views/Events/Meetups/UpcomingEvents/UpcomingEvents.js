import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import productStyles from '../../../About/modules/landingPageSections/productStyles';
import Moment from 'react-moment';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import Icon from '@material-ui/core/Icon';
const styles = theme => ({
  ...theme.productStyles,
  root: {
    flexGrow: 1
  },
  mainTitle: {
    fontSize: 36
  },
  avatar: {
    ...theme.avatar
    // theme.bigAvatar
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
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flex: 1,
    padding: '0.9375rem'
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
  cardContentMargin: {
    margin: '0.rem 1rem'
  }
});
class UpcomingEvents extends React.Component {
  loadCards = () => {
    const { classes, eventList } = this.props;
    console.log('cards: ', eventList);
    return eventList.map((event, index) => {
      let endTime = event.time + event.duration;

      return (
        <Grid item key={event.id} xs={12} sm={6} md={6} lg={4}>
          <Card elevation={5} className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Grid
                container
                justify="space-around"
                alignItems="flex-start"
                spacing={0}
              >
                <Grid
                  item
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  className={classNames(classes.gridContent)}
                >
                  <Typography
                    align="center"
                    variant="h3"
                    component="h2"
                    className={classes.eventDate}
                  >
                    <Moment format="DD">{event.time}</Moment>
                  </Typography>
                  <Typography
                    align="center"
                    variant="overline"
                    style={{
                      lineHeight: 'normal',
                      color: 'rgba(0,0,0,0.87)',
                      fontSize: '1rem'
                    }}
                  >
                    <Moment format="MMM">{event.time}</Moment>
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={9}
                  sm={9}
                  md={9}
                  className={classNames(classes.gridItem, classes.gridContent)}
                >
                  <Typography
                    align="left"
                    variant="subtitle1"
                    className={classes.eventName}
                  >
                    {event.group.name}
                  </Typography>
                  <Typography
                    align="left"
                    variant="caption"
                    className={classes.eventDetailText}
                  >
                    <Moment format="ddd, hh:mm a">{event.time}</Moment> {'- '}
                    <Moment format="hh:mm a">{endTime}</Moment> <br />
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardMedia
              className={classes.cardMedia}
              image={event.featured_photo.photo_link}
              title="Image title"
            />

            <CardContent
              className={classNames(
                classes.cardContent,
                classes.cardContentMargin
              )}
            >
              <Grid container justify="space-around" alignItems="flex-start">
                <Grid item xs={3} sm={3} md={3} lg={3}>
                  <Typography align="center" variant="body2" gutterBottom>
                    Venue:
                  </Typography>
                </Grid>
                <Grid item xs={9} sm={9} md={9} lg={9}>
                  <Typography
                    gutterBottom
                    align="left"
                    variant="caption"
                    className={classes.eventDetailText}
                  >
                    {event.venue.name} <br />
                    {event.venue.address_1} <br />
                    {`${event.venue.city}, ${event.venue.state}`} <br />
                  </Typography>

                  <Typography
                    align="left"
                    variant="caption"
                    gutterBottom
                    className={classes.eventDetailText}
                  >
                    <a href="https://goo.gl/maps/X1M9w8ucj3q">Directions</a> |{' '}
                    <a href={event.link}>Event Page</a>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <Divider variant="fullWidth" />
            <CardActions className={classNames(classes.cardActions)}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Icon color="secondary">how_to_reg</Icon>
                <Typography
                  variant="caption"
                  className={classes.eventDetailText}
                >
                  {event.yes_rsvp_count}
                </Typography>
              </div>
              <div>
                <Button
                  component="a"
                  href={event.link}
                  size="small"
                  color="primary"
                >
                  View
                </Button>
                <Button size="small" variant="contained" color="secondary">
                  Join
                </Button>
              </div>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <hr className="hr-text" data-content="Upcoming" />
        <Typography>
          <em>Brought to you by Meetup.com</em>
        </Typography>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid
            container
            spacing={32}
            justify="center"
            alignItems="center"
            wrap="wrap"
          >
            {this.props.eventList.length ? (
              this.loadCards()
            ) : (
              <div>no events</div>
            )}
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(UpcomingEvents);
