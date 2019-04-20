import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import withStyles from '@material-ui/core/styles/withStyles';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import DoneIcon from '@material-ui/icons/Done';
import InfoArea from 'components/InfoArea/InfoArea';
import Button from 'components/CustomButtons/Button';
const styles = theme => ({
  ...productStyle,
  imageStyle: {
    maxWidth: '100%',
    height: 'auto'
  }
});

const ListItemFields = [
  'Cash Flow',
  'Tax Benefits',
  'Leveraging Debt',
  'Business Backed by Hard Asset',
  'Tenants Pay Down the Debt',
  'Housing is a necessity',
  'National Housing Shortage of 3.9 million units'
];
class DetailSection extends Component {
  loadListItems = listArray => {
    return listArray.map((item, index) => (
      <React.Fragment key={item}>
        <ListItem>
          <ListItemText>{item}</ListItemText>
        </ListItem>
        <Divider />
      </React.Fragment>
    ));
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <img
              className={classes.imageStyle}
              src="https://i.imgur.com/vUNgWTJ.jpg"
              alt="mainBenefits"
              title="Reasons to invest"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <List>{this.loadListItems(ListItemFields)}</List>
            <div style={{ textAlign: 'left' }}>
              <Button
                color="transparent"
                style={{
                  border: '1px solid #01579b',
                  opacity: 0.8
                }}
                component={props => (
                  <Link {...props} to="/resources/why-invest-in-multifamily" />
                )}
              >
                <span style={{ color: '#01579b' }}>
                  Learn More About Investing in Multifamily
                </span>
              </Button>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
/**
 *       <Button
              color="danger"
              component={props => (
                <Link {...props} to="/resources/why-invest-in-multifamily" />
              )}
              simple
            >
              Learn More on Why to Invest in Multifamily
            </Button>
 */
DetailSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DetailSection);
