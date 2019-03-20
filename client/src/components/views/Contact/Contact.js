import React from 'react';
import ContactForm from '../Layouts/Forms/ContactForm';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
const styles = (theme) => ({
  appContainer: {
    ...theme.container,
    height: '100%'
  },
  fullBackground: {
    padding: '0',
    background: 'url(/images/contact-bg.jpg) center center no-repeat',
    backgroundSize: 'cover',
    height: 'calc(100vh - 297px)'
  }
});
function Contact(props) {
  const { classes } = props;
  return (
    <div className={classes.fullBackground}>
      <Grid container justify='center' alignItems='center' className={classes.appContainer}>
        <Grid item xs={12}>
          <ContactForm />
        </Grid>
      </Grid>
    </div>
  );
}
export default withStyles(styles)(Contact);
