import React from "react";

import ProjectItem from "./ProjectItem";

export default function ProjectPageList({ currentItems }) {
  return (
    <ul
      className="mt-0 grid gap-8 min-w-[288px] not-italic leading-normal
        sm:min-w-[388px] sm:gap-8
        md:min-w-[688px] md:grid-cols-2 md:gap-6
        xl:min-w-[1120px] xl:grid-cols-3 xl:gap-8
        2xl:min-w-[1200px] 2xl:gap-6"
    >
      {currentItems.map((data) => (data.is_shown
        ? (<ProjectItem
          key={data.id}
          data={data}
          className="flex flex-col w-[288px] h-[908px]
            sm:w-[388px] sm:h-[858px]
            md:w-[360px] md:h-[983px]
            xl:w-[360px] xl:min-h-[996px] 
            2xl:w-[384px] 2xl:min-h-[962px]"
        />)
        : null
      ))}
    </ul>
  );
}