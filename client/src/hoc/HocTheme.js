import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Footer from '../components/Navigation/Footer/Footer';
const styles = (theme) => ({
  credit: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 2
  },
  hideCredit: {
    position: 'absolute',
    top: -100
  }
});
const AppTheme = (props) => {
  const { children, classes, hideCredit, title } = props;
  return (
    <React.Fragment>
      {children}
      <Footer />
    </React.Fragment>
  );
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
