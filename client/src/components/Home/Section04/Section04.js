import React from 'react';
import ExpansionList from '../../Layouts/ExpansionList';
const itemsList = [
  {
    title: 'asdf',
    body: 'one'
  },
  { title: 'titleTwo', body: 'two' },
  { title: 'three', body: 'three' }
];
const Section4 = () => {
  return (
    <div>
      <ExpansionList itemsList={itemsList} />
    </div>
  );
};

export default Section4;
