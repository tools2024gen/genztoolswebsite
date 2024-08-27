import React from "react";

const Features = () => {
  return (
    <div className="bg-[#E8FBF4] p-6 md:p-10 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">
        Features
      </h2>
      <div className="space-y-14 md:space-y-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
            <h3 className="text-xs md:text-sm text-blue-600 font-bold uppercase">
              Secure Communication, Enhanced Focus
            </h3>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">
              Highlight chat and privacy option.
            </h2>
            <p className="text-base md:text-lg text-gray-600 mt-4">
              Take control of your WhatsApp experience with WA Sender's advanced
              privacy features.
            </p>
            <p className="text-base md:text-lg text-gray-600 mt-2">
              Blur sensitive information on demand, customise your privacy
              settings, and never miss an important message with our chat
              highlighting feature.
            </p>
            <p className="text-base md:text-lg text-gray-600 mt-2">
              Work confidently in any environment, knowing your conversations
              are secure and your priorities are clear.
            </p>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
            <img
              src="/AICANLogo.png"
              alt="AI Can"
              className="w-64 h-64 md:w-[400px] md:h-[400px] rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
            <h3 className="text-xs md:text-sm text-blue-600 font-bold uppercase">
              Personal Touch at Scale
            </h3>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">
              Send customized messages to your customers.
            </h2>
            <p className="text-base md:text-lg text-gray-600 mt-4">
              Transform your customer outreach with WA Sender's powerful
              customization tools.
            </p>
            <p className="text-base md:text-lg text-gray-600 mt-2">
              Upload your contact list via CSV, craft personalised messages for
              each recipient, and send them all with just a few clicks.
            </p>
            <p className="text-base md:text-lg text-gray-600 mt-2">
              It's not just bulk messaging – it's building meaningful
              connections with every customer, efficiently and effectively.
            </p>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
            <img
              src="/AICANLogo.png"
              alt="AI Can"
              className="w-64 h-64 md:w-[400px] md:h-[400px] rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
            <h3 className="text-xs md:text-sm text-blue-600 font-bold uppercase">
              Location Intelligence Made Easy
            </h3>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">
              Scrape Google Map Data in Bulk
            </h2>
            <p className="text-base md:text-lg text-gray-600 mt-4">
              Unlock a treasure trove of business information with WA Sender's
              Google Maps scraping feature.
            </p>
            <p className="text-base md:text-lg text-gray-600 mt-2">
              Effortlessly collect names, addresses, and contact details of
              businesses in your target areas.
            </p>
            <p className="text-base md:text-lg text-gray-600 mt-2">
              Turn this valuable data into qualified leads, market insights, and
              targeted marketing campaigns that drive real results for your
              business.
            </p>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
            <img
              src="/AICANLogo.png"
              alt="AI Can"
              className="w-64 h-64 md:w-[400px] md:h-[400px] rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
            <h3 className="text-xs md:text-sm text-blue-600 font-bold uppercase">
              Unify Your Social Media Intelligence
            </h3>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">
              Scrape Emails and Contacts from Social Media
            </h2>
            <p className="text-base md:text-lg text-gray-600 mt-4">
              Break down platform barriers with WA Sender's comprehensive social
              media scraping capabilities.
            </p>
            <p className="text-base md:text-lg text-gray-600 mt-2">
              Extract valuable email addresses and contact information from
              LinkedIn, Facebook, and Instagram to build robust, targeted
              marketing lists. Seamlessly integrate this data into your WhatsApp
              campaigns for a truly omnichannel marketing approach that reaches
              your audience through their preferred channels.
            </p>
            <p className="text-base md:text-lg text-gray-600 mt-2">
              Boost your email marketing efforts and expand your reach by
              tapping into the vast networks of professional and social
              connections.
            </p>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
            <img
              src="/AICANLogo.png"
              alt="AI Can"
              className="w-64 h-64 md:w-[400px] md:h-[400px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
