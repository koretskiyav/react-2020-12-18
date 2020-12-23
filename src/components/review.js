import React from 'react';

function Review(props) {
  const { user, text, rating, id } = props;

  return (
    <div data-id={id}>
      <h3>{user}</h3>
      <p>{text}</p>
      <span>{rating}</span>
    </div>
  );
}

export default Review;
