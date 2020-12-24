import React from 'react';

import RatingStar from '../icons/ratingStar';

export default function Rate(props) {
  return (
    <div>
      {props.review.rating}
      <RatingStar />
    </div>
  );
}
