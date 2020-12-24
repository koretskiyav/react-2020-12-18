import Rate from "./rate";
import Menu from "./menu";
import React from "react";
import Reviews from "./reviews";

export default function Restaurant(props) {

    const avgRating = props.restaurant.reviews.reduce(function (sum, review) {
        return sum + review.rating;
    }, 0) / props.restaurant.reviews.length;

    return (
        <div>
            <h1>{props.restaurant.name} <Rate stars={avgRating}/></h1>
            <h2>Menu:</h2>
            <Menu menu={props.restaurant.menu}/>
            <h2>Reviews:</h2>
            <Reviews reviews={props.restaurant.reviews}/>
        </div>
    )
}