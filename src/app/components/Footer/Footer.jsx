"use client";

import React, { useContext } from 'react';
import Link from "next/link";

import { useTranslation } from "../../i18n/client";
import { PdfContext } from '../PdfProvider';

import LogoIcon from "../../../../public/img/logo.svg";
import { FaFacebook, FaYoutube } from "react-icons/fa6";

export default function Footer({ lng }) {
  const { t } = useTranslation(lng, "footer");
  const { setSharedSearchValue } = useContext(PdfContext);

  const links = [
    {
      id: 1,
      url: `/${lng}`,
      text: t("home"),
    },
    {
      id: 2,
      url: `/${lng}/aboutUs`,
      text: t("about"),
    },
    {
      id: 3,
      url: `/${lng}/projects`,
      text: t("projects"),
    },
    {
      id: 4,
      url: `/${lng}/tenders`,
      text: t("tenders"),
    },
    {
      id: 5,
      url: `/${lng}/#news`,
      text: t("news"),
    },
    {
      id: 6,
      url: `/${lng}/contacts`,
      text: t("contacts"),
    },
  ];

  const docs = [
    {
      id: 1,
      text: t("terms"),
    },
    {
      id: 2,
      text: t("policy"),
    },
    {
      id: 3,
      text: t("report"),
    },
    {
      id: 4,
      text: t("status"),
    },
  ];

  return (
    <footer className="mx-auto bg-lightBlue">
      <div className="py-8 mx-auto max-w-screen-2xl 2xl:px-[120px] xl:px-20 md:px-10 sm:px-28 px-16">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-5">
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-center">
              <LogoIcon alt="Hands of Friends logo" />
            </div>
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center">
                <a
                  href="https://www.facebook.com/FriendsHands"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition text-lightGray hover:text-violet"
                >
                  <FaFacebook size={24} />
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="https://www.youtube.com/@go2frg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition text-lightGray hover:text-violet"
                >
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10">
            <div className="flex items-center justify-center">
              <ul className="flex flex-row flex-wrap justify-between xl:gap-x-20 gap-y-7 md:gap-14 md:gap-x-6 gap-x-4 max-w-48 md:max-w-full">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.url}
                      className="text-black transition xl:text-xl hover:text-violet md:text-lg"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center lg:justify-center">
              <ul className="flex flex-col flex-wrap items-center justify-center md:flex-row xl:gap-x-20 md:gap-y-7 md:justify-between md:gap-14 md:gap-x-5 gap-y-4">
                {docs.map((doc) => (
                  <li key={doc.id}>
                    <Link
                      href={`/${lng}/policies-procedures`}
                      type='submit'
                      onClick={() => setSharedSearchValue(doc.text)}
                      className="text-sm text-black underline transition md:text-base hover:text-violet"
                    >
                      {doc.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div></div>
        </div>
        <p className="text-xs text-center md:text-sm text-lightGray">
          {t("rights")}
        </p>
      </div>
    </footer>
  );
}
