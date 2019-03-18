import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Faq from './Pages/Faq/Faq';
import WhyInvest from './Pages/WhyInvest';
import ImpactInvesting from './Pages/ImpactInvesting';
import RisksOne from './Pages/RisksOne';
import SelfDirect from './Pages/SelfDirect';
class Resources extends Component {
	loadPage = e => {
		const { currRouteId, currLocation } = this.props;
		console.log('routeId: ', currRouteId);
		console.log('location object: ', currLocation);
		switch (currRouteId) {
			case 'why-invest-in-multifamily':
				return <WhyInvest />;
			case 'impact-investing':
				return <ImpactInvesting />;
			case 'investing-risks':
				const pageNum = queryString.parse(currLocation.search);
				console.log(pageNum);
				return <div>{pageNum.page === '1' && <RisksOne />}</div>;
			case 'self-direct-401k-ira':
				return <SelfDirect />;
			case 'frequently-asked-questions':
				return <Faq />;
			default:
				return <div>no</div>;
		}
	};

	render() {
		return <div>{this.loadPage()}</div>;
	}
}

export default withRouter(Resources);
