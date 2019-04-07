import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const styles = theme => ({
  root: { width: '100%', marginBottom: '0.25em' },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightReguar
  },
  panel: {
    [theme.breakpoints.up('sm')]: {
      boxShadow: 'none'
    }
  }
});
const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0,0,0,.125)',
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
    backgroundColor: '#fbfbfb',
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
    const { classes, title, body, idx, panelChange, expanded } = this.props;
    const panelNumber = 'panel' + idx;
    return (
      <ExpansionPanel
        expanded={expanded === panelNumber}
        onChange={panelChange(panelNumber)}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            align="left"
            variant="body1"
            style={{ fontSize: '1.125rem' }}
          >
            {title}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography align="left" variant="body1">
            {body}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(ListItemContainer);
