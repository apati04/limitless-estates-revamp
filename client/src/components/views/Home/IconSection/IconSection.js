import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconTemplate from './iconTemplate';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
const styles = theme => ({
	root: {
		background: grey[50],
		padding: '40px',
		[theme.breakpoints.down('xs')]: {
			padding: '20px'
		}
	},
	appContainer: theme.container
});
const Section02 = props => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<Grid container justify="space-between" className={classes.appContainer}>
				<Grid item>
					<IconTemplate icon="fas fa-child" title="Impacting Lives" iconSize={3 + 'rem'} />
				</Grid>
				<Grid item>
					<IconTemplate icon="fas fa-users" title="Community Development" iconSize={3 + 'rem'} />
				</Grid>
				<Grid item>
					<IconTemplate icon="fab fa-medapps" title="Inspire Others" iconSize={3 + 'rem'} />
				</Grid>
				<Grid item>
					<IconTemplate icon="fas fa-trophy" title="Create Win Win Win Scenarios" iconSize={3 + 'rem'} />
				</Grid>
			</Grid>
		</div>
	);
};

export default withStyles(styles)(Section02);
