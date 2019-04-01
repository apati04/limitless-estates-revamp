import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
    backgroundColor: 'rgba(0,0,0,.03)',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
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
    padding: theme.spacing.unit * 2
  }
}))(MuiExpansionPanelDetails);

class SectionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(panel) {
    return (event, expanded) => {
      this.setState({
        expanded: expanded ? panel : false
      });
    };
  }
  onPageLoad() {
    const { expanded } = this.state;
    const { itemList } = this.props;
    return itemList.map(({ title, body }, index) => {
      let panel = 'panel' + index;
      return (
        <Card
          key={panel}
          square
          expanded={expanded === panel}
          onChange={this.handleChange(panel)}
        >
          <CardContent>
            <Typography variant="h6">{title}</Typography>

            <Typography component="div">{body}</Typography>
          </CardContent>
        </Card>
      );
    });
  }
  render() {
    return <div>{this.onPageLoad()}</div>;
  }
}

SectionList.propTypes = {
  itemList: PropTypes.array.isRequired
};

export default SectionList;
