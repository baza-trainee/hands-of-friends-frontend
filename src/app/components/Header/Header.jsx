"use client";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { useTranslation } from "../../i18n/client";
import { languages } from "../../i18n/settings";

import { FaBars, FaPlus, FaGlobe } from "react-icons/fa6";
import { motion } from "framer-motion";
import logo from "../../../../public/img/logo.svg";

export default function Header({ lng }) {
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const { t } = useTranslation(lng, "header");
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const pathWithoutLanguage =
    pathParts.length > 2 ? pathParts[pathParts.length - 1] : "";

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
            <span className="uppercase cursor-default">
              {/* {{ lng }} */}
              {languages
                .filter((activeLng) => lng !== activeLng)
                .map((activeLng) => {
                  return (
                    <span key={activeLng}>
                      <Link href={`/${activeLng}/${pathWithoutLanguage}`}>
                        EN
                      </Link>
                    </span>
                  );
                })}
            </span>
            |
            <span className="uppercase cursor-pointer hover:text-violet text-gray">
              {languages
                .filter((activeLng) => lng !== activeLng)
                .map((activeLng) => {
                  return (
                    <span key={activeLng}>
                      <Link href={`/${activeLng}/${pathWithoutLanguage}`}>
                        UA
                      </Link>
                    </span>
                  );
                })}

              {/* {languages
								.filter((l) => lng !== l)
								.map((l, index) => {
									return (
										<span key={l}>
											{index > 0 && ' or '}
											<Link
												href={`/${l}/${pathWithoutLanguage}`}
											>
												{l}
											</Link>
										</span>
									);
								})} */}
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
                        onClick={toggleMenu}
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
  return (
    <header className="bg-lightBlue">
      <div className="flex py-4 mx-auto max-w-[1200px] w-[90vw] relative lg:flex-row flex-col lg:gap-4 lg:items-center lg:justify-between gap-0">
        <div className="items-center hidden lg:flex lg:justify-center">
          <Image src={logo} alt="logo" />
        </div>
        <div className="items-center hidden md:justify-center lg:flex">
          <ul className="flex flex-col justify-between gap-4 lg:gap-14 lg:flex-row">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className="text-xl text-black transition hover:text-violet hover:pl-4 lg:hover:pl-0"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <a
          href="https://www.monobank.ua/?lang=uk"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden p-4 text-xl text-white transition border-2 rounded cursor-pointer lg:self-center bg-violet border-violet hover:bg-white hover:text-violet lg:block"
        >
          {t("support")}
        </a>
        <Trans i18nKey="languageSwitcher" t={t}>
          <div className="items-center hidden gap-2 transition lg:flex lg:justify-center">
            <FaGlobe size={24} className="text-deepBlue" />
            <span
              className={
                lng === "en"
                  ? "text-deepBlue uppercase pointer-events-none"
                  : "text-gray uppercase"
              }
            >
              {/* switch languages without changes */}
              {languages
                .filter((activeLng) => lng !== activeLng)
                .map((activeLng) => {
                  return (
                    <span key={activeLng}>
                      <Link href={`/${activeLng}/${pathWithoutLanguage}`}>
                        EN
                      </Link>
                    </span>
                  );
                })}
            </span>
            |
            <span
              className={
                lng === "ua"
                  ? "text-deepBlue uppercase pointer-events-none"
                  : "text-gray uppercase"
              }
            >
              {languages
                .filter((activeLng) => lng !== activeLng)
                .map((activeLng) => {
                  return (
                    <span key={activeLng}>
                      <Link href={`/${activeLng}/${pathWithoutLanguage}`}>
                        UA
                      </Link>
                    </span>
                  );
                })}
              {/* switch languages with changes */}
              {/* <span className='uppercase cursor-default text-deepBlue'>
								{{ lng }}{' '}
							</span>
							|{' '}
							<span className='uppercase cursor-pointer text-gray'>
								{languages
									.filter((l) => lng !== l)
									.map((l, index) => {
										return (
											<span key={l}>
												{index > 0 && ' or '}
												<Link
													href={`/${l}/${pathWithoutLanguage}`}
												>
													{l}
												</Link>
											</span>
										);
									})}
							</span> */}
            </span>
          </div>
        </Trans>
        <div className="flex items-center justify-between w-full gap-5 px-4 py-4 lg:hidden">
          <div
            className={`cursor-pointer transition lg:hidden ${
              menuOpen ? "transform rotate-45 scale-125" : ""
            }`}
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <FaPlus size={20} className="fill-slate-900" />
            ) : (
              <FaBars size={20} className="fill-slate-900" />
            )}
          </div>
          <div className="flex items-center">
            <Image src={logo} alt="logo" width={28} height={28} />
          </div>
          <Trans i18nKey="languageSwitcher" t={t}>
            <div className="flex items-center justify-end flex-1 gap-2 transition">
              <FaGlobe size={24} className="text-deepBlue" />
              <span
                className={
                  lng === "en"
                    ? "text-deepBlue uppercase pointer-events-none text-xs"
                    : "text-gray uppercase text-xs"
                }
              >
                {/* switch languages without changes */}
                {languages
                  .filter((activeLng) => lng !== activeLng)
                  .map((activeLng) => {
                    return (
                      <span key={activeLng}>
                        <Link href={`/${activeLng}/${pathWithoutLanguage}`}>
                          EN
                        </Link>
                      </span>
                    );
                  })}
              </span>
              |
              <span
                className={
                  lng === "ua"
                    ? "text-deepBlue uppercase pointer-events-none text-xs"
                    : "text-gray uppercase text-xs"
                }
              >
                {languages
                  .filter((activeLng) => lng !== activeLng)
                  .map((activeLng) => {
                    return (
                      <span key={activeLng}>
                        <Link href={`/${activeLng}/${pathWithoutLanguage}`}>
                          UA
                        </Link>
                      </span>
                    );
                  })}
              </span>
            </div>
          </Trans>
        </div>
        <motion.nav
          animate={menuOpen ? "open" : "closed"}
          variants={variants}
          className="lg:hidden"
        >
          {menuOpen && (
            <div className="flex flex-col gap-8 px-4 py-4 lg:flex-row lg:justify-between">
              <div class="bg-deepBlue h-[1px] w-full"></div>
              <div className="flex items-center md:justify-center">
                <ul className="flex flex-col justify-between gap-6 lg:gap-14 lg:flex-row">
                  {links.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={link.url}
                        onClick={toggleMenu}
                        className="text-sm text-black duration-300 hover:text-violet hover:pl-4 lg:hover:pl-0"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <Trans i18nKey='languageSwitcher' t={t}>
								<div className='flex items-center gap-2 transition cursor-pointer lg:justify-center'>
									<FaGlobe size={24} />
									<span className='uppercase hover:text-violet'>
										{{ lng }}
									</span>
									|
									<span className='uppercase hover:text-violet text-gray'>
										{languages
											.filter((l) => lng !== l)
											.map((l, index) => {
												return (
													<span key={l}>
														{index > 0 && ' or '}
														<Link href={`/${l}`}>
															{l}
														</Link>
													</span>
												);
											})}
									</span>
								</div>
							</Trans> */}
              <a
                href="https://www.monobank.ua/?lang=uk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm text-white transition border-2 rounded cursor-pointer border-violet lg:self-center bg-violet hover:bg-white hover:text-violet w-36"
              >
                {t("support")}
              </a>
            </div>
          )}
        </motion.nav>
      </div>
    </header>
  );
}
