import React from "react";

export default function Section(props) {
  const sectionClass = `font-body mt-16
  sm:mt-[4.5rem]
  md:mt-28 
  xl:mt-36
  2xl:mt-40
    ${props.marginbottom ? props.marginbottom : ""} 
    ${props.margintop ? props.margintop : ""}`;

  return <section className={sectionClass} {...props} />;
}
