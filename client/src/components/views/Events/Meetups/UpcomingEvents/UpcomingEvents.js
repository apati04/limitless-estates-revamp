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
    ...theme.gridItem
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    width: 'auto',
    flexGrow: 1,
    padding: '15px'
  },
  cardActions: {
    justifyContent: 'flex-end'
  },
  eventName: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    'white-space': 'nowrap'
  },
  eventDate: {
    margin: 0
  },
  eventDetailText: {
    color: 'rgba(0,0,0,0.6)'
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
      let [groupName, subGroupName] = event.name.split(' - ');
      return (
        <Grid item key={event.id} sm={6} md={4} lg={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={event.featured_photo.photo_link} // eslint-disable-line max-len
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Grid
                container
                justify="space-between"
                alignItems="flex-start"
                spacing={0}
                className={classes.gridContainer}
              >
                <Grid item xs={12} sm={3} md={3} className={classes.gridItem}>
                  <Typography
                    align="center"
                    variant="h2"
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
                <Grid item xs={12} sm={9} md={9} className={classes.gridItem}>
                  <Typography
                    align="left"
                    variant="body1"
                    className={classes.eventName}
                  >
                    {groupName} <br />
                    {subGroupName}
                  </Typography>
                  <Typography
                    align="left"
                    variant="body2"
                    className={classes.eventDetailText}
                  >
                    <Moment format="ddd, hh:mm a">{event.time}</Moment> to{' '}
                    <Moment format="hh:mm a">{endTime}</Moment>
                  </Typography>
                  <Typography align="left" variant="body1">
                    {event.venue.name}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <Divider variant="fullWidth" />
            <CardActions className={classes.cardActions}>
              <Button size="small" color="primary">
                View
              </Button>
              <Button size="small" variant="contained" color="secondary">
                Rsvp
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
    // return cards.map(card => (
    //   <Grid item key={card} sm={6} md={4} lg={3}>
    //     <Card className={classes.card}>
    //       <CardMedia
    //         className={classes.cardMedia}
    //         image=""
    //         title="Image title"
    //       />
    //       <CardContent className={classes.cardContent}>
    //         <Typography gutterBottom variant="h5" component="h2">
    //           Heading
    //         </Typography>
    //         <Typography>
    //           This is a media card. You can use this section to describe the
    //           content.
    //         </Typography>
    //       </CardContent>
    //       <CardActions>
    //         <Button size="small" color="primary">
    //           View
    //         </Button>
    //         <Button size="small" color="primary">
    //           Edit
    //         </Button>
    //       </CardActions>
    //     </Card>
    //   </Grid>
    // ));
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <Grid
          container
          justify="center"
          alignItems="stretch"
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={12} md={12} className={classes.gridItem}>
            <hr className="hr-text" data-content="Upcoming" />
          </Grid>
        </Grid>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
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
