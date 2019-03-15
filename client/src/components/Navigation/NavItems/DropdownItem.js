import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  paper: {
    marginRight: theme.spacing.unit * 2
  }
});

class MenuListComposition extends React.Component {
  state = {
    open: false,
    menuOpen: false
  };

  handleToggle = event => {
    if (this.anchorEl.contains(event.target)) {
      this.setState(state => ({ open: !state.open, menuOpen: true }));
    }
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };
  loadMenuItems = () => {
    return this.props.listItems.map(({ title, slug }, index) => {
      return (
        <NavLink
          key={index}
          to={slug}
          exact
          activeStyle={{
            color: blue[900],
            textDecoration: 'underline'
          }}
          style={{ textDecoration: 'none' }}
        >
          <MenuItem onClick={this.handleClose}>
            <span style={{ fontSize: '0.86rem' }}>{title}</span>
          </MenuItem>
        </NavLink>
      );
    });
  };
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    const menuListName = this.props.title;
    return (
      <div className={classes.root}>
        <Button
          size="small"
          color="inherit"
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? menuListName : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
          onMouseEnter={this.handleToggle}
          onMouseLeave={this.handleToggle}
        >
          {this.props.title}
          <ArrowDropDown />
          <Popper
            onMouseLeave={this.handleClose}
            open={open}
            anchorEl={this.anchorEl}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id={menuListName}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom'
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>{this.loadMenuItems()}</MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Button>
      </div>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuListComposition);