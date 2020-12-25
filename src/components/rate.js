import React from 'react';

import RatingStar from '../icons/ratingStar';

export default function Rate(props) {
  let starList = [];
  for (let i = 0; i < props.review; i++) {
    starList.push(<RatingStar key={i} />);
  }

  return <div>{starList}</div>;
}
