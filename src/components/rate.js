import React from 'react';

export default function Rate(props) {
    const {stars} = props;
    const rating = [1, 2, 3, 4, 5];

    return (
        <span>
            {
                rating.map(i => {
                    return i <= stars ? '★' : '☆'
                    }
                )
            }
        </span>
    )

}


