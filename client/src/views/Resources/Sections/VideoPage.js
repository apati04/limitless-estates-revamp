import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import { NavLink, Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';
// @material-ui/icons

import Button from 'components/CustomButtons/Button';
import Typography from '@material-ui/core/Typography';
// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Icon from '@material-ui/core/Icon';
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
class MultiPagePost extends React.Component {
  loadPageDescription = () => {
    const { classes, pageDetail, pageNumber } = this.props;
    return pageDetail.pages[pageNumber].body.map(
      ({ title, description }, index) => (
        <div key={index}>
          <h3 className={classes.title}>{title}</h3>
          <h5 className={classes.description}>{description}</h5>
        </div>
      )
    );
  };
  render() {
    const { classes, pageDetail, pageNumber } = this.props;

    const currentPage = +pageNumber;
    const totalPages = pageDetail.totalPages;
    return (
      <div className={classes.section}>
        {/* <GridContainer justify="center">
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
        </GridContainer> */}
        {this.props.children}
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2
              style={{ marginBottom: 0 }}
              className={classNames(classes.title)}
            >
              {pageDetail.title}
            </h2>
            <h4
              style={{ fontFamily: 'Roboto Slab' }}
              className={classNames(classes.description)}
            >
              <strong>Part {pageNumber}</strong>
            </h4>
            {this.loadPageDescription()}
          </GridItem>
        </GridContainer>
        <div style={{ margin: '1rem 0' }} />
        <GridContainer justify="center" alignItems="center">
          <GridItem xs={12} sm={12} md={8}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                {currentPage > 1 ? (
                  <Button
                    simple
                    component={props => (
                      <Link to="/resources/investing-risks?page=1" {...props} />
                    )}
                    color="primary"
                  >
                    <Icon>chevron_left</Icon>
                    Prev
                  </Button>
                ) : (
                  <Button
                    style={{ visibility: 'hidden' }}
                    simple
                    color="primary"
                  >
                    Next Page
                    <Icon>chevron_right</Icon>
                  </Button>
                )}
              </div>
              <div style={{ textAlign: 'center' }}>
                <small
                  style={{ marginBottom: '6px' }}
                  className={classes.description}
                >
                  {pageNumber} of {pageDetail.totalPages}
                </small>
              </div>
              <div style={{ textAlign: 'center' }}>
                {currentPage < totalPages ? (
                  <Button
                    simple
                    component={props => (
                      <Link to="/resources/investing-risks?page=2" {...props} />
                    )}
                    color="primary"
                  >
                    Next Page
                    <Icon>chevron_right</Icon>
                  </Button>
                ) : (
                  <Button
                    style={{ visibility: 'hidden' }}
                    simple
                    color="primary"
                  >
                    Next Page
                    <Icon>chevron_right</Icon>
                  </Button>
                )}
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(MultiPagePost));
