import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import teamStyle from 'assets/jss/material-kit-react/views/landingPageSections/teamStyle';

class PreferredPartners extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section}>
                <h2 style={{ color: 'black' }} className={classes.title}>
                    Prefered Partners
                </h2>
                <div style={{ paddingTop: '32px' }}>
                    <GridContainer justify="center">
                        <GridItem xs={6}>
                            <a href="https://mwpatton.com/" target="_blank">
                                <img
                                    src="https://i.imgur.com/JHpbqgd.png"
                                    alt="crowdfundingLawyers"
                                    width="220px"
                                    height="auto"
                                />
                            </a>
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
