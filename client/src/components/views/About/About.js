import React from 'react';
// import classNames from 'classnames';

import Lalita from './Profile/Lalita';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import MeetTheTeam from './MeetTheTeam/MeetTheTeam';
// import landingPageStyles from './modules/landingPage';
const styles = theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing.unit * 2,
		color: theme.palette.text.secondary
	}
});

function About(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<Switch>
				<Redirect from="/about" exact to="/about/meet-the-team" />
				<Route path="/about/what-we-do" component={WhatWeDo} />

				<Route path="/profile/lalita" component={Lalita} />
				<Route path="/about/meet-the-team" component={MeetTheTeam} />
			</Switch>
		</div>
	);
}
export default withStyles(styles)(About);
