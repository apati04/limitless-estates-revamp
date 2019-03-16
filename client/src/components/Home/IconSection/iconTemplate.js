import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
const styles = {
  root: {
    textAlign: 'center',
    margin: '0.25rem',
    padding: '0.25rem'
  }
};
const iconTemplate = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography gutterBottom>
        <i
          className={`${props.icon}`}
          style={{ fontSize: `${props.iconSize}` }}
        />
      </Typography>
      <Typography variant="h6">{props.title}</Typography>
    </div>
  );
};

export default withStyles(styles)(iconTemplate);
