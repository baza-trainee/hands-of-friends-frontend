import { useEffect, useState } from "react";
import { useCurrentLang } from "./useCurrentLang";
import getFetchedData from "../helpers/helperAPI";

export const useHttp = (endpoint) => {
  const [data, setData] = useState([]);
  const lang = useCurrentLang();

  useEffect(() => {
    async function fetchData() {
      const response = await getFetchedData(endpoint, {
        "Accept-Language": lang,
      });

      setData(response);
    }
    fetchData();
  }, [endpoint, lang]);
  return [data, setData];
};
