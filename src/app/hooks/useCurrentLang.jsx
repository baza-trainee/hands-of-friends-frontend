import { useCookies } from "react-cookie";
import { cookieName } from "../i18n/settings";

export const useCurrentLang = () => {
  const [cookies, setCookie] = useCookies([cookieName]);
  console.log("cookieName useCurrentLang ", [cookieName]);
  console.log("useCurrentLang", cookies);
  console.log("useCurrentLang cookies.i18next", cookies.i18next);

  if ("ua" === cookies.i18next) {
    return "uk";
  } else {
    return "en";
  }
};
