import React from 'react';
import Rate from "./rate";

export default function Reviews(props) {
    return (
        props.reviews.map((review) => (
            <div>
                <h4>{review.user} <Rate stars={review.rating}/></h4>
                <p>{review.text}</p>
            </div>
        ))
    );
}