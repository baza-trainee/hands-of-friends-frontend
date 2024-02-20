import React from "react";
import Image from "next/image";
import { splitName } from "./helpers";

export default function TeamItem({ data }) {
  const name = splitName(data.full_name);

  return (
    <>
      <Image
        src={data.image}
        alt={`${data.full_name} team member`}
        width={243}
        height={290}
        className="mb-3 h-[290px] object-cover "
      />
      {name ? (
        <>
          <h3 className="w-[219px] text-2xl text-center font-bold capitalize ">
            {name.firstName}
          </h3>
          <h3 className=" mb-2 w-[219px] text-2xl text-center font-bold capitalize  overflow-hidden truncate hover:overflow-visible hover:whitespace-normal grow break-words">
            {name.lastName}
          </h3>
        </>
      ) : (
        <h3 className=" mb-2 w-[219px] text-2xl text-center font-bold capitalize  overflow-hidden truncate hover:overflow-visible hover:whitespace-normal grow break-words">
          {data.full_name}
        </h3>
      )}
      <p className="text-lg w-[219px] text-center capitalize">
        {data.position}
      </p>
    </>
  );
}
