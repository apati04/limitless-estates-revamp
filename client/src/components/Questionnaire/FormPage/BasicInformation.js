import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { TextField } from 'formik-material-ui';
import { Field } from 'formik';

import Button from '@material-ui/core/Button';

const PageOne = props => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Basic Information
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            type="text"
            label="Name"
            name="fullname"
            id="fullname"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="email"
            component={TextField}
            className="form-control"
            type="email"
            label="Email"
            id="email"
            required
          />
          <Button onClick={props.navigateNext}>Next</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PageOne;
