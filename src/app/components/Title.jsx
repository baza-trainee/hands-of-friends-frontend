import React from 'react';

export default function Title({ titleName }) {
  return (
    <h2
      className="mb-8 font-body font-bold  text-black text-2xl pseudo
    xl:mb-[3.78rem] xl:text-3xl"
    >
      {titleName}
    </h2>
  );
}
