import React from 'react';

const Tiles = () => {
  return (
    <div className="container mx-auto my-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Check out our other pages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="bg-white shadow-lg rounded-lg p-5 text-center">
          <img src="/aican.png" alt="Logo" className="w-full h-32 object-cover rounded-t-lg" />
          <div className="p-5">
            <span className="text-sm text-green-600 font-bold uppercase">Sender</span>
            <h3 className="text-xl font-bold text-gray-900 mt-2">Check out our WA Sender site.</h3>
            <p className="text-gray-600 mt-2">Get details about using WA sender part of our extension.</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full mt-4">Check WA Sender</button>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 text-center">
          <img src="/aican.png" alt="Logo" className="w-full h-32 object-cover rounded-t-lg" />
          <div className="p-5">
            <span className="text-sm text-green-600 font-bold uppercase">WhatsApp Web</span>
            <h3 className="text-xl font-bold text-gray-900 mt-2">WhatsApp Web Tool</h3>
            <p className="text-gray-600 mt-2">Get details about using WhatsApp Web for sending messages.</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full mt-4">WhatsApp Web</button>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 text-center">
          <img src="/aican.png" alt="Logo" className="w-full h-32 object-cover rounded-t-lg" />
          <div className="p-5">
            <span className="text-sm text-green-600 font-bold uppercase">WA Business</span>
            <h3 className="text-xl font-bold text-gray-900 mt-2">Use with WA Business</h3>
            <p className="text-gray-600 mt-2">Want to use our tool with WA Business? Check it out here.</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full mt-4">WhatsApp Business</button>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 text-center">
          <img src="/aican.png" alt="Logo" className="w-full h-32 object-cover rounded-t-lg" />
          <div className="p-5">
            <span className="text-sm text-green-600 font-bold uppercase">Campaign</span>
            <h3 className="text-xl font-bold text-gray-900 mt-2">Schedule Campaigns</h3>
            <p className="text-gray-600 mt-2">Plan and schedule your WhatsApp campaigns for optimal timing.</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full mt-4">Schedule Now</button>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 text-center">
          <img src="/aican.png" alt="Logo" className="w-full h-32 object-cover rounded-t-lg" />
          <div className="p-5">
            <span className="text-sm text-green-600 font-bold uppercase">Data</span>
            <h3 className="text-xl font-bold text-gray-900 mt-2">Scrape Google Map Data</h3>
            <p className="text-gray-600 mt-2">Collect valuable data from Google Maps in bulk.</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full mt-4">Scrape Now</button>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 text-center">
          <img src="/aican.png" alt="Logo" className="w-full h-32 object-cover rounded-t-lg" />
          <div className="p-5">
            <span className="text-sm text-green-600 font-bold uppercase">Emails</span>
            <h3 className="text-xl font-bold text-gray-900 mt-2">Scrape Emails and Contacts</h3>
            <p className="text-gray-600 mt-2">(LinkedIn, Facebook, Instagram, TikTok)</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full mt-4">Scrape Now</button>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 text-center">
          <img src="/aican.png" alt="Logo" className="w-full h-32 object-cover rounded-t-lg" />
          <div className="p-5">
            <span className="text-sm text-green-600 font-bold uppercase">Groups</span>
            <h3 className="text-xl font-bold text-gray-900 mt-2">Find WhatsApp Groups</h3>
            <p className="text-gray-600 mt-2">Discover and join relevant WhatsApp groups to expand your reach.</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full mt-4">Find Now</button>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 text-center">
          <img src="/aican.png" alt="Logo" className="w-full h-32 object-cover rounded-t-lg" />
          <div className="p-5">
            <span className="text-sm text-green-600 font-bold uppercase">Bots</span>
            <h3 className="text-xl font-bold text-gray-900 mt-2">Use Auto Responder Bots</h3>
            <p className="text-gray-600 mt-2">Automate your responses with easy-to-set-up auto-responder bots.</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full mt-4">Set Up Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tiles;
