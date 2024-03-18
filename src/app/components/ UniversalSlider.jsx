import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";

import NoItem from "./NoitemElement";
import UniversalSkeleton from "./UniversalSkeleton";

import { useHttp } from "../hooks/useHttp";

import Loader from '../../../public/img/loader.svg'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const UniversalSlider = ({
  endpoint,
  ItemComponent,
  className,
  swiperSettings,
  skeletonType = "default",
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
    setIsLoaing(false)
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
          !prevData ?? isLoading
            ?
            <SwiperSlide className="!w-full h-full">
              <div className='flex items-center justify-center'>
                <Loader className='animate-spin' />
              </div>
            </SwiperSlide>

            : (length > 0 ? (prevData.map((item, index) => (
              <SwiperSlide className="flex flex-col items-center " key={`${item.title} ${index}`}>
                <ItemComponent data={item} />
              </SwiperSlide>
            ))) : <NoItem />)
        }
      </Swiper>
    </>
  );
};

export default UniversalSlider;
