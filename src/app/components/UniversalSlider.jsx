import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";

import NoItem from "./NoitemElement";

import { useHttp } from "../hooks/useHttp";

import Loader from '../../../public/img/loader.svg'
import { Oval } from "react-loader-spinner";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const UniversalSlider = ({
  endpoint,
  ItemComponent,
  className,
  swiperSettings,
  loaderType = "hero",
  useBullets = false,
}) => {
  const paginationType = useBullets ? "bullets" : "progressbar";
  const [data] = useHttp(endpoint);
  const [prevData, setPrevData] = useState();
  const [length, setLength] = useState();
  const [isLoading, setIsLoaing] = useState(true);
  const showNavigation = data ? data.length > 3 : false;
  const showPagination = data ? data.length > 3 : false;

  useEffect(() => {
    setPrevData(data);
    setLength(data.length);

    const timeoutId = setTimeout(() => {
      setIsLoaing(false)
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [data]);

  return (
    <>
      <Swiper
        navigation={showNavigation}
        pagination={
          showPagination
            ? {
              type: paginationType,
            }
            : false
        }
        {...swiperSettings}
        grabCursor={true}
        keyboard={true}
        cssMode={true}
        modules={[Keyboard, Pagination, Navigation, A11y]}
        loop={false}
        className={`swiper ${className}`}
      >
        {
          isLoading
            ? <div className={`${loaderType} loader`}>
              <div className='flex items-center justify-center'>
                <Oval
                  visible={true}
                  height="80"
                  width="80"
                  color="#2563EB"
                  strokeWidth="4"
                  strokeWidthSecondary=""
                  secondaryColor="#E0F2FE"
                  ariaLabel="oval-loading"
                />
                {/* <Loader className='animate-spin' /> */}
              </div>
            </div>
            : typeof prevData !== 'undefined' && prevData.length > 0 && prevData.type !== 'error'
              ? (prevData.map((item, index) => (
                <SwiperSlide className="flex flex-col items-center" key={`${item.title} ${index}`}>
                  <ItemComponent data={item} />
                </SwiperSlide>
              )))
              : <div className='flex items-center justify-center'>
                {prevData}
              </div>
        }
      </Swiper>
    </>
  );
};

export default UniversalSlider;