import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const NavItem = props => {
  console.log(props.navComponent);
  return (
    <Grid item>
      <Button color="inherit" component={props.navComponent} size="small">
        {props.btnText}
      </Button>
    </Grid>
  );
};

export default NavItem;
