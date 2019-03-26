import React from 'react';
import { Link } from 'react-router-dom';
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
import CardActionArea from '@material-ui/core/CardActionArea';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import GroupAdd from '@material-ui/icons/GroupAdd';
const styles = theme => ({
  ...productStyles,
  root: {
    flexGrow: 1
  },
  mainTitle: {
    fontSize: 36
  },
  gridContainer: {
    ...theme.gridContainer
  },
  gridItem: {
    ...theme.gridItem,
    width: 'auto'
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
    padding: '1rem 0.2rem'
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
    color: 'rgba(0,0,0,0.56)',
    fontWeight: '400',
    fontSize: '0.9rem'
  },
  gridContent: {
    padding: '4px',
    [theme.breakpoints.down('md')]: {
      padding: 0
    }
  }
});
class UpcomingEvents extends React.Component {
  loadCards = () => {
    const { classes, eventList } = this.props;
    console.log('cards: ', eventList);
    return eventList.map((event, index) => {
      let timePeriod;
      let [hr, minutes] = event.local_time.split(':');

      let len = event.duration / (60 * 60 * 1000);
      let hour = +hr % 12;
      if (+hr >= 12) {
        timePeriod = 'PM';
      } else {
        timePeriod = 'AM';
      }
      let formatedTime = hour + ':' + minutes + ' ' + timePeriod;
      let endtime = `${hour + len}:${minutes} ${timePeriod}`;
      // ---- day
      let [year, month, day] = event.local_date.split('-');
      let localTime = new Date(year, month, day);
      let endTime = event.time + event.duration;
      let title = event.name.split(' ').filter(item => item !== '-');

      return (
        <Grid item key={event.id} xs={12} sm={6} md={6} lg={4}>
          <Card elevation={5} className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={event.featured_photo.photo_link}
              title="Image title"
            />

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
                  className={classNames(classes.gridItem, classes.gridContent)}
                >
                  <Typography
                    align="center"
                    variant="h4"
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
                      color: 'rgba(0,0,0,0.6)',
                      fontSize: '0.825rem'
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
                    gutterBottom
                    className={classes.eventName}
                  >
                    {event.name}
                  </Typography>
                  <Typography
                    align="left"
                    variant="caption"
                    className={classes.eventDetailText}
                  >
                    <Moment format="ddd, hh:mm a">{event.time}</Moment> {'- '}
                    <Moment format="hh:mm a">{endTime}</Moment> <br />
                  </Typography>
                  <Hidden smDown>
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
                  </Hidden>
                  <Typography
                    align="left"
                    variant="caption"
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
              <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <Icon>how_to_reg</Icon>
                <Typography
                  align="left"
                  variant="caption"
                  className={classes.eventDetailText}
                >
                  {event.yes_rsvp_count} Attending
                </Typography>
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
      <div className={classes.section}>
        <hr className="hr-text" data-content="Upcoming Meetups" />

        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid
            container
            spacing={32}
            justify="space-evenly"
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
      </div>
    );
  }
}

export default withStyles(styles)(UpcomingEvents);
