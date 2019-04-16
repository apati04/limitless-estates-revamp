import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Moment from 'react-moment';
import Tooltip from '@material-ui/core/Tooltip';
import Button from 'components/CustomButtons/Button';
import Hidden from '@material-ui/core/Hidden';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
const styles = theme => ({
  ...productStyle,
  description: {
    ...productStyle.description,
    marginBottom: 0,
    fontWeight: 500
  },
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

class EventListSection extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };
  loadListItems = () => {
    const { classes } = this.props;
    const { expanded } = this.state;

    return this.props.eventList.map((event, index) => {
      let panel = 'panel' + index;

      let eventTitle = event.name.split('-');
      return (
        <ExpansionPanel
          style={{ boxShadow: 'unset' }}
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={this.handleChange(`panel${index}`)}
        >
          <ExpansionPanelSummary
            className="eventList__class"
            expandIcon={<ExpandMoreIcon />}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                flexWrap: 'wrap',
                textAlign: 'left',
                paddingRight: 64
              }}
            >
              <div>
                <h5 className={classes.description}>
                  <Moment format="MMM Do">{event.time}</Moment>
                </h5>
                <p style={{ color: '#555' }}>
                  <Moment format="ddd hh:mm a">{event.time}</Moment>
                </p>
              </div>
              <div>
                <h5 className={classes.description}>
                  {event.venue.name} <br /> {event.venue.city},{' '}
                  {event.venue.state}
                </h5>
              </div>
              <Hidden smDown>
                <div>
                  <h5 className={classes.description}>
                    {eventTitle[0]}
                    <br />
                    {eventTitle[1]}
                  </h5>
                </div>
              </Hidden>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails
            style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ textAlign: 'left' }}>
                <h4 className={classes.title}>Event Details</h4>
                <h5 className={classes.description}>{this.props.schedule}</h5>
              </div>
              <div
                style={{
                  textAlign: 'left',
                  flexBasis: 'auto'
                }}
              >
                <h4 className={classes.title}>How to Find Us</h4>
                <h5 className={classes.description}>{event.how_to_find_us}</h5>
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4 className={classes.title}>Event Location</h4>
                <h5 className={classes.description}>
                  {event.venue.name} <br />
                  {event.venue.address_1} <br />
                  {`${event.venue.city}, ${event.venue.state}`} <br />
                </h5>
                <div style={{ marginTop: 'auto' }}>
                  <Tooltip title="Link opens a new tab">
                    <Button
                      color="info"
                      target="_blank"
                      rel="noopener nofollow"
                      href={event.link}
                    >
                      Event Page
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });
  };
  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    return (
      <div>
        <h1 style={{ textAlign: 'center' }} className={classes.title}>
          Event Schedule
        </h1>
        <div style={{ margin: '24px 0' }} />
        {this.loadListItems()}
      </div>
    );
  }
}

EventListSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventListSection);
/**
 *
 *    <ExpansionPanel
          expanded={expanded === 'panel1'}
          onChange={this.handleChange('panel1')}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              General settings
            </Typography>
            <Typography className={classes.secondaryHeading}>
              I am an expansion panel
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === 'panel2'}
          onChange={this.handleChange('panel2')}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Users</Typography>
            <Typography className={classes.secondaryHeading}>
              You are currently not an owner
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === 'panel3'}
          onChange={this.handleChange('panel3')}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              Advanced settings
            </Typography>
            <Typography className={classes.secondaryHeading}>
              Filtering has been entirely disabled for whole web server
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === 'panel4'}
          onChange={this.handleChange('panel4')}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Personal data</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
 */
