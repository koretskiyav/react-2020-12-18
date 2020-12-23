import React from 'react';

const Rate = ({ rate }) => {
  let stars = '';
  if (rate === 0) {
    stars = 'No one rated this place';
  } else {
    for (let i = 0; i < rate; i++) {
      stars += '⭐️ ';
    }
  }

  return (
    <div>
      <h3>Average rating</h3>
      <p style={{ textAlign: 'center' }}>{stars}</p>
    </div>
  );
};

export default Rate;
