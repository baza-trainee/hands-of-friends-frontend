"use client";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const BaseModal = ({ onClose, children }) => {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  //Modal Escape close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const modalContent = (
    <div
      onClick={handleCloseClick}
      className="fixed z-20 top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(30,30,30,0.2)]"
    >
      {children}
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
};

export default BaseModal;
