import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
	root: {
		flexGrow: 1
	}
});

const MeetTheTeam = props => {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<Grid container justify="space-between">
				<Grid item>
					<Typography>asdf</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

MeetTheTeam.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MeetTheTeam);
