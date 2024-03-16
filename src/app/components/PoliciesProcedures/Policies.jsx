"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useTranslation } from "@/app/i18n/client";
import Container from "@/app/components/Container";
import PoliciesTitles from "./PoliciesTitles";
import PoliciesList from "./PoliciesList";
import Pagination from "../Pagination";

import { FaArrowLeftLong } from 'react-icons/fa6';

const Policies = ({ data, lng }) => {
    const { t } = useTranslation(lng, "title");

    const [procesData, setProcesData] = useState(null);
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [marginPagesDisplayed, setMarginPagesDisplayed] = useState(0);

    const [isLoading, setIsLoading] = useState(true);

    const [searchText, setSearchText] = useState('');

    const endOffset = itemOffset + itemsPerPage;

    useEffect(() => {
        setProcesData(data)
    }, [data])

    useEffect(() => {
        setItemsPerPage(window.innerWidth < 768 ? 10 : 9);
        setMarginPagesDisplayed(window.innerWidth < 768 ? 0 : 1);
    }, [])

    useEffect(() => {
        if (procesData) {
            setIsLoading(true);
            setCurrentItems(procesData.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(procesData.length / itemsPerPage));
            setIsLoading(false);
        }
    }, [itemOffset, itemsPerPage, procesData]);

    useEffect(() => {
        let items;
        if (searchText === 'https://github.com/dav1dashka') {
            items = data;
        } else {

            items = data.filter(el => el.title.toLowerCase().includes(searchText.toLowerCase()) ? true : false);
        }

        setProcesData(items);
    }, [searchText])

    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <Container politicscontainer='mt-6 md:mt-[43px] xl:mt-[41px] 2xl:mt-[57px]'>
            <Link
                href={`/${lng}`}
                className='max-w-fit flex items-center gap-2 text-sm xl:text-xl text-deepBlue hover:text-violet mb-10
                    sm:mb-[48px] 
                    md:text-lg md:mb-[67px] 
                    xl:mb-8 2xl:mb-[59px]'
            >
                <FaArrowLeftLong className='text-base md:text-2xl' />
                {t('back')}
            </Link>
            <PoliciesTitles lng={lng} setSearchText={setSearchText} />
            {procesData && procesData.length
                ? <PoliciesList currentItems={currentItems} />
                : <div className="mb-6 text-base font-normal 
                md:text-xl md:mb-8"
                >За вашим пошуком нічого не знайдено</div>
            }
            <div className="flex justify-center md:justify-end">
                <Pagination
                    handlePageClick={handlePageClick}
                    pageCount={pageCount}
                    marginPagesDisplayed={marginPagesDisplayed}
                />
            </div>
        </Container>
    );
}
export default Policies;