import React from 'react';

const Rate = ({ rate }) => {
  const stars = Array(parseInt(rate, 10))
    .fill('')
    .map((_, i) => '⭐️');

  return (
    <div>
      <h3>Average rating</h3>
      <p style={{ textAlign: 'center' }}>{stars.join(' ')}</p>
    </div>
  );
};

export default Rate;
