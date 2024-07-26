import React from 'react';

const FAQ = () => {
  return (
    <div className="bg-[#E8FBF4] p-10">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-white shadow-lg rounded-lg p-5">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-paper-plane text-blue-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 ml-4">How many messages can we send?</h3>
          </div>
          <p className="text-gray-600">
            This tool is strictly not for spamming. It should be used as a customer engagement tool. There are restrictions to stop you from spamming with this tool.
          </p>
          <p className="text-gray-600 mt-2">
            Spamming can get you banned from WhatsApp. See WhatsApp spamming rules <a href="https://example.com" className="text-blue-600">here</a>.
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-5">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-comments text-blue-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 ml-4">Why should we use WhatsApp over other mediums?</h3>
          </div>
          <p className="text-gray-600">
            WhatsApp has a very high engagement rate compared to other mediums. People consider WhatsApp to be a very personal medium of communication.
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-5">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-question-circle text-blue-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 ml-4">Are we related to WhatsApp?</h3>
          </div>
          <p className="text-gray-600">
            No. We are not part of WhatsApp Inc. This is an independent productivity Chrome extension that works on WhatsApp Web. Please follow WhatsApp policies and use this tool responsibly.
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-5">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-shield-alt text-blue-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 ml-4">How secure is this tool?</h3>
          </div>
          <p className="text-gray-600">
            Our tool uses end-to-end encryption to ensure that your messages and data are secure. We follow industry-standard security practices.
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-5">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-sync-alt text-blue-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 ml-4">Can I schedule messages?</h3>
          </div>
          <p className="text-gray-600">
            Yes, you can schedule messages to be sent at a later time. This feature allows you to plan your communication and marketing efforts in advance.
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-5">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-users text-blue-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 ml-4">Can I send messages to groups?</h3>
          </div>
          <p className="text-gray-600">
            Yes, our tool allows you to send messages to multiple WhatsApp groups, making it easy to manage group communications and reach a wider audience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
