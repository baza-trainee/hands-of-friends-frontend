"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { clsx } from "clsx";

const BaseModal = ({ isOpen, onClose, children, className }) => {
  const modalRoot = document.querySelector("#modal-root");

  const handleBackdropClick = (e) => {
    e.target === e.currentTarget ? onClose() : null;
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.key === "Escape" ? onClose() : null;
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return modalRoot ? (
    createPortal(
      <>
        {isOpen && (
          <div
            className={clsx(
              "fixed z-20 top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(30,30,30,0.2)]",
              className
            )}
            onClick={handleBackdropClick}
          >
            {children}
          </div>
        )}
      </>,
      modalRoot
    )
  ) : (
    <h2>Oops!!! We have some problem!!</h2>
  );
};

export default BaseModal;