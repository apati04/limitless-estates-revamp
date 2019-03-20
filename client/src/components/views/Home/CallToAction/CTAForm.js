import React from 'react';
import SubscribeForm from '../../Layouts/Forms/SubscribeForm';
import {withStyles} from '@material-ui/core/styles';
const styles = theme => ({
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.warning.main,
    padding: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 8}px`,
    width: '90%',
    [theme.breakpoints.down ('md')]: {
      width: '100%',
    },
  },
  cardContent: {
    // [theme.breakpoints.up('md')]: {
    // 	maxWidth: 400
    // }
  },
});
const CTAForm = props => {
  const {classes} = props;
  return (
    <div className={classes.card}>
      <SubscribeForm
        title="Insights and Analysis"
        subHeader="Subscribe to Limitless Estates and get your 
FREE Passive Investors Guide!"
        buttonText="Get the Guide"
        formStyle={classes.cardContent}
      />
    </div>
  );
};

export default withStyles (styles) (CTAForm);
