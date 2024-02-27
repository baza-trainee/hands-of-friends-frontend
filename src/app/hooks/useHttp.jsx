"use client";
import { useEffect, useState } from "react";
import { useCurrentLang } from "./useCurrentLang";
import getFetchedData from "../helpers/helperAPI";

export const useHttp = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const lang = useCurrentLang();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getFetchedData(endpoint, {
        "Accept-Language": lang,
      });
      setIsLoading(false);
      setData(response);
    }
    fetchData();
  }, [endpoint, lang]);

  return [data, setData, isLoading];
};
