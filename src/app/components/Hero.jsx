"use client";

import { useState } from "react";
//import { Hourglass } from "react-loader-spinner";
//import { CldVideoPlayer } from "next-cloudinary";

import Section from "./Section";

//import "next-cloudinary/dist/cld-video-player.css";

export default function Hero() {
  //const [videoLoaded, setVideoLoaded] = useState(false);
  //const handleVideoLoaded = () => {
  //  setVideoLoaded(true);
  //};
  return (
    <>
      <Section className="mt-0 max-w-[1440px] mx-auto">
        <div className="relative mb-20">
          {/*{!videoLoaded && (
            <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
              <Hourglass
                visible={true}
                height="40"
                width="40"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={["#306cce", "#72a1ed"]}
              />
            </div>
          )}*/}
          {/*<div className="h-[869px] ">
            <CldVideoPlayer
              poster="https://res.cloudinary.com/dgkkn62i5/image/upload/v1706174676/111_wlvg1h.png"
              width="1440%"
              height="100%"
              src="test_video"
              onDataLoad={handleVideoLoaded}
            />
          </div>*/}
          <iframe
            src="https://player.cloudinary.com/embed/?public_id=test_video&cloud_name=dgkkn62i5&player[seekThumbnails]=true&player[hideContextMenu]=true&player[floatingWhenNotVisible]=right&player[posterOptions][transformation][startOffset]=1"
            width="1440"
            height="869"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowfullscreen
            frameborder="1"
          ></iframe>
          <div className="flex justify-center">
            <h2 className="absolute bottom-24 text-white text-4xl w-[799px]">
              БО "Міжнародний благодійний фонд "Руки друзів" реалізує проєкти з
              надання благодійної допомоги
            </h2>
          </div>
        </div>
        <div className="relative"></div>
      </Section>

      <div className="max-w-[1440px] mx-auto relative">
        <iframe
          width="1440"
          height="869"
          src="https://www.youtube.com/embed/UYXcryt21m8?rel=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="flex justify-center">
          <h2 className="absolute bottom-24 text-white text-4xl w-[799px]">
            БО "Міжнародний благодійний фонд "Руки друзів" реалізує проєкти з
            надання благодійної допомоги
          </h2>
        </div>
      </div>
    </>
  );
}
