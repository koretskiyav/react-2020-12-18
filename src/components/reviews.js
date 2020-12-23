import React from 'react';

export default function Reviews({ commentList }) {
  return (
    <>
      {commentList.map((review) => {
        return (
          <div
            key={review.id}
            className={
              review.rating >= 4
                ? 'card border-light mb-3 mt-1 bg-success text-white'
                : 'card border-light mb-3 mt-1 bg-danger text-white'
            }
          >
            <div className="card-header">Guest name: {review.user}</div>
            <div className="card-body">
              <p className="card-text">feedback: {review.text}</p>
              <h6 className="card-text">rating:{review.rating}</h6>
            </div>
          </div>
        );
      })}
    </>
  );
}
