import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  credit: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 2
  },
  hideCredit: {
    position: 'absolute',
    top: -100
  }
});
const AppTheme = props => {
  const { children } = props;
  return <React.Fragment>{children}</React.Fragment>;
};
AppTheme.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
  hideCredit: PropTypes.bool,
  title: PropTypes.string.isRequired
};
AppTheme.defaultProps = {
  hideCredit: false
};
export default withStyles(styles)(AppTheme);
