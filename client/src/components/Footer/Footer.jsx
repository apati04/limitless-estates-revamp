/*eslint-disable*/
import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// nodejs library that concatenates classes
import footers from './footerFields';
import socialMedia from './socialFields';
import classNames from 'classnames';
import {
  List,
  ListItem,
  withStyles,
  Avatar,
  Tooltip,
  Fab,
  Grid,
  Typography
} from '@material-ui/core';
import Button from '../CustomButtons/Button.jsx';
import CallIcon from '@material-ui/icons/Call';
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';

import footerStyle from 'assets/jss/material-kit-react/components/footerStyle.jsx';
const styles = theme => ({
  ...footerStyle,
  youtube: {
    background: '#ff0000',
    color: '#fff',
    textDecoration: 'none'
  },
  facebook: {
    textDecoration: 'none',
    color: '#fff',
    background: '#3b5998'
  },
  linkedIn: {
    textDecoration: 'none',
    color: '#fff',
    background: '#0077B5'
  }
});
function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <Grid
          container
          spacing={0}
          alignItems="flex-start"
          justify="space-evenly"
          wrap="wrap"
        >
          {footers.map((footer, index) => (
            <Grid
              item
              key={footer.title || index}
              className={classes.footerItem}
            >
              {footer.src ? (
                <div style={{ padding: '0 .5rem' }}>
                  <img
                    src={footer.src}
                    alt="footer logo"
                    style={{ marginTop: '-0.5rem' }}
                    height="64px"
                    title="limitless estates footer logo"
                  />
                </div>
              ) : (
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  {footer.title}
                </Typography>
              )}
              {footer.description.map(item => (
                <Link
                  key={item.id}
                  to={item.link}
                  style={{ textDecoration: 'none' }}
                >
                  <Typography variant="caption" color="textSecondary">
                    {item.id}
                  </Typography>
                </Link>
              ))}
            </Grid>
          ))}

          <Grid item className={classes.footerItem}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {socialMedia.map(({ title, href, icon, label }, index) => (
                <Tooltip key={label} title={title}>
                  <Avatar
                    component="a"
                    href={href}
                    aria-label={label}
                    className={classNames(classes.avatar, classes[`${label}`])}
                  >
                    <i className={icon} />
                  </Avatar>
                </Tooltip>
              ))}
            </div>
            <div>
              <Tooltip title="Schedule a call on 10 to 8">
                <Fab
                  variant="extended"
                  size="medium"
                  style={{ background: '#00e676', boxShadow: 'unset' }}
                  aria-label="Add"
                  className={classes.margin}
                  component="a"
                  href="https://ehypauluugknktzawdwva-free.10to8.com/"
                >
                  <CallIcon className={classes.extendedIcon} />
                  Schedule a Call
                </Fab>
              </Tooltip>
            </div>
          </Grid>
        </Grid>

        <Typography
          color="textSecondary"
          align="center"
          gutterBottom
          className={classes.credit}
        >
          © 2018 Copyright Limitless Estates, LLC
        </Typography>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(styles)(Footer);
