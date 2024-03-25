"use client";

import { useEffect } from "react";

import Policies from "@/app/components/PoliciesProcedures/Policies";

import { useHttp } from "@/app/hooks/useHttp";

function Page({ params: { lng } }) {
  const [data] = useHttp('pdf-report/');

  useEffect(() => {
    if (window) {
      window.scrollTo({
        top: 0,
      })
    }
  }, [])

  return (
    <Policies data={data} lng={lng} />
  );
}
export default Page;