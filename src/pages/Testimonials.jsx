import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "Great extension. Love the feature that allows me to add text snippets :) Very helpful for when we have repetitive texts to write.",
    author: "Linter E.",
    rating: "5 out of 5 star rating",
  },
  {
    text: "This tool has significantly improved our customer engagement. The bulk messaging feature is a game-changer.",
    author: "Sarah P.",
    rating: "4.8 out of 5 star rating",
  },
  {
    text: "The WhatsApp scraper tool is fantastic. It helped us build a comprehensive contact list in no time.",
    author: "James R.",
    rating: "5 out of 5 star rating",
  },
  {
    text: "Highly recommend this tool for any business looking to streamline their WhatsApp marketing.",
    author: "Emily W.",
    rating: "4.9 out of 5 star rating",
  },
  {
    text: "The scheduling feature is amazing. It allows us to plan our campaigns in advance and execute them flawlessly.",
    author: "Michael T.",
    rating: "5 out of 5 star rating",
  },
  {
    text: "This tool saved us a lot of time and effort. It's very user-friendly and efficient.",
    author: "Laura H.",
    rating: "4.7 out of 5 star rating",
  },
  {
    text: "Excellent customer support and a great tool for businesses. Highly recommended!",
    author: "Daniel C.",
    rating: "5 out of 5 star rating",
  },
  {
    text: "The analytics feature provides great insights into our campaigns. Very useful.",
    author: "Sophia L.",
    rating: "4.8 out of 5 star rating",
  },
  {
    text: "A must-have tool for businesses using WhatsApp for marketing. Very effective.",
    author: "Mark D.",
    rating: "4.9 out of 5 star rating",
  },
  {
    text: "Easy to use and very reliable. The bulk messaging feature is especially useful.",
    author: "Natalie G.",
    rating: "5 out of 5 star rating",
  },
  {
    text: "The contact management feature is very convenient. It keeps everything organized.",
    author: "Steve B.",
    rating: "4.8 out of 5 star rating",
  },
  {
    text: "Great value for the price. It has everything we need for our WhatsApp marketing.",
    author: "Olivia P.",
    rating: "4.9 out of 5 star rating",
  },
  {
    text: "The user interface is intuitive and easy to navigate. Very happy with this tool.",
    author: "Jack M.",
    rating: "4.7 out of 5 star rating",
  },
  {
    text: "The bulk messaging feature is a game changer for our marketing campaigns.",
    author: "Emma R.",
    rating: "5 out of 5 star rating",
  },
  {
    text: "This tool is a lifesaver! The email scraping feature has allowed us to build targeted marketing lists effortlessly. Highly recommend!",
    author: "Anna G.",
    rating: "5 out of 5 star rating",
  },
  {
    text: "I've been using this tool for a few weeks now, and it's fantastic! The contact extraction is seamless and incredibly accurate.",
    author: "Tom S.",
    rating: "5 out of 5 star rating",
  },
  {
    text: "The ability to automate messages and scrape data from social media has transformed our outreach strategy. A must-have for any marketer.",
    author: "Kumar L.",
    rating: "5 out of 5 star rating",
  },
  {
    text: "Outstanding tool! The bulk messaging feature is incredibly efficient and saves us a ton of time. Worth every penny.",
    author: "Ali M.",
    rating: "5 out of 5 star rating",
  },
  {
    text: "This tool has made customer engagement so much easier. The text snippets feature is especially useful for repetitive tasks.",
    author: "Nirmal K.",
    rating: "5 out of 5 star rating",
  },
  {
    text: "Fantastic extension with excellent features. The WhatsApp data scraper works perfectly for building a comprehensive contact list.",
    author: "Mary B.",
    rating: "5 out of 5 star rating",
  },
  {
    text: "I love how easy it is to use this tool. It has streamlined our marketing efforts and significantly improved our campaign performance.",
    author: "Sophia T.",
    rating: "5 out of 5 star rating",
  },
  {
    text: "Exceptional tool for businesses looking to enhance their marketing strategies. The bulk messaging and data scraping features are top-notch.",
    author: "Josh C.",
    rating: "5 out of 5 star rating",
  },
  {
    text: "This extension is incredibly helpful. The ability to add and reuse text snippets has saved us so much time and effort.",
    author: "Ava H.",
    rating: "5 out of 5 star rating",
  },
  {
    text: "Highly effective tool with impressive features. The WhatsApp scraper and bulk messaging options are game-changers for our business.",
    author: "Noah J.",
    rating: "5 out of 5 star rating",
  },
  {
    text: "An essential tool for our marketing team. The data scraping and bulk messaging features have greatly improved our outreach efforts.",
    author: "Nitin W.",
    rating: "5 out of 5 star rating",
  },
  {
    text: "Wonderful tool with a user-friendly interface. It has made managing our marketing campaigns much more efficient and effective.",
    author: "Lucas P.",
    rating: "5 out of 5 star rating",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 4 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-[#E8FBF4]  py-20">
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-3xl font-bold text-center mb-10">Customer says</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto max-w-6xl">
          {testimonials
            .slice(currentIndex, currentIndex + 4)
            .map((testimonial, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <div className="text-left">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-5xl text-gray-300">“</span>
                  </div>
                  <p className="text-lg text-gray-600">{testimonial.text}</p>
                  <p className="mt-4 text-gray-900 font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="text-blue-600">
                    <a href="https://example.com">{testimonial.rating}</a>
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center mt-8 md:hidden">
          <button
            onClick={prevTestimonial}
            className="bg-white p-3 rounded-full shadow-lg mx-2"
          >
            <FaArrowLeft className="text-blue-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-white p-3 rounded-full shadow-lg mx-2"
          >
            <FaArrowRight className="text-blue-600" />
          </button>
        </div>
        <div className="absolute inset-y-0 left-0 hidden md:flex items-center">
  <button
    onClick={prevTestimonial}
    className="bg-white p-3 rounded-full shadow-lg ml-4"  // Added margin-left
  >
    <FaArrowLeft className="text-blue-600" />
  </button>
</div>
<div className="absolute inset-y-0 right-0 hidden md:flex items-center">
  <button
    onClick={nextTestimonial}
    className="bg-white p-3 rounded-full shadow-lg mr-4"  // Added margin-right
  >
    <FaArrowRight className="text-blue-600" />
  </button>
</div>

      </div>
    </div>
  );
};

export default Testimonials;
