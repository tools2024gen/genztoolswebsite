import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Popup = ({ onClose }) => {
  const handleWhatsAppClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://wa.me/9136614978`
      : `https://web.whatsapp.com/send?phone=9136614978`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <img
            src="/AICANLogo.png"
            alt="Popup"
            className="mb-4 w-[500px] h-[500px]"
          />
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md"
          >
            <FaWhatsapp className="mr-2" /> Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
