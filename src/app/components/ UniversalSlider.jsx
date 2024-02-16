import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import { useHttp } from "../hooks/useHttp";

import UniversalSkeleton from "./UniversalSkeleton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getSkeletonCount } from "../helpers/helperSceleton";

const UniversalSlider = ({
  endpoint,
  ItemComponent,
  className,
  swiperSettings,
  skeletonType = "default",
}) => {
  const [data, setData] = useHttp(endpoint);
  const skeletonCount = getSkeletonCount();

  return (
    <>
      <Swiper
        navigation={true}
        pagination={{
          type: "progressbar",
        }}
        {...swiperSettings}
        grabCursor={true}
        keyboard={true}
        cssMode={true}
        modules={[Keyboard, Pagination, Navigation, A11y]}
        loop={true}
        className={`swiper ${className}`}
      >
        {!data.length
          ? [...Array(skeletonCount)].map((_, index) => (
              <SwiperSlide className="flex flex-col items-center" key={index}>
                <UniversalSkeleton
                  id={`skeleton-${index}`}
                  type={skeletonType}
                />
              </SwiperSlide>
            ))
          : data.map((item, index) => (
              <SwiperSlide className="flex flex-col items-center " key={index}>
                <ItemComponent data={item} />
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
};

export default UniversalSlider;
