import React from 'react';

export default function Section(props) {
  const sectionClass = `font-body mt-[3.75rem] xl:mt-36 2xl:mt-40
    ${props.marginbottom ? props.marginbottom : ""} 
    ${props.margintop ? props.margintop : ""}`;

  return <section className={sectionClass} {...props} />;
}
