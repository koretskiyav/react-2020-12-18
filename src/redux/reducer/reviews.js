import { normalizedReviews } from '../../fixtures';
import { POST_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_REVIEW:
      console.log(payload);

      /*return {...reviews, [payload.id]:{
        id:payload.id,
        userId:payload.yourName,
        text:payload.text,
        rating:payload.rating
        }}*/
      break;

    default:
      return reviews;
  }
};
/*
id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
    userId: 'a304959a-76c0-4b34-954a-b38dbf310360',
    text: 'Not bad',
    rating: 5,
 */
