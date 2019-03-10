import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import indigo from '@material-ui/core/colors/indigo';
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const styles = {
  root: {
    backgroundColor: '#3f51b5'
  }
};
class MobileNav extends Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <BottomNavigation value={value} onChange={this.handleChange} showLabels>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Meetups" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  }
}
MobileNav.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(MobileNav);
