"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import Cookies from "js-cookie";
import Action from "./Action";
import Container from "./Container";

import { useTranslation } from "../i18n/client";

const CookiesPanel = ({ lng }) => {
  const { t } = useTranslation(lng, "cookies");
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    if (!Cookies.get("cookiesAccepted")) {
      setShowPanel(true);
    }
  }, []);

  const acceptCookies = () => {
    setShowPanel(false);
    Cookies.set("cookiesAccepted", "true", { expires: 365 });
  };

  return (
    showPanel && (
      <div className="fixed bottom-0 left-0 right-0 bg-[#F8FAFC] z-[1000]  ">
        <Container>
          <div className="flex flex-col xl:flex-row justify-between xl:py-8 items-center">
            <div className="text-sm py-4 md:text-lg md:w-[688px] xl:w-[644px] 2xl:w-[688px] text-center xl:text-start">
              {t("text")}{" "}
              <Link className="font-bold	" href={"/privacy-policy"}>
                {t("link")}
              </Link>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-2 xl:gap-4 text-center xl:max-h-[61px] mb-4 xl:mb-0">
              <Action
                type="button"
                onClick={acceptCookies}
                className="min-w-[184px] xl:min-w-[208px] py-[6px] xl:py-4 xs:text-[16px] lg:text-[16px] xl:text-[18px] mx-auto  bg-deepBlue border-transparent hover:text-deepBlue hover:border hover:border-deepBlue"
              >
                {t("btn-all")}
              </Action>
              <Action
                type="button"
                onClick={acceptCookies}
                textColor="black"
                className="min-w-[184px] py-[6px] xl:py-4 xl:min-w-[208px] xs:text-[16px] md:text-[16px] xl:text-[18px] mx-auto bg-white border-deepBlue hover:underline decoration-solid"
              >
                {t("btn")}
              </Action>
            </div>
          </div>
        </Container>
      </div>
    )
  );
};

export default CookiesPanel;
