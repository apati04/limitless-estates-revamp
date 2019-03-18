import React from 'react';
import { Link } from 'react-router-dom';
import { TextField } from 'formik-material-ui';
import { Field } from 'formik';
import Button from '@material-ui/core/Button';
const NavNext = props => <Link {...props} to="/investor/form/info" />;
const BasicInformation = props => {
	return (
		<div>
			<h1>asdasdf</h1>
			<div>
				<Field type="text" name="firstName" placeholder="First Name" component={TextField} />
			</div>
			<Button component={NavNext} variant="contained" color="primary">
				Next
			</Button>
		</div>
	);
};

export default BasicInformation;
