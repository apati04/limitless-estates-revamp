import React, { Component } from 'react';

class Wiz extends Component {
  state = { pageIndex: 0 };
  _back = () => {
    this.setState(prevState => ({
      pageIndex: prevState.pageIndex - 1 < 0 ? prevState.pageIndex : 0
    }));
  };
  _next = () => {
    this.setState(prevState => ({ pageIndex: prevState.pageIndex + 1 }));
  };
  _renderPage = formProps => {
    const { pageIndex } = this.state;
    const Page = this.props.pages[pageIndex];
    return (
      <Page
        {...formProps}
        navigateBack={this._back}
        navigateNext={this._next}
      />
    );
  };
  render() {
    const renderProps = {
      pageIndex: this.state.pageIndex,
      renderPage: this._renderPage,
      navigateBack: this._back,
      navigateNext: this._next
    };

    return this.props.children(renderProps);
  }
}

export default Wiz;
