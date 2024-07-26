import React from "react";

const HowItWorks = () => {
  return (
    <div className="bg-[#E8FBF4] p-10">
      <h1 className="text-3xl font-bold text-center mb-6">How It Works?</h1>
      <p className="text-center mb-10 text-[#666666]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-col items-start space-y-6 lg:w-1/2">
          <div className="flex items-center space-x-3">
            <img
              src="/hw1.png"
              alt="Download and install"
              className="w-8 h-8"
            />
            <p className="text-lg text-[#004d40]">
              <strong>Download and install</strong> the software
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <img src="/hw2.png" alt="Setup" className="w-8 h-8" />
            <p className="text-lg text-[#004d40]">
              <strong>Setup</strong> your WhatsApp account
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <img
              src="/hw3.png"
              alt="Import or scrape contact list"
              className="w-8 h-8"
            />
            <p className="text-lg text-[#004d40]">
              <strong>Import or scrape</strong> contact list
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <img src="/hw4.png" alt="Create and send" className="w-8 h-8" />
            <p className="text-lg text-[#004d40]">
              <strong>Create and send</strong> your message campaigns
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <img src="/hw5.png" alt="Monitor and analyse" className="w-8 h-8" />
            <p className="text-lg text-[#004d40]">
              <strong>Monitor and analyse</strong> results
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-10 mt-10 lg:mt-0">
          <iframe
            className="w-full h-64 lg:h-96"
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

export default HowItWorks;
