"use client";

import React, { useState, useEffect } from "react";
import getFetchedData from "@/app/helpers/helperAPI";
import TendersPagination from "@/app/components/Tenders/TendersPagination";
import Section from "@/app/components/Section";
import Container from "@/app/components/Container";
import Title from "@/app/components/Title";
import { useTranslation } from "@/app/i18n/client";
import BreadCrumbs from "@/app/components/BreadCrumbs";
import Link from "next/link";
import {
  FaArrowLeftLong,
} from 'react-icons/fa6';
import PoliciesItem from "@/app/components/policiesProcedures/policiesItem";

function Page({ params: { lng } }) {
  const { t } = useTranslation(lng, "title");


  return (
    <Container politicscontainer='mt-6 mb-16 sm:mb-[72px] md:mt-[43px] md:mb-[112px] xl:mt-[41px] xl:mb-[144px] 2xl:mt-[57px] 2xl:mb-[160px]'>
      <Link
        href={`/${lng}`}
        className='max-w-fit flex items-center gap-2 text-sm xl:text-xl text-deepBlue hover:text-violet md:text-lg mb-[40px] sm:mb-[48px] md:mb-[67px] xl:mb-[43px] 2xl:mb-[59px]'
      >
        <FaArrowLeftLong className='text-base md:text-2xl' /> {t('back')}
      </Link>
      <h1 className="font-bold text-2xl/5 mb-6 md:text-3xl/5">{t("policies-procedures")}</h1>

      <div className="grid grid-cols-auto grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-5 md:gap-y-6 xl:grid-cols-3 xl:gap-y-10 2xl:gap-x-6 2xl:gap-y-12">
        {
          Array.from({ length: 9 }, (_, index) => (
            <PoliciesItem key={index} className="bg-gray-200"/>
          ))

        }
      </div>

    </Container>
  );
}
export default Page;