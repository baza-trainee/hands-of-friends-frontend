"use client";

import React, { useState, useEffect } from "react";

import Policies from "@/app/components/PoliciesProcedures/Policies";

import { useHttp } from "@/app/hooks/useHttp";

function Page({ params: { lng } }) {
  const [data, , isLoading] = useHttp('pdf-report/');

  return (
    <Policies data={data} lng={lng} isLoading={isLoading} />
  );
}
export default Page;