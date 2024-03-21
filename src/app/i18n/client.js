"use client";

import { useEffect } from "react";
import { initReactI18next, useTranslation as useTranslationOrg, } from "react-i18next";
import { useCookies } from "react-cookie";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { cookieName, getOptions, languages } from "./settings";

const runsOnServerSide = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language, namespace) =>
      import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: undefined, 
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? languages : [],
  });

export function useTranslation(lng, ns, options) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;
  const server = runsOnServerSide && lng && i18n.resolvedLanguage !== lng;

  if (server) {
    server && i18n.changeLanguage(lng);
  }

  useEffect(() => {
    if (!lng || i18n.resolvedLanguage === lng) return;
    i18n.changeLanguage(lng);
  }, [lng, i18n]);

  useEffect(() => {
    if (typeof lng !== 'undefined') {
      if (cookies.i18next === lng) return;
      setCookie(cookieName, lng, { path: "/" });
    }
  }, [lng]);

  return ret;
}