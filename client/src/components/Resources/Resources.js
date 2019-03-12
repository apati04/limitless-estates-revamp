import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import Faq from "./Pages/Faq/Faq";
import WhyInvest from "./Pages/WhyInvest";
import ImpactInvesting from "./Pages/ImpactInvesting";
import RisksOne from "./Pages/RisksOne";
class Resources extends Component {
  loadPage = e => {
    const { currRouteId, currLocation } = this.props;
    switch (currRouteId) {
      case "invest?page=1":
        return <div>yes this works</div>;
      default:
        return <div>no</div>;
    }
  };

  render() {
    return (
      <div>
        <div>{this.loadPage()}</div>
      </div>
    );
  }
}

export default withRouter(Resources);
