import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import { useHttp } from "../hooks/useHttp";
import NoItem from "./NoitemElement";
import UniversalSkeleton from "./UniversalSkeleton";

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
  const [data, setData] = useHttp(endpoint);
  const [prevData, setPrevData] = useState();
  const [length, setLength] = useState()
  const showNavigation = data.length > 3;
  const showPagination = data.length > 3;
  
  useEffect(() => {
    setPrevData(data);
   setLength(data.length);
   
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
          !prevData
            ? Array.from({ length: 4 }).map((_, index) => (
              <SwiperSlide className="flex flex-col items-center" key={index}>
                <UniversalSkeleton
                  id={`skeleton-${index}`}
                  type={skeletonType}
                />
              </SwiperSlide>
            ))
            : (length>0? (prevData.map((item, index) => (
              <SwiperSlide className="flex flex-col items-center " key={`${item.title} ${index}`}>
                <ItemComponent data={item}/> 
              </SwiperSlide>
              ))) : <NoItem/>)
              }
      </Swiper>
    </>
  );
};

export default UniversalSlider;
