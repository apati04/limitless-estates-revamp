import React from 'react';
import Typography from '@material-ui/core/Typography';
const BlogTitle = props => {
  return <Typography variant="h3">{props.text}</Typography>;
};

export default BlogTitle;
