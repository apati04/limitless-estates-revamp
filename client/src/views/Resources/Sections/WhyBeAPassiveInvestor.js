import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
// @material-ui/icons

import Typography from '@material-ui/core/Typography';
// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
const styles = theme => ({
  ...productStyle,
  title: {
    ...productStyle.title,
    textAlign: 'left'
  },
  description: {
    ...productStyle.description,
    textAlign: 'left'
  },
  icon: {
    marginRight: theme.spacing.unit / 2,
    width: 20,
    height: 20,
    verticalAlign: 'sub'
  },
  navLink: {
    '-webkit-text-decoration-line': 'none',
    textDecorationLine: 'none',
    color: 'rgba(0,0,0, 0.87)',
    fontWeight: 400
  }
});
class ResourcePost extends React.Component {
  loadPageDescription = () => {
    const { classes, pageDetail } = this.props;
    return pageDetail.pages.map((item, index) => (
      <h5 key={index} className={classes.description}>
        {item}
      </h5>
    ));
  };
  render() {
    const { classes, pageDetail } = this.props;

    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="Breadcrumb"
            >
              <NavLink className={classes.navLink} to="/resources">
                <Typography style={{ color: '#337ab7' }} variant="body2">
                  All Resources
                </Typography>
              </NavLink>
              <Typography color="textPrimary" variant="body2">
                {pageDetail.title}
              </Typography>
            </Breadcrumbs>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classNames(classes.title)}>{pageDetail.title}</h2>
            {this.loadPageDescription()}
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(ResourcePost);
