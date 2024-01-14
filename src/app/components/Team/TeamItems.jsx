/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */

export default function TeamItem({ data }) {
  return (
    <>
      <img
        alt={data.alt}
        width={265}
        height={290}
        className="bg-slate-500 mb-3"
      />
      <h3 className="mb-2 text-2xl">{data.name}</h3>
      <p className="text-lg">{data.position}</p>
    </>
  );
}
