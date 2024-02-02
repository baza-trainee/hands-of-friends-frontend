import React from 'react';

export default function Title({ titleName }) {
  return (
    <h2 className="mb-8 xl:mb-[3.78rem] font-body font-bold  text-black text-2xl  xl:text-3xl  pseudo ">
      {titleName}
    </h2>
  );
}
