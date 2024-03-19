import React from "react";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

import CookiesPanel from "../components/CookiesPanel";
import Layout from "../components/Layout";

import { PT_Sans } from "next/font/google";

import "../helpers/globals.css";
import "/node_modules/video-react/dist/video-react.css";

export const metadata = {
  title: "Hands of Friends",
  description: "International Charitable Foundation 'Hands of Friends'",
};

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className={`${ptSans.className} overflow-x-hidden`}>
        <Layout lng={lng}>{children}</Layout>
        <div id="modal-root" />
        <CookiesPanel />
      </body>
    </html>
  );
}