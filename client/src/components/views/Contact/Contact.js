import React from 'react';
import ContactForm from '../Layouts/Forms/ContactForm';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
const styles = theme => ({
  appContainer: {
    ...theme.container,
    height: '100%',
  },
  fullBackground: {
    padding: '0',
    background: 'url(/images/contact-bg.jpg) center center no-repeat',
    backgroundSize: 'cover',
    height: 'calc(100vh - 297px)',
  },
});
function Contact (props) {
  const {classes} = props;
  return (
    <div className={classes.fullBackground}>

      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.appContainer}
      >
        <Card raised>
          <Grid item xs={12} sm={6}>
            <ContactForm />
          </Grid>
          <Grid item xs={12} sm={6} />
        </Card>
      </Grid>

    </div>
  );
}
export default withStyles (styles) (Contact);
