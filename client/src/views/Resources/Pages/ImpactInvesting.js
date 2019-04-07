import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import grey from '@material-ui/core/colors/grey';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import PageHeader from '../../Layouts/PageHeader';
import BlogType1 from '../../Layouts/BlogType1';
import api from '../api/impact_investing';

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
  appContainer: {
    ...theme.container
  }
});

function WhyInvestComponent(props) {
  const { classes } = props;
  const [title, ...textBody] = api;
  const headerimg = '/images/strategy.jpg';

  return (
    <div className={classes.root}>
      <PageHeader
        imgSrc={headerimg}
        position="center center"
        imgHeight="35em"
      />
      <div className={classNames('main-content', classes.appContainer)}>
        <Card elevation={0}>
          <Grid container justify="center" alignItems="center" wrap="wrap">
            <Grid item xs={12} className={classes.cardBodyGrid}>
              <CardContent>
                <Typography paragraph align="left" variant="h4">
                  {title}
                </Typography>
                <Divider style={{ marginBottom: '1.875rem' }} />
                <BlogType1 text={textBody} />
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
}
export default withStyles(styles)(WhyInvestComponent);
