"use client";
import { useHttp } from "@/app/hooks/useHttp";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/app/components/Container";
import BreadCrumbs from "@/app/components/BreadCrumbs";
import Image from "next/image";
import { OLCLASS, ULCLASS } from "@/app/helpers/consts";
import { useTranslation } from "@/app/i18n/client";
import Skeleton from "@/app/components/Projects/Skeleton";
export default function Page({ params, lng }) {
  const { t } = useTranslation(lng, "projects");
  const { id } = params;
   const router = useRouter();
  const [dataByID, , isLoading] = useHttp(`projects/${id}`);
  const [content, setContent] = useState([]);
  
  const [formattedDescription, setFormattedDescription] = useState();
  const [formattedContent, setFormattedContent] = useState();
  useEffect(() => {
    if (!isLoading && dataByID) {
      if (!dataByID.is_shown) {
        router.replace("/404");
        return;
      }
      const desc = dataByID.description
        .replace(/<ul/g, `<ul class="${ULCLASS}"`)
        .replace(/<ol/g, `<ol class="${OLCLASS}"`);
      setFormattedDescription(desc);
      const content = dataByID.content;
      setContent(content);
      const text= content.map((item) => (
       item.text.replace(/<ul/g, `<ul class="${ULCLASS}"`).replace(/<ol/g, `<ol class="${OLCLASS}"`)))
       setFormattedContent(text)
 
    }
  }, [isLoading, dataByID]);

  return (
    <>
      <Container>
        <BreadCrumbs
          className="my-12"
          href="/projects"
          text={t("title")}
          textColor="blue"
        />
 { dataByID && !isLoading ? (
        <div className="max-w-[835px] text-lg mb-40">
        
         <h2 className="text-3xl font-bold mb-10">{dataByID.title}</h2>
          <p className="mb-6">
            {dataByID.start_date}-{dataByID.end_date? dataByID.end_date : "Активний"}
          </p>
          <div
            className="text-lg mb-6"
            dangerouslySetInnerHTML={{
              __html: formattedDescription
            }}
          />
          <Image
            src={dataByID.image}
            alt="Photo of the project"
            width={334}
            height={241}
            className="min-w-[288px] object-cover mb-6
       sm:min-w-[388px] 
         md:min-w-[334px] 
         xl:min-w-[455px]
        2xl:min-w-[486px]"
          />

          <ul>
            {content.map((item, index) => (
              <li key={item.id}>
              {<p
                className="mb-6"
                dangerouslySetInnerHTML={{
                  __html: formattedContent[index]
                }}
              ></p> 
               }
              {item.image ? (
                <Image
                  src={item.image}
                  alt="Photo of the project"
                  width={334}
                  height={241}
                  className="min-w-[288px] object-cover mb-6
                sm:min-w-[388px]
                md:min-w-[334px] 
                xl:min-w-[455px] 
                2xl:min-w-[486px]"
                />
              ) : (
                " "
              )}
            </li>
            ))}
          </ul>   
          </div>) : <Skeleton></Skeleton> }
      
       
      </Container>
    </>
  );
}
