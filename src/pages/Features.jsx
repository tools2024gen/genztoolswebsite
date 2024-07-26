import React from 'react';

const Features = () => {
  return (
    <div className="bg-[#E8FBF4] p-10">
      <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
      <div className="space-y-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h3 className="text-sm text-blue-600 font-bold uppercase">Highlight Chat and Privacy Option</h3>
            <h2 className="text-2xl font-bold text-gray-900">Highlight chat and privacy option.</h2>
            <p className="text-lg text-gray-600 mt-4">Add advanced privacy options that will allow you to blur out the screen and information from prying eyes.</p>
            <p className="text-lg text-gray-600 mt-2">You can blur out contact name, contact number, and other parts of the page separately.</p>
            <p className="text-lg text-gray-600 mt-2">You can also highlight unread chats with the extension.</p>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
          <img src="/AICANLogo.png" alt="AI Can" className="w-[400px] h-[400px] rounded-lg shadow-lg" />
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row-reverse items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h3 className="text-sm text-blue-600 font-bold uppercase">Send Customized Messages</h3>
            <h2 className="text-2xl font-bold text-gray-900">Send customized messages to your customers.</h2>
            <p className="text-lg text-gray-600 mt-4">Want to send messages to everyone in a contact list?</p>
            <p className="text-lg text-gray-600 mt-2">You can now upload a CSV and select the phone numbers directly from the extension. Then you can send the messages to everyone in the list.</p>
            <p className="text-lg text-gray-600 mt-2">Please note that there are restrictions here to stop spamming with these tools.</p>
            <p className="text-lg text-gray-600 mt-2"><a href="https://example.com" className="text-blue-600">WhatsApp sender</a> is for businesses that want to engage with their customers.</p>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
            <img src="/AICANLogo.png" alt="AI Can" className="w-[400px] h-[400px] rounded-lg shadow-lg" />
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h3 className="text-sm text-blue-600 font-bold uppercase">Scrape Google Map Data in Bulk</h3>
            <h2 className="text-2xl font-bold text-gray-900">Scrape Google Map Data in Bulk</h2>
            <p className="text-lg text-gray-600 mt-4">Collect valuable data from Google Maps in bulk. Gather information such as business names, addresses, and contact details for your marketing efforts.</p>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
          <img src="/AICANLogo.png" alt="AI Can" className="w-[400px] h-[400px] rounded-lg shadow-lg" />
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row-reverse items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h3 className="text-sm text-blue-600 font-bold uppercase">Scrape Emails and Contacts from Social Media</h3>
            <h2 className="text-2xl font-bold text-gray-900">Scrape Emails and Contacts from Social Media</h2>
            <p className="text-lg text-gray-600 mt-4">(LinkedIn, Facebook, Instagram, TikTok)</p>
            <p className="text-lg text-gray-600 mt-2">Extract emails and contacts from various social media platforms to build a comprehensive contact list for targeted marketing.</p>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
          <img src="/AICANLogo.png" alt="AI Can" className="w-[400px] h-[400px] rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
