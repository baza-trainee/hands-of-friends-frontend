import { useCookies } from "react-cookie";
import { cookieName } from "../i18n/settings";

export const useCurrentLang = () => {
  const [cookies, setCookie] = useCookies([cookieName]);
  if ("ua" === cookies.i18next) {
    return "uk";
  } else {
    return "en";
  }
};
