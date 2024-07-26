import React from 'react';

const ContactUs = () => {
  const handleWhatsAppClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://wa.me/9136614978`
      : `https://web.whatsapp.com/send?phone=9136614978`;
    window.open(url, '_blank');
  };

  return (
    <div className="container mx-auto my-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">Contact Us on WhatsApp</h2>
      <div className="mt-10 flex justify-center">
        <button
          onClick={handleWhatsAppClick}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          Chat with Us on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
