import React, { Component } from 'react';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
class Wiz extends Component {
  state = { activeStep: 0 };
  _back = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1 < 0 ? prevState.activeStep : 0
    }));
  };
  _next = () => {
    this.setState(prevState => ({ activeStep: prevState.activeStep + 1 }));
  };
  _renderPage = formProps => {
    console.log('whiz', this.state.activeStep);
    const { activeStep } = this.state;
    const Page = this.props.pages[activeStep];
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
      activeStep: this.state.activeStep,
      renderPage: this._renderPage,
      navigateBack: this._back,
      navigateNext: this._next
    };

    return (
      <React.Fragment>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {this.props.children(renderProps)}
      </React.Fragment>
    );
  }
}

export default Wiz;
