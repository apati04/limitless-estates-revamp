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
		height: `${theme.spacing.unit * 42}px`,
		width: '100%'
	},
	cardStyle: {
		padding: theme.spacing.unit * 4
	},
	dividerStyle: {
		paddingLeft: '8px'
	}
});
function Columbus(props) {
	const { classes } = props;
	const [lat, lng] = [39.9512919, -82.9901501];
	return (
		<div className={classes.root}>
			<Grid container spacing={16} alignItems="start" justify="center">
				<Grid item sm={7}>
					<Card className={classes.cardStyle}>
						<CardHeader title="Columbus, Ohio" />
						<Divider variant="middle" />
						<CardContent>
							<Typography gutterBottom component="p" variant="body1">
								With a population of 860,090, Columbus is the state capital and the 14th most populous
								city in the United States. Columbus is home to the Battelle Memorial Institute, the
								world’s largest private research and developments foundation; NetJets, the world’s
								largest fractional ownership jet aircraft fleet; and The Ohio State University, one of
								the largest and most competitive intercollegiate programs in the United States. With
								Ohio State University being one of the nation’s best public university and acquiring
								nearly 46,000 undergraduates alone, this creates a natural demand for student housing
								and rental inventory.
							</Typography>
							<Typography gutterBottom component="p" variant="body1">
								Columbus’ population grew 1.1 percent in the year ending 2017 in comparison to 0.7
								percent nationally. In relation, jobs grew 2.3 percent in the year ending 2017 in
								comparison to 1.5 percent nationally. According to a recent study from independent CRE
								market research firm, Integra Realty Resources (IRR), Columbus is still in the
								“expansion” phase in the multifamily market cycle with a steady, selling cap rate of
								7.5% for at least the next few years.
							</Typography>
							<Typography gutterBottom component="p" variant="body1">
								Investor interest has pushed prices for apartments to record highs just in the past 5
								years, raising the average purchase price of $29,373 in 2011 to $53,422 in 2016.
								However, according to the commercial real-estate firm Marcus & Millichap, the average
								price for a Columbus apartment is still one of the lowest in the nation. Marcus &
								Millichap predicts that in 2018, Columbus apartment investors will seek returns close to
								double the national average. Investors say they are drawn to Columbus due to its stable
								economy, growing population, rent growth, and abundance of young tenants. Columbus is
								still reported as expanding, and here’s why:
							</Typography>
							<Typography gutterBottom component="ul" variant="body1">
								<li>14th most populous city in the U.S.</li>
								<li>Future job growth over the next 10 years predicted to be 39.5%</li>
								<li>Home of 14 Fortune 1000 headquarters and 5 fortune 500 headquarters</li>
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
export default withStyles(styles)(Columbus);
