import React from 'react';
import { ReactComponent as Star } from '../icons/star.svg';

const MAX_STARS = 5;

export default function Rate({ countStars }) {
  const stars = countStars <= MAX_STARS ? countStars : MAX_STARS;
  const starsArr = [];
  for (let i = 0; i < stars; i++) {
    starsArr.push(i);
  }

  return (
    <div>
      {starsArr.map((x) => (
        <Star />
      ))}
    </div>
  );
}
