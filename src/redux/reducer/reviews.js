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
      return {
        ...reviews,
        [payload.id]: {
          id: payload.id,
          rating: payload.rating,
          text: payload.text,
          userId: payload.userId,
        },
      };
      /*5db6247b-ab1c-49db-be1f-8dd27fd38b81:
id: "5db6247b-ab1c-49db-be1f-8dd27fd38b81"
rating: 5
text: "Finally! This place is amazing place for breakfast, lunch, dinner and supper"
userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54"



id: "b1d4fef8-743e-4ddf-913d-9404376d43d0"
rating: 5
text: "asasa"
userId: "b39d366f-b2f4-4834-8825-277aa5df0aa2"
yourName: "asa"
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
