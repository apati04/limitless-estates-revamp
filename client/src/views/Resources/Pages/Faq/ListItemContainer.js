import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
const styles = theme => ({
  root: { width: '100%', marginBottom: '0.25em' },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightReguar
  },
  ...productStyle,
  panel: {
    [theme.breakpoints.up('sm')]: {
      boxShadow: 'none'
    }
  }
});
const ExpansionPanel = withStyles({
  root: {
    borderTop: '1px solid rgba(0,0,0,.125)',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    }
  },
  expanded: {
    margin: 'auto'
  }
})(MuiExpansionPanel);
const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgb(252,252,252)',
    borderBottom: '1px solid rgba(0,0,0,.125)',

    marginBottom: -1,
    minHeight: 64,
    paddingTop: '0.250em',
    paddingBottom: '0.250em',
    '&$expanded': {
      minHeight: 64
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {}
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';
const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 3
  }
}))(MuiExpansionPanelDetails);
class ListItemContainer extends React.Component {
  render() {
    const {
      title,
      description,
      idx,
      panelChange,
      expanded,
      classes
    } = this.props;
    const panelNumber = 'panel' + idx;
    return (
      <ExpansionPanel
        expanded={expanded === panelNumber}
        onChange={panelChange(panelNumber)}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <h4
            style={{ marginTop: '8px', marginBottom: 0 }}
            className={classes.title}
          >
            {title}
          </h4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <p style={{ textAlign: 'left' }} className={classes.description}>
            {description}
          </p>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(ListItemContainer);
