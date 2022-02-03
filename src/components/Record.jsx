import React from 'react';

const Record = ({ record }) => {
  return (
  <tr>
      <td>{ record.artist }</td>
      <td>{ record.title }</td>
      <td>{ record.year }</td>
      <td>{ record.price }€</td>
  </tr>
  );
};

export default Record;
