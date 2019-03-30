import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import classNames from 'classnames';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import DateRangeOutlined from '@material-ui/icons/DateRangeOutlined';
import MailOutline from '@material-ui/icons/MailOutline';
import Fab from '@material-ui/core/Fab';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import ContactMailIcon from '@material-ui/icons/ContactMailOutlined';
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  fabSpacing: {
    marginRight: theme.spacing.unit * 2
  },
  youtubeButton: {
    background: red[500],
    color: 'white',
    fontSize: '1.225em'
  }
});

function ContactSidebar(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListSubheader>
        <Typography paragraph variant="body1">
          Please use the contact form to reach us. For general questions, visit
          our FAQs page.
        </Typography>
      </ListSubheader>
      <Divider variant="middle" style={{ margin: '1em 1em' }} />
      <ListSubheader>
        <Typography gutterBottom variant="h6">
          General Contact Information
        </Typography>
      </ListSubheader>
      <ListItem>
        <ListItemText
          primary="Kyle Mitchell"
          secondary="kmitchell@limitless-estates.com"
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Lalita Patipaksiri"
          secondary="lpatipaksiri@limitless-estates.com"
        />
      </ListItem>
      <Divider variant="middle" style={{ margin: '1em 1em' }} />

      <ListSubheader>
        <Typography variant="h6">Schedule a call</Typography>
      </ListSubheader>
      <ListItem
        button
        component="a"
        href="https://ehypauluugknktzawdwva-free.10to8.com/"
        className={classes.listHover}
      >
        <Avatar>
          <DateRangeOutlined />
        </Avatar>

        <ListItemText primary="See Availabile Times" />
      </ListItem>
      <Divider variant="middle" style={{ margin: '1em 1em' }} />
      <ListSubheader>
        <Typography gutterBottom variant="h6">
          Stay connected
        </Typography>
      </ListSubheader>
      <ListItem>
        <div>
          <Fab
            size="small"
            color="primary"
            href="https://www.google.com"
            className={classes.fabSpacing}
          >
            <i className="fab fa-facebook-f" />
          </Fab>
          <Fab
            size="small"
            color="primary"
            href="https://www.google.com"
            className={classes.fabSpacing}
          >
            <i className="fab fa-linkedin-in" />
          </Fab>
          <Fab
            size="small"
            href="https://www.google.com"
            className={classNames(classes.youtubeButton, classes.fabSpacing)}
          >
            <i className="fab fa-youtube" />
          </Fab>
        </div>
      </ListItem>
    </List>
  );
}

ContactSidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactSidebar);
