"use client";

import React, { useEffect, useState } from "react";
import Container from "@/app/components/Container";
import BreadCrumbs from "@/app/components/BreadCrumbs";
import getFetchedData from "@/app/helpers/helperAPI";

// const getData = async (id) => {
//   const res = await fetch(
//     `https://hands-of-friends-backend.onrender.com/api/content_management/tenders/${id}`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

export default function Page({ params }) {
  const { id } = params;
  const [data, setData] = useState({});
  const [formattedDescription, setFormattedDescription] = useState();
  const ulClass = "list-disc px-5 py-6";
  const olClass = "list-decimal px-5 py-6";

  useEffect(() => {
    async function fetchData(id) {
      const tenderPromise = await getFetchedData(`tenders/${id}`, {
        "Accept-Language": "uk",
      });

      const desc = tenderPromise.description
        .replace(/<ul/g, `<ul class="${ulClass}"`)
        .replace(/<ol/g, `<ol class="${olClass}"`);

      setFormattedDescription(desc);
      setData(tenderPromise);
    }
    fetchData(id);
  }, []);
  return (
    <>
      <Container>
        <BreadCrumbs className="my-12" href="/tenders" text="Тендери" textColor="blue" />

        <div className="max-w-[835px] text-lg mb-40">
          <p className="mb-6">{data.date}</p>
          <h2 className="text-3xl font-bold mb-10">{data.title}</h2>
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
