import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import cardStyles from '../components/views/About/modules/landingPageSections/cardStyles';
import blue from '@material-ui/core/colors/blue';
import teamStyles from '../components/views/About/modules/landingPageSections/teamStyles';
const styles = theme => ({
	...teamStyles,
	...cardStyles,
	muiMainGrid: {
		marginRight: -15,
		marginLeft: -15,
		width: 'auto'
	},
	muiGridItem: {
		position: 'relative',
		width: '100%',
		minHeight: '1px',
		padding: '0 15px',
		flexBasis: 'auto'
	},
	muiCardBody: {
		padding: '0.9375rem 1.875rem 0 1.875rem',
		flex: '1 1 auto'
	},
	muiCardFooter: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: 'transparent',
		padding: '0.9375rem 1.875rem'
	},
	muiCardHeader: {
		marginBottom: 0
	},
	muiIcon: {
		margin: theme.spacing.unit,
		'&:hover': {
			// backgroundColor: 'rgba(0,0,0,0.1)',
			backgroundColor: 'rgba(68,138,255,0.08)',
			color: blue['A200']
		}
	}
});

const TeamCard = props => {
	const { classes } = props;
	const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);

	return (
		<Card className={classNames(classes.card, classes.cardPlain)}>
			<Grid item xs={12} sm={12} md={6} className={classes.itemGrid}>
				<img src={props.photo} alt="kyle-mitchell" className={imageClasses} />
			</Grid>
			<Typography variant="body1" gutterBottom className={classNames(classes.cardTitle, classes.muiCardHeader)}>
				{props.name}
			</Typography>
			<Typography variant="body1" className={classNames(classes.cardTitle)}>
				<small className={classes.smallTitle}>{props.title}</small>
			</Typography>
			<CardContent className={classes.muiCardBody}>
				<Typography className={classes.description} gutterBottom>
					{props.description}.. <Link to="/">Read full bio</Link>
				</Typography>
			</CardContent>
			<CardActions>
				<Grid container justify="center">
					<IconButton className={classes.muiIcon} aria-label="Linkedin">
						<i className="fab fa-linkedin-in" />
					</IconButton>
					<IconButton className={classes.muiIcon} aria-label="facebook">
						<i className=" fab fa-facebook" />
					</IconButton>

					<IconButton hover={classes.noHover} className={classes.muiIcon} aria-label="phone-square">
						<i className="fas fa-phone-square" />
					</IconButton>
				</Grid>
			</CardActions>
		</Card>
	);
};

TeamCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TeamCard);
