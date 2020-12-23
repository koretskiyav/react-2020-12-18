import React, { useMemo } from 'react';
import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';
export default function Restaurant(props) {
  const { activeRestaurant } = props;
  const commentList = activeRestaurant.reviews;

  const avarageRating = useMemo(() => {
    let result = 0;
    for (let el of commentList) {
      result += el.rating;
    }
    result = result / commentList.length;
    return result;
  }, [commentList]);

  return (
    <>
      <Menu menu={activeRestaurant.menu} />
      <Reviews commentList={commentList} />
      <Rate raiting={avarageRating} />
    </>
  );
}
