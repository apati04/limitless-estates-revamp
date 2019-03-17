import React from 'react';
import Lalita from './Lalita';
import { withStyles } from '@material-ui/core/styles';
import Activities from './Activities';
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  }
});

function About(props) {
  const { classes, id, location } = props;
  const handleView = () => {
    switch (location.pathname) {
      case '/about/what-we-do':
        return <Activities />;
      case '/about/team/lalita':
        return <Lalita />;
      default:
        return <div>nomatch</div>;
    }
  };
  return <div className={classes.root}>{handleView()}</div>;
}
export default withStyles(styles)(About);
