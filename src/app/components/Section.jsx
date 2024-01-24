export default function Section(props) {
  const sectionClass = `font-body mt-[3.75rem] xl:mt-36 2xl:mt-40${
    props.marginBottom ? props.marginBottom : ""
  } ${props.marginTop ? props.marginTop : ""}`;

  return <section className={sectionClass} {...props} />;
}
