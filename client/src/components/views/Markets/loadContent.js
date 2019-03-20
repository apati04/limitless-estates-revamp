import React from 'react';
import Typography from '@material-ui/core/Typography';
export default function loadContent (content) {
  return content.map ((item, index) => {
    if (Array.isArray (item)) {
      return (
        <Typography key={index} component="ul" paragraph variant="body1">
          {item}
        </Typography>
      );
    }
    return (
      <Typography key={index} paragraph variant="body1">
        {item}
      </Typography>
    );
  });
}
