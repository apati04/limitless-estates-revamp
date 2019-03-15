import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import PageHeader from '../../Layouts/PageHeader';

import BlogType1 from '../../Layouts/BlogType1';
import api from '../api/why_invest';
import grey from '@material-ui/core/colors/grey';
const styles = theme => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      margin: 0
    }
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
  },
  cardTitle: {
    padding: theme.spacing.unit * 2
  }
});

function WhyInvestComponent(props) {
  const { classes } = props;
  const [title, ...textBody] = api;
  const headerimg = 'https://i.imgur.com/6Oyse4k.jpg';
  return (
    <div className={classes.root}>
      <Card>
        <Grid container justify="center" alignItems="center" wrap="wrap">
          <Grid item xs={12}>
            {/* <CardHeader
              title={
                <Typography
                  className={classes.contentHeader}
                  gutterBottom
                  align="center"
                  component="h1"
                >
                  Introduction to Multifamily Investing
                </Typography>
              }
              className={classes.cardHeader}
            /> */}
            <PageHeader
              imgSrc={headerimg}
              position="center center"
              imgHeight="50vh"
            />
          </Grid>
          <Grid item xs={8} className={classes.cardBodyGrid}>
            <Typography
              paragraph
              align="left"
              variant="h4"
              className={classes.cardTitle}
            >
              <span style={{ borderBottom: '1px solid', paddingBottom: '8px' }}>
                {title}
              </span>
            </Typography>
            <BlogType1 text={textBody} />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
export default withStyles(styles)(WhyInvestComponent);
