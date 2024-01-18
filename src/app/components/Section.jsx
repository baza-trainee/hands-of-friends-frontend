export default function Section(props) {
  const sectionClass = 'font-body mt-36 ' + props.marginBottom
  console.log(props)
  return <section className={sectionClass} {...props}  />;
}
