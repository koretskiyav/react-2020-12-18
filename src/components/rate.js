import React from 'react';

export default function Rate({ raiting }) {
  return (
    <>
      <h4>Raiting : {raiting.toFixed(1)}</h4>
    </>
  );
}
