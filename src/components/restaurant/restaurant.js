import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { averageRatingSelector, productsSelector } from '../../redux/selectors';
import { loadProducts } from '../../redux/actions';

const Restaurant = ({ restaurant, allProducts, loadProducts }) => {
  const { id, name, menu, reviews } = restaurant;
  useEffect(() => {
    const allProdArray = Object.keys(allProducts);
    if (!allProdArray.includes(menu[0])) {
      loadProducts(id);
    }
  }, [id, menu]);

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    {
      title: 'Reviews',
      content: <Reviews reviews={reviews} restaurantId={id} />,
    },
  ];
  const allReviews = useSelector((state) => state.reviews.entities);
  const filteredReviewsIdArr = Object.keys(allReviews).filter((reviewId) =>
    reviews.includes(reviewId)
  );

  //todo fix loop
  let averageRating = 0;
  for (const reviewId of filteredReviewsIdArr) {
    const review = allReviews[reviewId];
    const rating = review.rating;
    averageRating = averageRating + rating;
  }
  averageRating = averageRating / filteredReviewsIdArr.length;

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} />
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }).isRequired,
  averageRating: PropTypes.number,
};

export default connect(
  (state, props) => ({
    //averageRating: averageRatingSelector(state, props),
    allProducts: productsSelector(state, props),
  }),
  { loadProducts }
)(Restaurant);
