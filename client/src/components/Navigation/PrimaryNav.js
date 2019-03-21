import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import PrimaryNavMenu from './NavItems/PrimaryNavMenu';
import headerStyles from '../views/About/modules/headerStyles';

const styles = theme => ({
  ...headerStyles,
  mainAppBar: {
    zIndex: 10
  },
  imageStyles: {
    height: 'auto',
    marginBottom: '6px',
    width: '10em',
    display: 'inline-block'
  }
});

class PrimaryNav extends Component {
  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener('scroll', this.headerColorChange);
    }
  }
  headerColorChange = () => {
    const { classes, color, changeColorOnScroll } = this.props;
    const winScrollTop = window.pageYOffset;
    if (winScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };
  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener('scroll', this.headerColorChange);
    }
  }
  render() {
    const { classes, color, absolute, fixed } = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed
    });

    return (
      <AppBar
        style={{ borderRadius: 0, backgroundColor: '#212121' }}
        className={appBarClasses}
      >
        <Toolbar disableGutters variant="dense" className={classes.container}>
          <img
            alt="logo"
            src="https://i.imgur.com/IlUnKOe.png"
            className={classes.imageStyles}
          />
          <PrimaryNavMenu />
        </Toolbar>
      </AppBar>
    );
  }
}

PrimaryNav.propTypes = {
  classes: PropTypes.object.isRequired
};

const LocationWithRouterNav = withRouter(PrimaryNav);
export default withStyles(styles)(LocationWithRouterNav);