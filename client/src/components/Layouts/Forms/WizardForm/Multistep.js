import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import moduleName from 'formik-material-ui';
import { withStyles } from '@material-ui/core/styles';

const initialValues = {
  first: '',
  last: ''
}
const styles = theme => ({
  root: {
    display: 'flex'
  }
});

class Multistep extends Component {
  state = { pageIndex: 0}
  const { classes } = this.props;

  return <div className={classes.root}>f</div>;
};

Multistep.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Multistep);
