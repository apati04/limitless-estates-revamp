import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import whyapi from "./api_resource";


class Resources extends Component {
  state = {
    whyInvest: null,
    impactInvesting: null,

  }
  testLoader = () => {
    const { currentRoute } = this.props;
    let routeMatches = {
      'why-invest-in-multifamily': 'whyInvest',
      'impact-investing': 'impactInvesting',
      'self-direct-401k-ira': 'selfDirect',
      'investing-risks/1': "risksOne",
      'investing-risks/2': "risksTwo",
      "frequently-asked-questions": "faq"
    }
    let data = whyapi.text;
    let len = data.length;
    return data.map((item, i) => {
      if(i === len-1 || i === len-2){
        return <p key={i} style={{display: 'inline'}}>{item}</p>
      }
      return <p key={i}>{item}</p>;
    });
  };
  loadHeader = () => {
    const { currentRoute } = this.props;
    switch (currentRoute) {
      case "why-invest-in-multifamily":
        return <h1>why invest header</h1>;
      case "impact-investing":
        return <h1>impact invest</h1>;
      case "self-direct-401k-ira":
        return <h1>ref-direct 201k</h1>;
      case "investing-risks/1":
        return <h1>investing resks/1</h1>;
      case "frequently-asked-questions":
        return <h1>faq</h1>;
      default:
        return <h1>none</h1>;
    }
  };
  loadPage = () => {
    const { currentRoute } = this.props;
    switch (currentRoute) {
      case "why-invest-in-multifamily":
        return <h1>why invest</h1>;
      case "impact-investing":
        return <h1>impact invest</h1>;
      case "self-direct-401k-ira":
        return <h1>ref-direct 201k</h1>;
      case "investing-risks/1":
        return <h1>investing resks/1</h1>;
      case "frequently-asked-questions":
        return <h1>faq</h1>;
      default:
        return <h1>none</h1>;
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>RESOURCES</h2>
        <div>{this.loadPage()}</div>
        <div>{this.testLoader()}</div>
      </div>
    );
  }
}

export default withRouter(Resources);
