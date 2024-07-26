import React from "react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://wa.me/9136614978`
      : `https://web.whatsapp.com/send?phone=9136614978`;
    window.open(url, "_blank");
  };

  return (
    <div className="container mx-auto my-20 px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            WA Sender Tool
          </h1>
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-4"
            onClick={handleWhatsAppClick}
          >
            Let's Connect on WhatsApp{" "}
          </button>
          <p className="text-gray-700 lg:w-[400px] text-lg">
            Add additional features on top of WhatsApp Web to help you with
            customer engagement and customer service.
          </p>
        </div>
        <div className="md:w-1/2">
          <iframe
            className="w-full h-64 md:h-96"
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
