/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */

export default function TeamItem({ data }) {
  return (
    <>
      <img
        src={data.image}
        alt={`Photo of ${data.full_name}`}
        width={265}
        height={290}
        className="mb-3 h-[290px] object-cover "
      />
      <h3 className="grow break-words mb-2 w-[243px] text-2xl text-center capitalize ">
        {data.full_name}
      </h3>
      <p className="text-lg w-[243px] text-center capitalize">
        {data.position}
      </p>
    </>
  );
}
