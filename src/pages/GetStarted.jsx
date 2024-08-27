import React from "react";

const GetStarted = () => {
  const handlePaymentClick = () => {
    // Redirect to your payment page (Razorpay or PayPal)
    const url = "https://www.paypal.com/checkoutnow"; // Replace this with your payment URL, e.g., Razorpay or PayPal
    window.open(url, "_blank");
  };

  return (
    <section
      className="text-white text-center py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/getstarted.png')" }}
    >
      <h1 className="text-5xl font-bold">
        Supercharge Your Marketing with Our WhatsApp Bulk Messaging Tool/Whatsapp automation tool
      </h1>
      <p className="text-xl mt-4">
        Effortlessly reach thousands of customers with just a few clicks. Simple, efficient, and highly effective.
      </p>
      <button
        onClick={handlePaymentClick}
        className="mt-8 inline-block bg-white text-blue-500 px-6 py-3 rounded-full font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      >
        Buy Now
      </button>
    </section>
  );
};

export default GetStarted;
