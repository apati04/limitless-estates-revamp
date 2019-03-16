import React from 'react';
import SubscribeForm from '../../Layouts/Forms/SubscribeForm';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.warning.main,
    padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 3}px`
  },
  cardContent: {
    maxWidth: 400
  }
});
const CTAForm = props => {
  const { classes } = props;
  return (
    <div className={classes.card}>
      <SubscribeForm
        title="Receive offers"
        subHeader="Get your free investors guide."
        formStyle={classes.cardContent}
      />
    </div>
  );
};

export default withStyles(styles)(CTAForm);
