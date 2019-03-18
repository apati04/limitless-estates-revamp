import React, { Component } from 'react';
import { Switch, Route, Prompt, Redirect, matchPath } from 'react-router-dom';
import { Formik, Form } from 'formik';
import BasicPage from './FormPage/BasicInformation';
import InfoPage from './FormPage/Info';
import SubmitPage from './FormPage/Review';
import withStyles from '@material-ui/core/styles/withStyles';
const styles = theme => ({
	root: {
		flexGrow: 1
	}
});
class WizardForm extends Component {
	state = { submitted: false };
	handleSubmit = formValues => {
		console.log('form values', formValues);
		this.setState(
			{
				submitted: true
			},
			() => this.props.history.push('/')
		);
	};
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Prompt
					when={!this.state.submitted}
					message={({ pathname }) => {
						return matchPath(pathname, { path: '/investor-form' })
							? true
							: 'Are you sure you want to navigate away?';
					}}
				/>
				<Formik
					initialValues={{
						email: '',
						firstName: '',
						lastName: '',
						phone: '',
						message: '',
						tos: false
					}}
					onSubmit={this.handleSubmit}
				>
					<Form>
						<Switch>
							<Redirect from="/investor/form/" exact to="/investor/form/basic" />
							<Route path="/investor/form/basic" component={BasicPage} />
							<Route path="/investor/form/info" component={InfoPage} />
							<Route path="/investor/form/submit" component={SubmitPage} />
						</Switch>
					</Form>
				</Formik>
			</div>
		);
	}
}

export default withStyles(styles)(WizardForm);
