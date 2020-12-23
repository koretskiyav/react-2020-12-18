import React from 'react';
import style from './Rate.module.css';

export default function Rate(props) {
  return (
    <div className={style.rating}>
      {[...Array(props.rating)].map((e, i) => (
        <span className={style.star} key={i}>
          &#11088;
        </span>
      ))}
    </div>
  );
}
