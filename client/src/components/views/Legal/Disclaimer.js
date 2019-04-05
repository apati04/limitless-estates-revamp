import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
const styles = theme => ({
  root: {
    ...theme.container,
    margin: '4rem',
    flexGrow: 1
  }
});

const Disclaimer = props => {
  const { classes } = props;

  return (
    <div className={classes.root + ' main-content'}>
      <Typography align="left" gutterBottom variant="h2" component="h1">
        Terms and Conditions
        <Divider />
      </Typography>

      <Typography align="left" paragraph variant="body1">
        None of the information provided should not be seen as tax or legal
        advice or services, please consult a licensed professional.
      </Typography>
      <div style={{ margin: '2rem 0' }} />
      <Typography align="left" gutterBottom variant="h6" component="h2">
        No Offer of Securities—Disclosure of Interests
        <Divider />
      </Typography>

      <Typography align="left" paragraph variant="body1" component="p">
        Under no circumstances should any material at this site be used or
        considered as an offer to sell or a solicitation of any offer to buy an
        interest in any investment. Any such offer or solicitation will be made
        only by means of the Confidential Private Offering Memorandum relating
        to the particular investment. Access to information about the
        investments are limited to investors who either qualify as accredited
        investors within the meaning of the Securities Act of 1933, as amended,
        or those investors who generally are sophisticated in financial matters,
        such that they are capable of evaluating the merits and risks of
        prospective investments.
      </Typography>
    </div>
  );
};

Disclaimer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Disclaimer);
