import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { TextField, Checkbox } from 'formik-material-ui';
import { Field } from 'formik';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
const initialState = {
  q1: '',
  q2: ''
};
const Info = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Info
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            type="text"
            label="q1"
            name="q1"
            id="q1"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="q2"
            component={TextField}
            type="text"
            label="Question 2"
            id="q2"
          />
        </Grid>
        <button
          type="button"
          onClick={props.navigateBack}
          disabled={props.pageIndex === 0}
        >
          Back
        </button>
        <button
          type="button"
          onClick={props.navigateNext}
          disabled={!(props.values.q1 && props.values.q2)}
        >
          Next
        </button>
      </Grid>
    </React.Fragment>
  );
};

export default Info;
