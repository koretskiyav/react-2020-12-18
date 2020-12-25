import React from 'react';

export default function Minus({ disabled }) {
  return (
    <svg
      fill={disabled ? '#8e8e8e' : 'blue'}
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m16 2h-12c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm-1 9h-10v-2h10z" />
    </svg>
  );
}
