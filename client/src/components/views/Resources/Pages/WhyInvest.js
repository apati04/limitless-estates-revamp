import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PageHeader from '../../Layouts/PageHeader';
import Divider from '@material-ui/core/Divider';
import BlogType1 from '../../Layouts/BlogType1';
import api from '../api/why_invest';
import grey from '@material-ui/core/colors/grey';
import Banner from '../../../Banner/Banner';
const styles = theme => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      margin: 0
    }
  },
  appContainer: {
    ...theme.container
  },
  cardHeader: {
    height: theme.spacing.unit * 40,
    padding: `${theme.spacing.unit * 8}px 0`,
    background: grey[100]
  },
  cardBodyGrid: {
    padding: '40px',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      padding: 0
    }
  },
  contentHeader: {
    fontWeight: 300,
    fontSize: '3em',
    letterSpacing: 0
  }
});

function WhyInvestComponent(props) {
  const { classes } = props;
  const [title, ...textBody] = api;
  const headerimg = 'https://i.imgur.com/6Oyse4k.jpg';
  return (
    <div className={classes.root}>
      <PageHeader
        imgSrc={headerimg}
        position="center center"
        imgHeight="20em"
        overlayEffect
      />
      <div className={classNames('main-content', classes.appContainer)}>
        <Card elevation={0}>
          <Grid container justify="center" alignItems="center" wrap="wrap">
            <Grid item xs={8} className={classes.cardBodyGrid}>
              <CardContent>
                <Typography paragraph align="left" variant="h4">
                  {title}
                </Typography>
                <Divider style={{ marginBottom: '1.875rem' }} />
                <BlogType1 text={textBody} />
              </CardContent>
            </Grid>
            <Grid item xs={4} className={classes.cardBodyGrid}>
              <Banner
                primaryText="Are you an accredited invester? Become a partner with us and find out our latest passive investment opportunities"
                buttonText="Schedule a Call"
              />
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
}
export default withStyles(styles)(WhyInvestComponent);
