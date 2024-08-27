import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://wa.me/9136614978`
      : `https://web.whatsapp.com/send?phone=9136614978`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 lg:px-8">
        <div className="md:w-1/3 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-4">
            WA Sender Tool
          </h1>
          <div className="flex justify-center md:justify-start mb-4">
            <button
              className="bg-gradient-to-r from-[#004F45] to-[#007249] text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex items-center"
              onClick={handleWhatsAppClick}
            >
              Connect on WhatsApp <FaWhatsapp className="ml-2" />
            </button>
          </div>
          <p className="text-[#606060] lg:w-[400px] font-bold text-[16px] mx-auto md:mx-0">
            Enhance WhatsApp Web with powerful features to boost customer
            engagement and elevate customer service.
          </p>
        </div>
        <div className="md:w-2/3 w-full">
          <iframe
            className="w-full h-64 md:h-full lg:w-[762px] px-3 lg:px-0 lg:h-[494px] mx-auto"
            src="https://www.youtube.com/embed/UnYh-yW9ZFY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Hero;
