"use client";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const BaseModal = ({ isOpen, onClose, children }) => {
  const modalRoot = document.querySelector("#modal-root");

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  //Modal Escape close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
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
            className="fixed z-20 top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(30,30,30,0.2)]"
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
