import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import cardStyles from '../modules/landingPageSections/cardStyles';
import blue from '@material-ui/core/colors/blue';
// custom styles
import TeamCard from '../../../../modules/TeamCard';
import teamStyle from '../modules/landingPageSections/teamStyles';
import team from '../api/team';
const styles = theme => ({
	...teamStyle,
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
		padding: '0.9375rem 1.875rem',
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
const MeetTheTeam = props => {
	const { classes } = props;
	return (
		<section className={classes.section}>
			<h2 className={classes.title}>Here is our team</h2>
			<Grid container justify="center" className={classes.muiMainGrid}>
				{team.map((item, index) => (
					<Grid key={index} item xs={12} sm={12} md={4} className={classes.muiGridItem}>
						<TeamCard
							photo={item.avatar}
							name={item.name}
							title={item.title}
							description={item.description}
						/>
					</Grid>
				))}

				{/* <Grid item xs={12} sm={12} md={4} className={classes.muiGridItem}>
					<Card className={classNames(classes.card, classes.cardPlain)}>
						<Grid item xs={12} sm={12} md={6} className={classes.itemGrid}>
							<img src={kyle} alt="kyle-mitchell" className={imageClasses} />
						</Grid>
						<Typography variant="body1" className={classNames(classes.cardTitle, classes.muiCardHeader)}>
							Kyle Mitchell
							<br />
							<small className={classes.smallTitle}>Managing Partner</small>
						</Typography>
						<CardContent className={classes.muiCardBody}>
							<Typography className={classes.description}>
								You can write here details about one of your team members. You can give more details
								about what they do. Feel free to add some <a href="#pablo">links</a> for people to be
								able to follow them outside the site.
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

								<IconButton
									hover={classes.noHover}
									className={classes.muiIcon}
									aria-label="phone-square"
								>
									<i className="fas fa-phone-square" />
								</IconButton>
							</Grid>
						</CardActions>
					</Card>
				</Grid> */}
			</Grid>
		</section>
	);
};

MeetTheTeam.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MeetTheTeam);
