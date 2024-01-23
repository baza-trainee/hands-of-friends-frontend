"use client";
import { useState } from "react";
import Link from "next/link";
import ArrowWhite from "@/assets/arrow-white.svg";
import ArrowBlue from "@/assets/arrow-blue.svg";
import ArrowPurple from "@/assets/arrow-purple.svg";

export default function BreadCrumbs({
  href,
  text,
  className,
  textColor,
  svgColor,
}) {
  const defaultArrowIcon = svgColor === "blue" ? ArrowBlue : ArrowWhite;
  const hoverArrowIcon = svgColor === "blue" ? ArrowPurple : ArrowBlue;

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="display: inline-block ">
      <Link href={href}>
        <div
          className={`flex gap-2 display-block ${className}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <img
            src={isHovered ? hoverArrowIcon.src : defaultArrowIcon.src}
            alt="arrow"
          />
          <p
            className={`text-xl ${
              textColor === "white" ? "text-white" : "deepBlue"
            }`}
            style={{
              color: isHovered
                ? textColor === "white"
                  ? "#2563EB"
                  : "#4C1D95"
                : textColor,
            }}
          >
            {text}
          </p>
        </div>
      </Link>
    </div>
  );
}
