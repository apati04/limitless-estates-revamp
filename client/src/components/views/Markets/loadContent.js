import React from 'react';
import Typography from '@material-ui/core/Typography';
export default function loadContent(content) {
  console.log('content; ', content);
  return content.map((item, index) => {
    if (item.hasOwnProperty('ul')) {
      let listGroup = [];
      item.ul.forEach((item, idx) => {
        listGroup.push(<li key={idx + item[0]}>{item}</li>);
      });
      return (
        <Typography key={index} component="ul" paragraph variant="body1">
          {listGroup}
        </Typography>
      );
    }
    return (
      <Typography key={index} paragraph variant="body1">
        {item.p.value}
      </Typography>
    );
  });
}
