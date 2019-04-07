import React from 'react';
import Primary from 'components/Typography/Primary';
import Info from 'components/Typography/Info';

export default function loadContent(content) {
  return content.map((item, index) => {
    if (item.hasOwnProperty('ul')) {
      let listGroup = [];
      item.ul.forEach((item, idx) => {
        listGroup.push(<li key={idx + item[0]}>{item}</li>);
      });
      return <ul key={index}>{listGroup}</ul>;
    }
    return <Info key={index}>{item.p.value}</Info>;
  });
}
