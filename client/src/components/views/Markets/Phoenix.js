import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import GoogleMap from '../../GoogleMap/GoogleMap';
import Divider from '@material-ui/core/Divider';
import Parallax from '../Layouts/Parallax';
import api from './api/phoenix_api';
import loadContent from './loadContent';
const styles = theme => ({
  root: {
    flexGrow: 1,
    ...theme.container,
  },
  cardStyle: {borderRadius: '6px'},
  mapContainer: {
    marginTop: theme.spacing.unit * 11,
  },
  dividerStyle: {
    paddingLeft: '8px',
  },
  gridContainer: {
    padding: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 6}px`,
  },
  gridItem: {
    marginTop: -96,
    marginBottom: 40,
    zIndex: 10,
  },
});

function Phoenix (props) {
  const {classes} = props;
  const [lat, lng] = [33.4476487, -112.0743701];
  const bgImg = '/images/phoenix-sky.jpg';
  const [marketTitle, ...marketContent] = api;
  return (
    <section>

      <Parallax image={bgImg} lightFilter small />
      <div className={classes.root}>
        <Grid container justify="space-between">
          <Grid item xs={12} className={classes.gridItem}>
            <Card>
              <Grid
                container
                alignItems="flex-start"
                justify="space-between"
                spacing={0}
                className={classes.gridContainer}
              >
                <Grid item xs={12} sm={8}>
                  <CardHeader
                    className={classes.cardHeaderStyle}
                    title={<Typography variant="h3">{marketTitle}</Typography>}
                  />
                  <Divider variant="middle" />
                  <CardContent>
                    {loadContent (marketContent)}
                  </CardContent>

                </Grid>
                <Grid item xs={12} sm={4}>

                  <div className={classes.mapStyle}>
                    <GoogleMap
                      centerMap={{lat, lng}}
                      mapLng={lng}
                      mapLat={lat}
                      zoomLevel={13}
                    />
                  </div>
                  <CardContent>asdfasdfasdf</CardContent>

                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>

    </section>
  );
}
/**
 *
 */
export default withStyles (styles) (Phoenix);
