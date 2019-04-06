import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
const styles = {
  root: {
    textAlign: 'center',
    margin: '0.25rem',
    padding: '1.875rem',
    border: '1px solid rgba(0,0,0,0.24)',

    borderRadius: '0.375rem'
  }
};
const iconTemplate = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Card>
        <CardHeader title="Investment Options" subheader="Self Directed IRA" />
      </Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <i
            className={`${props.icon}`}
            style={{ fontSize: `${props.iconSize}` }}
          />
        </Typography>
        <Typography variant="h6" align="center" paragraph>
          {props.title}
        </Typography>
        <Typography variant="body2" align="justify" paragraph>
          {props.description}
        </Typography>
      </CardContent>
      <div style={{ marginTop: '1rem' }}>
        <Button color="primary">{props.linkText}</Button>
      </div>
      <CardActions>
        <Button
          size="small"
          color="primary"
          component={props => <Link {...props} to={props.link} />}
        >
          Share
        </Button>
        <Button
          size="small"
          color="primary"
          component={props => <Link {...props} to={props.link} />}
        >
          Learn More
        </Button>
      </CardActions>
    </div>
  );
};

export default withStyles(styles)(iconTemplate);
