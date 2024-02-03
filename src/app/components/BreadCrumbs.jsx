"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function BreadCrumbs({ href, text, textColor, className }) {
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
        <p
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className={`flex justify-centre items-center mt-[57px] gap-2 text-xl ${textColor === "white" ? "text-white" : "deepBlue"
            } transition ${className}`}
          style={{
            color: isHovered
              ? textColor === "white"
                ? "#2563EB"
                : "#4C1D95"
              : textColor,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
          >
            <path
              d="M7.77934 14.03C7.63871 14.1704 7.44809 14.2493 7.24934 14.2493C7.05059 14.2493 6.85997 14.1704 6.71934 14.03L0.46934 7.78C0.32889 7.63937 0.25 7.44875 0.25 7.25C0.25 7.05125 0.32889 6.86062 0.46934 6.72L6.71934 0.469997C6.81101 0.371272 6.92762 0.299101 7.05686 0.261087C7.18611 0.223073 7.32322 0.220623 7.45374 0.253996C7.58427 0.28737 7.70338 0.35533 7.79852 0.450717C7.89366 0.546105 7.96131 0.665387 7.99434 0.795997C8.02776 0.926373 8.02543 1.06335 7.98759 1.19251C7.94976 1.32167 7.87782 1.43826 7.77934 1.53L2.80934 6.5H17.2493C17.4483 6.5 17.639 6.57902 17.7797 6.71967C17.9203 6.86032 17.9993 7.05108 17.9993 7.25C17.9993 7.44891 17.9203 7.63967 17.7797 7.78033C17.639 7.92098 17.4483 8 17.2493 8H2.80934L7.77934 12.97C7.91979 13.1106 7.99868 13.3012 7.99868 13.5C7.99868 13.6987 7.91979 13.8894 7.77934 14.03Z"
              fill="currentColor"
            />
          </svg>
          {text}
        </p>
      </Link>
    </div>
  );
}
