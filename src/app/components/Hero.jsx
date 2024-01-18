"use client";
// import ReactPlayer from "react-player";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import play from "../../assets/play.png";
import { useState } from "react";
import { Hourglass } from "react-loader-spinner";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };
  return (
    <>
      <div className="relative mb-20">
        {/* <img
          className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none	"
          src={play.src}
          alt="icon"
        /> */}

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
        <CldVideoPlayer
          poster="https://res.cloudinary.com/dgkkn62i5/image/upload/v1705565089/hero_mvqyzh.jpg"
          width="1280"
          height="650"
          src="1_hnfjx5"
          onDataLoad={handleVideoLoaded}
        />
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
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}
