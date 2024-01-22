import Link from "next/link";
import ArrowWhite from "@/assets/arrow-white.svg";
import ArrowBlue from "@/assets/arrow-blue.svg";

export default function BreadCrumbs({
  href,
  text,
  className,
  textColor,
  svgColor,
}) {
  const arrowIcon = svgColor === "blue" ? ArrowBlue : ArrowWhite;

  return (
    <Link href={href}>
      <div className={`flex gap-2 ${className}`}>
        <img src={arrowIcon.src} alt="arrow" />
        <p
          className={`text-xl ${
            textColor === "white" ? "text-white" : "deepBlue"
          }`}
        >
          {text}
        </p>
      </div>
    </Link>
  );
}
