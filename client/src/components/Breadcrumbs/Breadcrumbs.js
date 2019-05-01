import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import MuiBreadcrumbs from '@material-ui/lab/Breadcrumbs';
import withStyles from '@material-ui/core/styles/withStyles';
const styles = {
  navLink: {
    '-webkit-text-decoration-line': 'none',
    textDecorationLine: 'none',
    color: 'rgba(0,0,0, 0.87)',
    fontWeight: 400
  }
};
const Breadcrumbs = props => {
  const { classes, linkHeader, linkTitle, resource } = props;

  return (
    <MuiBreadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="Breadcrumb"
    >
      <NavLink className={classes.navLink} to={`/${resource}`}>
        <Typography style={{ color: '#337ab7' }} variant="body2">
          {linkTitle}
        </Typography>
      </NavLink>
      <Typography color="textPrimary" variant="body2">
        {linkHeader || ''}
      </Typography>
    </MuiBreadcrumbs>
  );
};

Breadcrumbs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Breadcrumbs));
