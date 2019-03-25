import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import RSVPComponent from './RSVPComponent';
import ScheduleTab from './ScheduleTab';
const styles = theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20
  },
  details: {
    alignItems: 'center'
  },
  column: {
    flexBasis: '33.33%'
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  topBar: {
    display: 'flex',
    padding: 0,
    margin: 0,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

function ScheduleTable(props) {
  const { classes } = props;
  console.log(props.meetupDetails);
  return (
    <div className={classes.root}>
      <ExpansionPanel square defaultExpanded>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs="auto">
              <Typography variant="h3" className={classes.secondaryHeading}>
                {props.children}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="h3" className={classes.heading}>
                {props.title}
              </Typography>
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        <hr style={{ border: '1px solid red' }} />
        <ExpansionPanelDetails className={classes.details}>
          {/* <Grid container justify="space-between" alignItems="center">
            <Grid item xs="auto">
              <img
                src={props.featuredPhoto.photo_link}
                alt="thumbnail"
                title="meetup_photo"
                style={{
                  width: 'auto'
                }}
              />
            </Grid>
            <div className={classes.column}>
              <Chip
                label="Barbados"
                className={classes.chip}
                onDelete={() => {}}
              />
            </div>
            <div className={classNames(classes.column, classes.helper)}>
              <Typography variant="caption">
                Select your destination of choice
                <br />
                <a href="#sub-labels-and-columns" className={classes.link}>
                  Learn more
                </a>
              </Typography>
            </div>
          </Grid> */}
          <ScheduleTab />
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" color="primary">
            Save
          </Button>
          <RSVPComponent />
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}

ScheduleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScheduleTable);
