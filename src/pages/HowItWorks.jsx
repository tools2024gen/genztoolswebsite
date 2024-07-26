import React from 'react';

const HowItWorks = () => {
  return (
    <div className="container mx-auto my-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-left mb-10 lg:mb-0">
          <ol className="list-decimal pl-5 mt-6 space-y-4 text-lg text-gray-700">
            <li>Download and install the software</li>
            <li>Set up your WhatsApp accounts</li>
            <li>Import or scrape contact lists</li>
            <li>Create and send your message campaigns</li>
            <li>Monitor and analyze results</li>
          </ol>
        </div>
        <div className="lg:w-1/2">
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
}

export default HowItWorks;
