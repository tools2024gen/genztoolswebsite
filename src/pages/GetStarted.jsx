import React from "react";

const GetStarted = () => {
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

      {/* Centered Button */}
      <div className="flex justify-center items-center mt-8 mb-4">
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="26TUJQQDM93YA" />
          <input type="hidden" name="currency_code" value="USD" />
          <button
            type="submit"
            className="text-[30px] bg-white text-green-900 font-bold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex items-center"
          >
            Buy Now at $49 only
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetStarted;
