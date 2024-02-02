import React from 'react';
import Link from "next/link";
import clsx from "clsx";

export default function Action({ onClick, children, className, href, rel, target }) {
  const Action = href ? Link : "button";
  const additionalProps = Action === Link ? { href, rel, target } : { onClick };

  return (
    <Action
      className={clsx(
        "py-4 transition font-body text-white text-xl font-normal rounded-md border-2 border-transparent hover:bg-transparent hover:border-solid hover:border-2",
        className
      )}
      {...additionalProps}
    >
      {children}
    </Action>
  );
};