import React from 'react';
import Star from '../icons/star';
export default function Rate(props) {
  const { count } = props;
  return (
    <div>
      {Array(5)
        .fill()
        .map((_, index) => (
          <Star active={index < count} />
        ))}
    </div>
  );
}
