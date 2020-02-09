import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Questionnaire from './Questionnaire';
import classNames from 'classnames';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';

const styles = theme => ({
    ...productStyle,
    root: {
        flexGrow: 1,
    },
    appContainer: {
        ...theme.container,
        margin: `${theme.spacing.unit * 4}px ${theme.spacing.unit}px`,
        [theme.breakpoints.down('sm')]: {
            padding: 0,
        },
    },
});

const index = props => {
    const { classes } = props;

    return (
        <div className={classes.section}>
            <div className={classNames(classes.main)} id="start">
                <Questionnaire />
            </div>
        </div>
    );
};

index.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(index);
