"use client";

import { useState } from "react";
import { Hourglass } from "react-loader-spinner";
import { CldVideoPlayer } from "next-cloudinary";

import Container from "./Container";

import "next-cloudinary/dist/cld-video-player.css";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };
  return (
    <>
      <Container>
        <div className="relative mb-20">
          {!videoLoaded && (
            <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
              <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={["#306cce", "#72a1ed"]}
              />
            </div>
          )}
          <div className="">
            <CldVideoPlayer
              poster="https://res.cloudinary.com/dgkkn62i5/image/upload/v1705565089/hero_mvqyzh.jpg"
              width="1440"
              height="869"
              src="1_hnfjx5"
              onDataLoad={handleVideoLoaded}
            />
          </div>
          <div className="flex justify-center">
            <h2 className="absolute bottom-24 text-white text-4xl w-[799px]">
              БО "Міжнародний благодійний фонд "Руки друзів" реалізує проєкти з
              надання благодійної допомоги
            </h2>
          </div>
        </div>

        <iframe
          width="1280"
          height="650"
          src="https://www.youtube.com/embed/UYXcryt21m8?rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Container>
    </>
  );
}
