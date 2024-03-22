"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Container from "@/app/components/Container";
import BreadCrumbs from "@/app/components/BreadCrumbs";

import { useHttp } from "@/app/hooks/useHttp";
import { OLCLASS, ULCLASS } from "@/app/helpers/consts";
import { useTranslation } from "@/app/i18n/client";

import Loader from '../../../../../public/img/loader.svg';

export default function Page({ params, lng }) {
  const { t } = useTranslation(lng, "projects");
  const router = useRouter();

  const [content, setContent] = useState([]);
  const { id } = params;
  const [dataByID, , isLoading] = useHttp(`projects/${id}`);

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
        .replace(/<ol/g, `<ol class="${OLCLASS}"`)
        .replace(/<a /g, `<a style="color: blue;" target="_blank" `);;

      const content = dataByID.content;

      const text = content.map((item) => (
        item.text.replace(/<ul/g, `<ul class="${ULCLASS}"`).replace(/<ol/g, `<ol class="${OLCLASS}"`).replace(/<a /g, `<a style="color: blue;" target="_blank" `)));

      setContent(content);
      setFormattedContent(text);
      setFormattedDescription(desc);
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
        {isLoading
          ? <div className='flex items-center justify-center pb-14'>
            <Loader className='animate-spin' />
          </div>
          : dataByID && typeof dataByID.props === 'undefined'
            ? <div className="max-w-[320px] text-base mb-40
                  sm:max-w-[388px]
                  md:max-w-[688px] md:text-lg 
                  xl:max-w-[835px]
                  2xl:max-w-[894px]"
            >
              <h2 className="text-2xl max-w-[894px] font-bold mb-10
                md:text-3xl">
                {dataByID.title}
              </h2>
              <p className="text-xl mb-6
                sm:text-base
                md:text-xl"
              >
                {dataByID.start_date}-{dataByID.end_date ? dataByID.end_date : t("act")}
              </p>
              <div
                className="text-lg mb-6 font-body"
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
                  <li key={item.id}
                    className="max-w-[894px]">
                    {<p
                      className="max-w-[894px] mb-6 font-body text-lg"
                      dangerouslySetInnerHTML={{
                        __html: formattedContent[index]
                      }}
                    ></p>
                    }
                    {item.image
                      ? <Image
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
                      : " "
                    }
                  </li>
                ))}
              </ul>
            </div>
            : <div className="my-8">{dataByID}</div>
        }
      </Container>
    </>
  );
}