import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Checkbox } from 'formik-material-ui';
import { Field } from 'formik';
import Button from '@material-ui/core/Button';
const styles = theme => ({
	root: {
		flexGrow: 1
	}
});

const Review = props => {
	const { classes } = props;
	console.log('props: ', props);
	return (
		<div className={classes.root}>
			<Field component={Checkbox} name="tos" />
			I agree to the Tos
			<Button variant="contained">Submit</Button>
		</div>
	);
};

Review.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Review);
