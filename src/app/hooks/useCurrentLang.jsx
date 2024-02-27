import { useCookies } from "react-cookie";
import { cookieName } from "../i18n/settings";
import { useRouter } from "next/navigation";

export const useCurrentLang = () => {
  const [cookies, setCookie] = useCookies([cookieName]);
  console.log("useCurrentLang", cookies);
  console.log("useCurrentLang IF", cookies.i18next);

  if ("ua" === cookies.i18next) {
    return "uk";
  } else {
    return "en";
  }
};
