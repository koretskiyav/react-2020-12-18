import React from 'react';

export default function Navigation(props) {
  return (
    <div>
      <div className="row btn-group" role="group">
        {props.restaurants.map((restaurant) => (
          <button
            type="button"
            className="col-sm-3 btn btn-outline-primary  "
            key={restaurant.id}
            onClick={() => props.onRestaurantClick(restaurant.id)}
          >
            {restaurant.name}
          </button>
        ))}
      </div>
    </div>
  );
}
