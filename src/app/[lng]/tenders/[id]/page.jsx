"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useHttp } from "@/app/hooks/useHttp";
import Container from "@/app/components/Container";
import BreadCrumbs from "@/app/components/BreadCrumbs";
import { OLCLASS, ULCLASS } from "@/app/helpers/consts";

export default function Page({ params }) {
  const { id } = params;
   const router = useRouter();
  const [dataByID, , isLoading] = useHttp(`tenders/${id}`);
  const [formattedDescription, setFormattedDescription] = useState();

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
    }
  }, [isLoading, dataByID]);

  return (
    <>
      <Container>
        <BreadCrumbs
          className="my-12"
          href="/tenders"
          text="Тендери"
          textColor="blue"
        />

        <div className="max-w-[835px] text-lg mb-40">
          <p className="mb-6">{dataByID.date}</p>
          <h2 className="text-3xl font-bold mb-10">{dataByID.title}</h2>
          <div
            className="text-lg"
            dangerouslySetInnerHTML={{
              __html: formattedDescription,
            }}
          />
        </div>
      </Container>
    </>
  );
}
