/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */

import { splitName } from "./helpers";

export default function TeamItem({ data }) {
  const name = splitName(data.full_name);

  return (
    <>
      <img
        src={data.image}
        alt={`Photo of ${data.full_name}`}
        width={265}
        height={290}
        className="mb-3 h-[290px] object-cover "
      />
      <h3 className="mb-2 w-[219px] text-2xl text-center capitalize ">
        {name.firstName}
      </h3>
      <h3 className=" mb-2 w-[219px] text-2xl text-center capitalize  overflow-hidden truncate hover:overflow-visible hover:whitespace-normal grow break-words">
        {name.lastName}
      </h3>
      <p className="text-lg w-[219px] text-center capitalize">
        {data.position}
      </p>
    </>
  );
}
