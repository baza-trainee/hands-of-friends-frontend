import React from 'react';

export default function Container(props) {
  return (
    <div
      className="container mx-auto xs:px-4  xl:px-[5rem] 2xl:px-[7.5rem]"
      {...props}
    />
  );
}
