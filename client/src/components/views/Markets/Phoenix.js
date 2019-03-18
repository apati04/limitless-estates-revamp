import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import GoogleMap from '../../GoogleMap/GoogleMap';

import Divider from '@material-ui/core/Divider';
const styles = theme => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing.unit * 4
	},
	mapStyle: {
		height: `300px`,
		width: '100%'
	},
	cardStyle: {
		padding: theme.spacing.unit * 4
	},
	dividerStyle: {
		paddingLeft: '8px'
	}
});
function Phoenix(props) {
	const { classes } = props;
	const [lat, lng] = [33.4476487, -112.0743701];
	return (
		<div className={classes.root}>
			<Grid container spacing={16} alignItems="start" justify="center">
				<Grid item sm={7}>
					<Card className={classes.cardStyle}>
						<CardHeader title="Phoenix, Arizona" />
						<Divider variant="middle" />
						<CardContent>
							<Typography paragraph component="p" variant="body1">
								Phoenix is located in the heart of the fastest growing and most dynamic metro area in
								the country. As of the Census Bureau's 2017 population estimates, metro Phoenix had
								4,737,270 residents, making it the 12th largest metro area in the nation by population.
								It is also one of the fastest growing major metro areas, gaining nearly 400,000
								residents from 2010 to 2015, and more than 1.3 million since 2000. The population of the
								Phoenix metro area increased by 45.3% from 1990 through 2000, compared to the average
								United States rate of 13.2%.
							</Typography>
							<Typography paragraph component="p" variant="body1">
								The Phoenix metro area has historically been the center of the state's economy. As with
								the state of Arizona, the area relied on the 5 C's (copper, cattle, climate, citrus, and
								cotton) for its economic growth and expansion. A thriving job market is the driving
								force behind the city’s renaissance, with high-income positions being created in the
								metro area. From July 2016 to July 2017, 52,000 jobs were added in the Phoenix metro
								area, with 11,900 of them in the medical and education fields.[1] Money Magazine named
								Phoenix No. 3 among the country’s hottest cities for tech jobs in 2017, and Intel has
								announced that it intends to invest $7 billion in suburban Chandler, creating 3,000 new
								jobs where it already employs 11,300 people.[2] Other major employers planning to add
								jobs in Phoenix include JPMorgan Chase, which is adding 4,000 jobs, State Farm, UPS,
								ADP, and Santander Consumer USA.
							</Typography>
							<Typography paragraph component="p" variant="body1">
								Rental demand is being aided by strong population growth in the Phoenix metro area.
								Besides professional families, retirees continue to move to Phoenix in considerable
								numbers, and that demographic is expected to grow significantly. A study by the National
								Multifamily Housing Council and National Apartment Association found that the area will
								need 150,302 new apartments by 2030. That is a 38% increase over the current number. In
								early 2013, Forbes ranked the Phoenix metro area as the 8th fastest growing major city
								in the United States, after Austin, Houston, Dallas, Raleigh, Salt Lake City, Seattle
								and Provo. By 2020, it's forecasted that Phoenix will become the 4th most populous city
								in the US, and by 2030, the US Census Bureau estimates its population will reach 2.2
								million with a metro area that's home to 6.3 million.
							</Typography>
							<Typography paragraph component="ul" variant="body1">
								<li>Population, job and rental rate growth all outpacing national average</li>
								<li>
									Ranked 5th in U.S. for high-tech job growth and Top 10 fastest growing economies
								</li>
								<li>3rd largest labor pool in the West</li>
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item sm={3}>
					<Card>
						<div className={classes.mapStyle}>
							<GoogleMap centerMap={{ lat, lng }} mapLng={lng} mapLat={lat} zoomLevel={13} />
						</div>
						<CardContent>asdfasdfasdf</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}
/**
 *
 */
export default withStyles(styles)(Phoenix);
