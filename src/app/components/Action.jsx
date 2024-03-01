import React from "react";
import Link from "next/link";
import clsx from "clsx";

export default function Action({
  onClick,
  children,
  className,
  href,
  rel,
  target,
  textColor,
}) {
  const ActionComponent = href ? Link : "button" || "submit";
  const additionalProps = href ? { href, rel, target } : { onClick };

  return (
    <ActionComponent
      className={clsx(
        "py-4 transition font-body text-xl font-normal antialiased rounded-md border-2 hover:bg-transparent hover:border-solid hover:border-2",
        { "text-white": textColor !== "black" },
        { "text-black": textColor === "black" },
        className
      )}
      {...additionalProps}
    >
      {children}
    </ActionComponent>
  );
}
