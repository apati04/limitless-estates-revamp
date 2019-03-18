import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import cards from '../api/self_direct';
const styles = theme => ({
	root: {
		flexGrow: 1
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
			width: 1100,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	cardGrid: {
		padding: `${theme.spacing.unit * 8}px 0`
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	cardMedia: {
		height: 200,
		margin: '16px',
		backgroundSize: 'contain'
	},
	cardContent: {
		flexGrow: 1
	}
});
const SelfDirectIra = props => {
	const { classes } = props;
	return (
		<div className={classNames(classes.layout, classes.cardGrid)}>
			<Grid container spacing={40}>
				{cards.map((card, i) => (
					<Grid item key={i} sm={6}>
						<Card className={classes.card}>
							<CardMedia
								className={classes.cardMedia}
								image={card.logo} // eslint-disable-line max-len
								title="Image title"
							/>

							<CardContent className={classes.cardContent}>
								<Typography gutterBottom variant="h5" component="h2">
									{card.company}
								</Typography>
								<Typography>Name: {card.name}</Typography>
								<Typography>Email: {card.email}</Typography>
								<Typography>Phone: {card.phone}</Typography>
								<div style={{ display: 'flex' }}>
									<label>Address</label>
									<ul style={{ margin: 0, listStyle: 'none', display: 'inline' }}>
										{card.address.map((item, i) => <li key={i}>{item}</li>)}
									</ul>
								</div>
							</CardContent>
							<CardActions>
								<Button size="small" color="primary">
									View
								</Button>
								<Button component="a" href={card.website} size="small" color="primary">
									Website
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

SelfDirectIra.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SelfDirectIra);
