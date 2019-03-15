import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  credit: {
    marginTop: theme.spacing.unit * 6,
    marginBottom: theme.spacing.unit * 4
  },
  hideCredit: {
    position: 'absolute',
    top: -100
  }
});
const AppTheme = props => {
  const { children, classes, hideCredit, title } = props;
  return (
    <React.Fragment>
      {children}
      <Typography
        color="textSecondary"
        align="center"
        className={clsx(classes.credit, {
          [classes.hideCredit]: hideCredit
        })}
      >
        {title}
        {': '}
        {'Built with '}
        <span role="img" aria-label="Love">
          ❤️
        </span>
        {' by the '}
        <Button color="inherit">Aitech</Button>
        {' team.'}
      </Typography>
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
