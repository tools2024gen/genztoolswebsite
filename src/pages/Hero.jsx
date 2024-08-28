import React from "react";

const Hero = () => {
  return (
    <div
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="container mx-auto flex flex-col items-center px-4 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-4">
          WA Sender Tool
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Enhance WhatsApp Web with powerful features to boost customer engagement and elevate customer service.
        </p>
        <div className="flex justify-center mb-4">
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="26TUJQQDM93YA" />
            <input type="hidden" name="currency_code" value="USD" />
            <button
              type="submit"
              className="bg-gradient-to-r text-[30px] from-[#004F45] to-[#007249] text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex items-center"
            >
              Buy Now at $49 only
            </button>
          </form>
        </div>
        
        {/* Star Ratings */}
        <div className="flex justify-center mb-4">
          {/* Use your preferred star icon or SVG here */}
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-yellow-400"
            >
              <path d="M12 .587l3.668 7.57 8.332 1.151-6.064 5.822 1.576 8.256L12 18.896l-7.512 4.49 1.576-8.256-6.064-5.822 8.332-1.151z" />
            </svg>
          ))}
        </div>
        
        {/* Trusted by Line */}
        <p className="text-gray-600 text-lg mb-8">
          Trusted by 15,000+ individuals & small businesses
        </p>

        {/* Video */}
        <div className="w-full mt-8">
          <iframe
            className="w-full h-64 md:h-96 lg:h-[494px] lg:w-[762px] mx-auto"
            src="https://www.youtube.com/embed/oaN8sIN2etE"
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
