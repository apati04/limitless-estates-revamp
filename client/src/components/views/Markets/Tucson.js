import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import GoogleMap from '../../GoogleMap/GoogleMap';
import PageHeader from '../Layouts/PageHeader';
import Divider from '@material-ui/core/Divider';
const styles = theme => ({
  root: {
    flexGrow: 1,
    ...theme.container,
  },
  mapStyle: {
    height: `${theme.spacing.unit * 42}px`,
    width: '100%',
  },
  cardStyle: {
    padding: theme.spacing.unit * 4,
    [theme.breakpoints.up ('sm')]: {
      boxShadow: 'none',
    },
  },
  mapContainer: {
    marginTop: theme.spacing.unit * 11,
  },
  dividerStyle: {
    paddingLeft: '8px',
  },
});
function Tucson (props) {
  const {classes} = props;
  const [lat, lng] = [32.2151078, -110.9765115];
  return (
    <React.Fragment>
      <PageHeader
        imgSrc="https://i.imgur.com/w5aqhrW.jpg"
        imgHeight="480px"
        position="center"
        overlayEffect
      />
      <div className={classes.root}>
        <Grid
          container
          spacing={16}
          alignItems="flex-start"
          justify="space-between"
        >
          <Grid item xs={12} sm={8}>
            <Card className={classes.cardStyle}>
              <CardHeader title="Tucson, Arizona" />
              <Divider variant="middle" />
              <CardContent>
                <Typography paragraph variant="body1">
                  Tucson is a city in Pima County, Arizona and is the 33rd largest city in the United
                  States. Tucson has an estimated population of 526,000 and is the second-most populous
                  city in Arizona after Phoenix. The city is located 108 miles southeast of Phoenix and 60
                  miles north of the U.S.–Mexico border. Tucson Metro Area's population is 1,010,030
                  people. Since 2000, it has had a population growth of 51.46%.
                </Typography>
                <Typography paragraph variant="body1">
                  Tucson is home to the Tucson Tech Corridor (TTC) and also several big technology
                  companies that employ thousands of Tucson residents such as Raytheon and IBM. Tucson
                  ranks 41 out of 200 on Milken’s Best Performing Cities in High Tech GDP Growth. In
                  addition, much of the city's economy is centered on the University of Arizona, which is
                  the city's largest employer, as well as tourism, with over 3.5 million people visiting
                  the city each year. Not only does the university provide undergraduate and graduate
                  students as a source of potential renters, but also faculty and staff. The University of
                  Arizona area can be a goldmine for investors because rental demand insures low vacancy
                  and higher rent than in other areas.
                </Typography>
                <Typography paragraph variant="body1">
                  Realtor.com recently named the city the top market in the country for investors on the
                  basis of homes' affordability and the city's relatively low unemployment rate of 7.8
                  percent. The national average is 8.2 percent. Forbes magazine also reported the
                  findings. Local real estate experts agree that Tucson is a bustling market for investors
                  and that the market is heating up. Arizona’s relatively low cost of living combined with
                  its warm, sunny climate make it appealing to many people, particularly retirees. The job
                  market in Tucson is growing and the population in the city continues to increase. These
                  are two big positives for people looking to invest in rental property in the Tucson
                  area. Experts predict that Tucson property values will continue to rise in the future.
                  This could mean a big return for investors that buy now while home prices and interest
                  rates are still low.
                </Typography>
                <Typography paragraph component="ul" variant="body1">
                  <li>
                    Home to the University of Arizona - #1 Ranked University for Physical Sciences
                    Research
                  </li>
                  <li>
                    Tucson International Airport contributes $3.2 Billion annually to the AZ economy
                  </li>
                  <li>
                    Major employers include UA, Raytheon, Davis-Monthan Air Force Base, Banner
                  </li>
                  <li>
                    University, Pima County and the U.S. Army Intelligence Center
                  </li>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.mapContainer}>
              <div className={classes.mapStyle}>
                <GoogleMap
                  centerMap={{lat, lng}}
                  mapLng={lng}
                  mapLat={lat}
                  zoomLevel={13}
                />
              </div>
              <CardContent>asdfasdfasdf</CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
/**
 *
 */
export default withStyles (styles) (Tucson);
