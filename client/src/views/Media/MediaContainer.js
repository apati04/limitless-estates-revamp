import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import HeaderLinks from 'components/Header/HeaderLinks';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
import Media from './Media';
const dashboardRoutes = [];
const styles = theme => ({
    ...landingPageStyle,
    ...productStyle
});
class MediaContainer extends Component {
    render() {
        const { classes, ...rest } = this.props;

        return (
            <div>
                <Header
                    color="primary"
                    routes={dashboardRoutes}
                    brand="true"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: 'white'
                    }}
                    {...rest}
                />
                <div className={classes.section} style={{ paddingBottom: 0 }}>
                    <div
                        className={classes.container}
                        style={{
                            marginBottom: '5rem',
                            padding: 0
                        }}
                    >
                        <div style={{ marginTop: '56px' }}>
                            <Media />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withStyles(styles)(MediaContainer);
