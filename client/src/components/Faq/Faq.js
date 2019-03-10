import React, { Component } from 'react';
import ListItem from './ListItem';
import api from './apiFaq';
class Faq extends Component {
  state = {
    data: null
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
      return <ListItem key={index} {...item} />;
    });
  };
  render() {
    return <div style={{ paddingBottom: '80px' }}>{this.loadList()}</div>;
  }
}

export default Faq;
