import React, { Component } from 'react';
import classNames from 'classnames';
import ListItemContainer from './ListItemContainer';

import api from './apiFaq';

import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
import withStyles from '@material-ui/core/styles/withStyles';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';
const styles = theme => ({
  ...landingPageStyle,
  ...productStyle,
  faq: {
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      ...landingPageStyle.container,
      paddingTop: '4rem',
      paddingBottom: '4rem'
    }
  },
  appContainer: {
    margin: '0 auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '15px',
    paddingRight: '15px',
    width: '100%'
  }
});
class Faq extends Component {
  state = {
    data: null,
    expanded: 'panel0'
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };
  componentDidMount() {
    this.setState({
      data: api
    });
  }
  loadList = () => {
    return api.map((item, index) => {
      return (
        <ListItemContainer
          key={index}
          {...item}
          expanded={this.state.expanded}
          panelChange={this.handleChange}
          idx={index}
        />
      );
    });
  };
  render() {
    const { classes } = this.props;
    return <div className={classNames(classes.faq)}>{this.loadList()}</div>;
  }
}

export default withStyles(styles)(Faq);
