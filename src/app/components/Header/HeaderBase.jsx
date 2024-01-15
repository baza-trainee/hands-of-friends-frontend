"use client";

import { FaBars, FaPlus } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../i18n/settings";
import logo from "../../../assets/logo.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "../../i18n/client";

export default function HeaderBase({ lng }) {
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const { t } = useTranslation(lng, "header");

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
      url: `/${lng}/contacts`,
      text: t("contacts"),
    },
  ];

  return (
    <header className="bg-lightBlue">
      <div className="flex py-4 mx-auto max-w-7xl w-[90vw] relative lg:flex-row flex-col gap-4 lg:items-center lg:justify-between">
        <div className="flex items-center lg:justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.src} alt="logo" className="" />
        </div>
        <div className="items-center hidden md:justify-center lg:flex">
          <ul className="flex flex-col justify-between gap-4 lg:gap-14 lg:flex-row">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className="text-xl text-black duration-300 hover:text-violet hover:pl-4 lg:hover:pl-0"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Trans i18nKey="languageSwitcher" t={t}>
          <div className="items-center hidden gap-2 duration-300 lg:flex lg:justify-center">
            <CiGlobe size={30} />
            <span className="uppercase">{{ lng }}</span>|
            <span className="uppercase cursor-pointer hover:text-violet text-gray">
              {languages
                .filter((l) => lng !== l)
                .map((l, index) => {
                  return (
                    <span key={l}>
                      {index > 0 && " or "}
                      <Link href={`/${l}`}>{l}</Link>
                    </span>
                  );
                })}
            </span>
          </div>
        </Trans>
        <a
          href="https://www.monobank.ua/?lang=uk"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden p-4 text-xl text-white duration-300 border-2 rounded cursor-pointer lg:self-center bg-violet border-violet hover:bg-white hover:text-violet lg:block"
        >
          {t("support")}
        </a>
        <motion.nav
          animate={menuOpen ? "open" : "closed"}
          variants={variants}
          className="lg:hidden"
        >
          {menuOpen && (
            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
              <div className="flex items-center md:justify-center">
                <ul className="flex flex-col justify-between gap-4 lg:gap-14 lg:flex-row">
                  {links.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={link.url}
                        className="text-xl text-black duration-300 hover:text-violet hover:pl-4 lg:hover:pl-0"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Trans i18nKey="languageSwitcher" t={t}>
                <div className="flex items-center gap-2 duration-300 cursor-pointer lg:justify-center">
                  <CiGlobe size={30} />
                  <span className="uppercase hover:text-violet">{{ lng }}</span>
                  |
                  <span className="uppercase hover:text-violet text-gray">
                    {languages
                      .filter((l) => lng !== l)
                      .map((l, index) => {
                        return (
                          <span key={l}>
                            {index > 0 && " or "}
                            <Link href={`/${l}`}>{l}</Link>
                          </span>
                        );
                      })}
                  </span>
                </div>
              </Trans>
              <a
                href="https://www.monobank.ua/?lang=uk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 text-xl text-white duration-300 border-2 rounded cursor-pointer lg:self-center bg-violet border-violet hover:bg-white hover:text-violet"
              >
                {t("support")}
              </a>
            </div>
          )}
        </motion.nav>
        <div
          className={`cursor-pointer duration-300 absolute right-0 top-10 lg:hidden ${
            menuOpen ? "transform rotate-45 scale-125" : ""
          }`}
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <FaPlus size={30} className="fill-slate-900" />
          ) : (
            <FaBars size={30} className="fill-slate-900" />
          )}
        </div>
      </div>
    </header>
  );
}
