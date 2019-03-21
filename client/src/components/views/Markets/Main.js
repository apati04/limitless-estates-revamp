import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { withRouter } from 'react-router-dom';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import GoogleMap from '../../GoogleMap/GoogleMap';
import Divider from '@material-ui/core/Divider';
import Parallax from '../Layouts/Parallax';
import loadContent from './loadContent';
const styles = theme => ({
  root: {
    flexGrow: 1,
    ...theme.container,
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  },
  cardStyle: { borderRadius: '6px' },
  dividerStyle: {
    paddingLeft: '8px'
  },
  gridContainer: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 4,
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing.unit * 6}px ${theme.spacing.unit}px`
    }
  },
  gridItem: {
    marginTop: -96,
    marginBottom: 48,
    zIndex: 10
  }
});

function Main(props) {
  const { classes, api } = props;

  const { content, maps, headerImageUrl } = api;

  const [marketTitle, ...mainContent] = content;

  return (
    <section>
      <Parallax image={headerImageUrl} lightFilter medium />
      <div className={classes.root}>
        <Grid container spacing={0} justify="space-between">
          <Grid item xs={12} className={classes.gridItem}>
            <Card>
              <Grid
                container
                alignItems="flex-start"
                spacing={0}
                justify="center"
                className={classes.gridContainer}
              >
                <Grid item xs={12} sm={12}>
                  <CardHeader
                    title={
                      <Typography align="left" variant="h3" paragraph>
                        {marketTitle.title.value}
                      </Typography>
                    }
                    subheader={<Divider />}
                  />

                  <CardContent> {loadContent(mainContent)}</CardContent>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <CardContent>
                    <GoogleMap
                      height={maps.height}
                      width={maps.width}
                      centerMap={maps.geo}
                      mapLng={maps.geo.lng}
                      mapLat={maps.geo.lat}
                      zoomLevel={maps.zoomLevel}
                    />
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

const LocationWithRouter = withRouter(Main);
export default withStyles(styles)(LocationWithRouter);
