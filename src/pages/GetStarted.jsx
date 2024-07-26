import React from "react";

const GetStarted = () => {
  const handleWhatsAppClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://wa.me/9136614978`
      : `https://web.whatsapp.com/send?phone=9136614978`;
    window.open(url, "_blank");
  };

  return (
    <section
      className="text-white text-center py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/getstarted.png')" }}
    >
      {" "}
      <h1 className="text-5xl font-bold">
        Boost Your Marketing with Our WhatsApp Bulk Messaging Tool
      </h1>
      <p className="text-xl mt-4">
        Reach thousands of customers in just a few clicks. Easy to use and
        highly efficient.
      </p>
      <button
        onClick={handleWhatsAppClick}
        className="mt-8 inline-block bg-white text-blue-500 px-6 py-3 rounded-full font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      >
        Get Started{" "}
      </button>
    </section>
  );
};

export default GetStarted;
