import React from 'react';

import style from './plus.module.css';

export default function Plus() {
  return (
    <svg
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      className={style.icon}
    >
      <path d="m16 2h-12c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4h-4v-2h4v-4h2v4h4z" />
    </svg>
  );
}
