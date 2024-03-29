import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
// core components
import Header from 'components/Header/Header.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import Footer from 'components/Footer/Footer.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Card from 'components/Card/Card.jsx';

import loginPageStyle from 'assets/jss/material-kit-react/views/loginPage.jsx';
import ContactForm from './ContactForm';

const image =
  'https://s3-us-west-1.amazonaws.com/rem-bucket-9818/limitless-revamp/images/house-872066_1920-min.jpg';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: 'cardHidden'
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.setState({ cardAnimaton: '' });
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="true"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: 'url(' + image + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            paddingBottom: '4rem'
          }}
        >
          <div className={classes.section}>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={5}>
                  <Card className={classes[this.state.cardAnimaton]}>
                    <ContactForm />
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
            <div style={{ paddingTop: '4rem' }}>
              <Footer whiteFont />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(Contact);
