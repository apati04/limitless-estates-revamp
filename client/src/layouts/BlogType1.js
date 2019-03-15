import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  cardBody: {
    minHeight: 'calc(100vh - 464px)',
    padding: '1.25em',
    [theme.breakpoints.up('md')]: {
      padding: '4rem'
    }
  },
  content: {
    marginBottom: theme.spacing.unit * 3
  },
  cardStyle: {
    marginBottom: theme.spacing.unit / 2,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      margin: 0,
      padding: 0,
      boxShadow: 'unset',
      borderRadius: 0
    }
  }
});

const BlogContentOne = props => {
  const renderCardContent = data => {
    return data.map((body, index) => {
      return (
        <Typography
          key={index}
          align="left"
          className={classes.content}
          paragraph
          variant="body1"
        >
          {body}
        </Typography>
      );
    });
  };
  const { classes } = props;
  return <CardContent>{renderCardContent(props.text)}</CardContent>;
};

export default withStyles(styles)(BlogContentOne);
