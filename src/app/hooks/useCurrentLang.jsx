import { useCookies } from "react-cookie";
import { cookieName } from "../i18n/settings";
import { useRouter } from "next/navigation";

export const useCurrentLang = () => {
  const { locale, defaultLocale } = useRouter();
  const [cookies] = useCookies(cookieName);
  return locale || cookies.i18next || defaultLocale;
};
