"use client";
import { useState } from "react";

import Section from "./Section";
import Play from "/hands-of-friends-frontend/public/img/play.svg";

import "next-cloudinary/dist/cld-video-player.css";

export default function Hero() {
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  const handleVideoPlay = () => {
    setVideoPlaying(true);
  };

  const handleVideoPause = () => {
    setVideoPlaying(false);
  };

  return (
    <>
      <Section className="mt-0 max-w-[1440px] mx-auto">
        <div className="relative mb-20">
          <div className="video-container relative">
            <div className="video-container relative mt-0 max-w-[1440px] mx-auto">
              <video
                width="100%"
                height="100%"
                src="https://res.cloudinary.com/dgkkn62i5/video/upload/v1706166292/test_video.mp4"
                controls
                poster="https://res.cloudinary.com/dgkkn62i5/image/upload/v1706174676/111_wlvg1h.png"
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
              ></video>

              {!isVideoPlaying && (
                <div
                  className="play-icon absolute inset-0 flex items-center justify-center "
                  style={{ pointerEvents: "none" }}
                >
                  <img src={Play.src} alt="Play Icon" />
                </div>
              )}
            </div>
            <div className="flex justify-center">
              <h2 className="absolute bottom-24 text-white text-4xl w-[799px]">
                БО "Міжнародний благодійний фонд "Руки друзів" реалізує проєкти
                з надання благодійної допомоги
              </h2>
            </div>
          </div>
        </div>
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
