/*eslint-disable*/
import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';
import { List, ListItem, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';

import footerStyle from 'assets/jss/material-kit-react/components/footerStyle.jsx';

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
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                className="external-link"
                href="https://ehypauluugknktzawdwva-free.10to8.com/"
                className={classes.block}
              >
                Schedule a Call
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/about/meet-the-team" className={classes.block}>
                About us
              </Link>
            </ListItem>

            <ListItem className={classes.inlineBlock}>
              <Link to="/resources" className={classes.block} target="_blank">
                Resources
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/disclaimer" className={classes.block}>
                Legal Disclaimer
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} Limitless Estates LLC built by{' '}
          <a
            href="mailto:andrew@aicodelab.com"
            className={aClasses}
            target="_blank"
          >
            AiCodeLab Team
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
