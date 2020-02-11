import React from 'react';
import ReactGA from 'react-ga';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import teamStyle from 'assets/jss/material-kit-react/views/landingPageSections/teamStyle';
import GoogleAnalytics from 'react-ga';

class PreferredPartners extends React.Component {
    componentDidMount() {
        GoogleAnalytics.initialize('UA-158031317-1');
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section}>
                <h2 style={{ color: 'black' }} className={classes.title}>
                    Preferred Partners
                </h2>
                <div style={{ paddingTop: '32px' }}>
                    <GridContainer justify="center">
                        <GridItem xs={6}>
                            <GoogleAnalytics.OutboundLink
                                eventLabel="mwpatton"
                                to="https://mwpatton.com/"
                                target="_blank"
                            >
                                <img
                                    src="https://i.imgur.com/JHpbqgd.png"
                                    alt="crowdfundingLawyers"
                                    width="220px"
                                    height="auto"
                                />
                            </GoogleAnalytics.OutboundLink>

                            {/* <a href="https://mwpatton.com/" target="_blank">

                            </a> */}
                        </GridItem>
                        <GridItem xs={6}>
                            <a
                                href="https://www.crowdfundinglawyers.net/"
                                target="_blank"
                            >
                                <img
                                    src="https://i.imgur.com/KhQ1tF9.png"
                                    alt="crowdfundingLawyers"
                                    width="180px"
                                    height="auto"
                                />
                            </a>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        );
    }
}

export default withStyles(teamStyle)(PreferredPartners);
