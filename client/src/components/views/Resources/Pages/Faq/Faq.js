import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PageHeader from '../../../Layouts/PageHeader';
import ListItemContainer from './ListItemContainer';
import Typography from '@material-ui/core/Typography';
import api from './apiFaq';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
const styles = {
  appContainer: {
    margin: '0 auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '15px',
    paddingRight: '15px',
    width: '100%'
  }
};
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
    if (this.state.data === null) {
      return <div>loading.</div>;
    }
    return this.state.data.map((item, index) => {
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
    const { theme } = this.props;
    console.log(theme);
    return (
      <div>
        <div
          style={{
            height: '20em',
            backgroundColor: 'rgba(0,0,0,0.5)',
            marginBottom: '4em'
          }}
        />

        <div style={styles.appContainer} className="main-content">
          <Card
            square
            style={{
              position: 'absolute',
              top: '18em',
              width: '50%',
              left: '12rem',
              backgroundColor: '#fbfbfb',
              padding: '1rem 0.5rem'
            }}
          >
            <CardContent>
              <Typography variant="h2" component="h1">
                Frequently Asked Questions
              </Typography>
            </CardContent>
          </Card>
          <Grid container spacing={32} justify="center" alignItems="center">
            <Grid item xs={12} sm={10}>
              <div style={{ margin: '2rem 0' }} />

              {this.loadList()}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Faq;
