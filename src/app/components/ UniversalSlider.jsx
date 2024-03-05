import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import { useHttp } from "../hooks/useHttp";

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
  const showNavigation = data.length > 3;
  const showPagination = data.length > 3;

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
        loop={true}
        className={`swiper ${className}`}
      >
        {
        // !data.length
        //   ? Array.from({ length: 4 }).map((_, index) => (
        //       <SwiperSlide className="flex flex-col items-center" key={index}>
        //         <UniversalSkeleton
        //           id={`skeleton-${index}`}
        //           type={skeletonType}
        //         />
        //       </SwiperSlide>
        //     ))
        //   :
           data.map((item, index) => (
              <SwiperSlide className="flex flex-col items-center " key={`${item.title} ${index}`}>
                <ItemComponent data={item} />
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
};

export default UniversalSlider;
