import React from "react";

const Features = () => {
  // Array of image paths
  const images = Array.from({ length: 25 }, (_, index) => `/${index + 1}.png`);

  return (
    <div className="bg-[#E8FBF4]  p-6 md:p-10 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">
        Bonus Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={image}
              alt={`Feature ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-8 mb-4">
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
    </div>
  );
};

export default Features;
