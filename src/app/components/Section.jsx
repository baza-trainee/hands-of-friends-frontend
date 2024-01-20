export default function Section(props) {
  const sectionClass = `font-body mt-36 ${props.marginBottom ? props.marginBottom : ''} ${props.marginTop ? props.marginTop : ''}`
  
  return <section className={sectionClass} {...props} />;
}
