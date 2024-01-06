export default function TeamItem({ data }) {
  // eslint-disable-next-line @next/next/no-img-element
  <li>
    <img alt={data.alt} width={16.56} height={18.13} className="" />;
    <h3 className="">{data.name}</h3>;<p className="">{data.position}</p>;
  </li>;
}
