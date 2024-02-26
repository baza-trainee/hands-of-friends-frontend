"use client";

import React, { useEffect, useState } from "react";
import Container from "@/app/components/Container";
import BreadCrumbs from "@/app/components/BreadCrumbs";
import getFetchedData from "@/app/helpers/helperAPI";
import Image from "next/image";
import ContentItem from "@/app/components/Projects/Content";
export default function Page({ params }) {
  const { id } = params;
  const [data, setData] = useState({});
  const [content, setContent] = useState([]);

  const [formattedDescription, setFormattedDescription] = useState();
  const ulClass = "list-disc px-5 py-6";
  const olClass = "list-decimal px-5 py-6";

  useEffect(() => {
    async function fetchData(id) {
      const projectPromise = await getFetchedData(`projects/${id}`, {
        "Accept-Language": "uk",
      });

      const desc = projectPromise.description
        .replace(/<ul/g, `<ul class="${ulClass}"`)
        .replace(/<ol/g, `<ol class="${olClass}"`);

      setFormattedDescription(desc);
      setData(projectPromise);
      const content = projectPromise.content;
      setContent(content);
  
    } 
    fetchData(id);
   
  }, []);
  return (
    <>
      <Container>
        <BreadCrumbs className="my-12" href="/projects" text="Проєкти" textColor="blue" />

        <div className="max-w-[835px] text-lg mb-40">
        
          <h2 className="text-3xl font-bold mb-10">{data.title}</h2>
          <p className="mb-6">{data.start_date}-{data.end_date}</p>
          <div
            className="text-lg mb-6"
            dangerouslySetInnerHTML={{
              __html: formattedDescription,
            }}
          />
        <Image
        src={data.image}
        alt= "Photo of the project"
        width={334}
        height={241}
        className="min-w-[288px] h-[180px] object-cover mb-6
       sm:min-w-[388px] sm:h-[241px]
         md:min-w-[334px] 
         xl:min-w-[455px]
        2xl:min-w-[486px]"
        />
        
         <ul>
        {content.map((item) => (
          <ContentItem key={item.id}
            item={item}/> ))}
        </ul>
        </div>
      </Container>
    </>
  );
}
