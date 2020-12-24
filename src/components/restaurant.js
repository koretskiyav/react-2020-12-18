import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

function Restaurant(props) {
  return (<div>
    <h3>{props.name}</h3>
    <Menu menu={props.menu} />
    <Reviews reviews={props.reviews} />

    </div>
  );
}

export default Restaurant;
