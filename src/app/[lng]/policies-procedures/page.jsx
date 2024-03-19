"use client";

import Policies from "@/app/components/PoliciesProcedures/Policies";

import { useHttp } from "@/app/hooks/useHttp";
import { useEffect } from "react";

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