import React from 'react';

export default function loadContent(content) {
  return content.map((item, index) => {
    if (item.hasOwnProperty('ul')) {
      let listGroup = [];
      item.ul.forEach((item, idx) => {
        listGroup.push(<li key={idx + item[0]}>{item}</li>);
      });
      return <ul key={index}>{listGroup}</ul>;
    }
    return item.p.value;
  });
}
