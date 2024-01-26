import { useCookies } from "react-cookie";
import { cookieName } from "../i18n/settings";

export const useCurrentLang = () => {
  const [cookies, setCookie] = useCookies([cookieName]);
  console.log("ДАНІ З КУКІС", cookies);
  if ("ukr" === cookies.i18next) {
    return "uk";
  } else {
    return "en";
  }
};
