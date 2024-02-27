import { useCookies } from "react-cookie";
import { cookieName } from "../i18n/settings";

export const useCurrentLang = () => {
  const [cookies, setCookie] = useCookies([cookieName]);
  const storedData = localStorage.getItem('i18nextLng');

  if ("ua" === storedData) {
    return "ua";
  } else {
    return "en";
  }
};
