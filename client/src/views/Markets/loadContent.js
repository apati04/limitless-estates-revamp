import React from 'react';

export default function loadContent(content, styles) {
  return content.map((item, index) => {
    if (item.hasOwnProperty('ul')) {
      let listGroup = [];
      item.ul.forEach((item, idx) => {
        listGroup.push(
          <li key={idx + item[0]}>
            <h5>{item}</h5>
          </li>
        );
      });
      return (
        <ul
          key={index}
          className={styles.description}
          style={{ listStyleType: 'circle' }}
        >
          {listGroup}
        </ul>
      );
    }
    return (
      <h5 key={index} className={styles.description}>
        {item.p.value}
      </h5>
    );
  });
}
