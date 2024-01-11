import Link from "next/link";
import Arrow from "@/assets/Frame.png";

export default function BreadCrumbs({ href, text }) {
  return (
    <Link className="block mt-[-68px] mb-[48px]" href={href}>
      <div className="flex gap-2">
        <img src={Arrow.src} alt="arrow" />

        <p className="text-xl text-deepBlue">{text}</p>
      </div>
    </Link>
  );
}
