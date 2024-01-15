"use client";
import ReactPlayer from "react-player";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function Hero() {
  return (
    <>
      {/* <ReactPlayer
        controls="true"
        width="100%"
        height="100%"
        url="https://res.cloudinary.com/dgkkn62i5/video/upload/1_hnfjx5.mp4"
      />
      <div className="flex justify-center">
        <h2 className="absolute bottom-20 text-white text-4xl w-[799px]">
          БО "Міжнародний благодійний фонд "Руки друзів" реалізує проєкти з
          надання благодійної допомоги
        </h2>
      </div> */}

      <CldVideoPlayer
        logo={{
          imageUrl:
            "https://res.cloudinary.com/colbycloud-next-cloudinary/image/upload/v1676058142/assets/space-jelly-cosmo-helmet.svg",
          onClickUrl: "https://spacejelly.dev",
        }}
        width="1280"
        height="650"
        src="1_hnfjx5"
      />
      <div className="flex justify-center mb-20">
        <h2 className="absolute bottom-24 text-white text-4xl w-[799px]">
          БО "Міжнародний благодійний фонд "Руки друзів" реалізує проєкти з
          надання благодійної допомоги
        </h2>
      </div>

      <iframe
        width="1280"
        height="650"
        src="https://www.youtube.com/embed/UYXcryt21m8?rel=0&controls=0&modestbranding=1"
      ></iframe>
      <div className="flex justify-center mb-20">
        <h2 className="absolute bottom-24 text-white text-4xl w-[799px]">
          БО "Міжнародний благодійний фонд "Руки друзів" реалізує проєкти з
          надання благодійної допомоги
        </h2>
      </div>
    </>
  );
}
