import "../components/globals.css";
import "/node_modules/video-react/dist/video-react.css";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { PT_Sans } from "next/font/google";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { useTranslation } from "../i18n/";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

// const bloggerSans = BloggerSans({
//   subsets: ['latin'],
//   weight: ['400', '700']
// })

export const metadata = {
  title: "Hands of Friends",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className={ptSans.className}>
        <Header lng={lng} />
        <main className="mx-auto">{children}</main>
        <Footer lng={lng} />
      </body>
    </html>
  );
}
