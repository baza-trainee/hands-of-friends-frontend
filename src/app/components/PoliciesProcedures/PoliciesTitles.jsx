"use client";

import React, { useState, useEffect, useRef, useContext } from "react";

import { useTranslation } from "@/app/i18n/client";
import { PdfContext } from '../PdfProvider';

const PoliciesTitles = ({ lng, setSearchText }) => {
    const { t } = useTranslation(lng, "policies-procedures");

    const [searchValue, setSearchValue] = useState('');
    const [iconClass, setIconClass] = useState("politics-icon");
    const { sharedSearchValue } = useContext(PdfContext);
    const inputSearch = useRef();

    useEffect(() => {
        setIconClass(searchValue.length ? "politics-icon active" : "politics-icon")
    }, [searchValue])

    useEffect(() => {
        setSearchValue(sharedSearchValue)
    }, [sharedSearchValue])

    useEffect(() => {
        let timeoutId;
        if (searchValue.length <= 0) {
            timeoutId = setTimeout(() => {
                setSearchText('https://github.com/dav1dashka');
            }, 2000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [searchValue]);

    const focusSearch = () => { inputSearch.current.focus(); };

    const hoverSearch = () => {
        inputSearch.current.classList.add('border-lightGray');
    };

    const unhoverSearch = () => {
        inputSearch.current.classList.remove('border-lightGray');
    };

    const onFormSubmit = e => {
        e.preventDefault();
        setSearchText(searchValue)
    }

    return (
        <>
            <div className="flex flex-col gap-y-5 mb-6 
                md:text-3xl/5 md:mb-8 md:flex-row md:items-end md:justify-between md:gap-y-2
                xl:mb-10 2xl:mb-8"
            >
                <h1 className="font-bold text-2xl/5 md:text-3xl">{t("policies-procedures")}</h1>
                <form className="relative" onSubmit={onFormSubmit}>
                    <input
                        id="politics-search"
                        ref={inputSearch}
                        onChange={(e) => setSearchValue(e.target.value)}
                        value={searchValue}
                        className="w-72 h-[44px] py-2.5 pl-3 pr-[90px] bg-transparent rounded border-fontGray border font-normal leading-normal 
                        text-base hover:border-lightGray transition outline-none focus:border-blue-600 
                        md:w-[334px]
                        xl:w-[455px]
                        2xl:w-[486px]"
                        type="text" />
                    <svg
                        id="politics-icon"
                        onMouseEnter={hoverSearch}
                        onMouseLeave={unhoverSearch}
                        onClick={focusSearch}
                        className={iconClass}
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 3.5C6.413 3.5 3.5 6.413 3.5 10C3.5 13.587 6.413 16.5 10 16.5C13.587 16.5 16.5 13.587 16.5 10C16.5 6.413 13.587 3.5 10 3.5ZM10 4.5C13.036 4.5 15.5 6.964 15.5 10C15.5 13.036 13.036 15.5 10 15.5C6.964 15.5 4.5 13.036 4.5 10C4.5 6.964 6.964 4.5 10 4.5Z" fill="#D1D5DB" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.3544 19.646L14.5954 13.888C14.4004 13.693 14.0834 13.693 13.8884 13.888C13.6934 14.083 13.6934 14.4 13.8884 14.595L19.6464 20.354C19.8424 20.549 20.1584 20.549 20.3544 20.354C20.5494 20.158 20.5494 19.842 20.3544 19.646Z" fill="#D1D5DB" />
                    </svg>
                    <button
                        onClick={() => setSearchText(searchValue)}
                        type="submit"
                        className="absolute top-0 end-0 px-4 text-[1rem] h-full leading-4 text-white bg-violet rounded-e 
                        border border-violet hover:bg-deepBlue hover:border-deepBlue focus:outline-none transition
                        sm:end-[100px]
                        md:end-0"
                    >
                        {t("search")}
                    </button>
                </form>
            </div>
        </>
    );
}
export default PoliciesTitles;