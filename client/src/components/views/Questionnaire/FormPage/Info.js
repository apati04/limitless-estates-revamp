import React from 'react';
import { Link } from 'react-router-dom';
import { TextField } from 'formik-material-ui';
import { Field } from 'formik';
import Button from '@material-ui/core/Button';
const NavNext = props => <Link {...props} to="/investor/form/submit" />;
const InfoPage = props => {
	return (
		<div>
			<div>
				<Field type="text" name="message" placeholder="Message" component={TextField} />
			</div>
			<Button component={NavNext} variant="contained" color="secondary">
				Submit
			</Button>
		</div>
	);
};

export default InfoPage;
