import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const faqData = [
  {
    question: "What is WA Sender, and how does it work?",
    answer: "WA Sender is a tool designed to enhance your WhatsApp marketing by enabling you to send bulk messages, automate interactions, and manage contacts efficiently. It integrates seamlessly with WhatsApp Web to streamline your messaging process and improve engagement."
  },
  {
    question: "How do I install and set up WA Sender?",
    answer: "To install WA Sender, download the extension from our website and follow the installation instructions provided. Once installed, you can connect it to your WhatsApp Web account and start using its features. Detailed setup guides and tutorials are available on our Help Center."
  },
  {
    question: "Can I use WA Sender with multiple WhatsApp accounts?",
    answer: "Yes, WA Sender supports multiple WhatsApp accounts. You can switch between accounts and manage them all from a single interface."
  },
  {
    question: "How does the bulk messaging feature work?",
    answer: "The bulk messaging feature allows you to send personalized messages to multiple contacts simultaneously. You can upload a contact list and customize your messages to ensure effective communication with your audience."
  },
  {
    question: "Is my data secure with WA Sender?",
    answer: "Yes, we prioritize your data security. WA Sender uses encryption and secure protocols to ensure that your data is protected and kept confidential. We adhere to strict privacy policies to safeguard your information."
  },
  {
    question: "Can I schedule messages with WA Sender?",
    answer: "Absolutely. WA Sender lets you plan and schedule your WhatsApp campaigns, so your messages are sent at the optimal times to reach your audience effectively."
  },
  {
    question: "How do I extract emails and contact information from social media?",
    answer: "WA Sender offers tools to extract contact information from major social platforms like LinkedIn, Facebook, Instagram, and TikTok. You can collect valuable data to build a comprehensive contact list for targeted marketing."
  },
  {
    question: "What types of WhatsApp groups can I join using WA Sender?",
    answer: "WA Sender helps you discover and join relevant WhatsApp groups based on your interests and business needs. This allows you to expand your network and increase your brand's visibility within engaged communities."
  },
  {
    question: "How can I automate customer interactions with WA Sender?",
    answer: "With WA Sender's auto-responder bots, you can set up automated replies to handle common customer queries and interactions. This ensures timely and consistent communication without manual intervention."
  },
  {
    question: "Are there any limitations or restrictions with using WA Sender?",
    answer: "To prevent misuse and ensure compliance with WhatsApp's terms of service, WA Sender has certain limitations on the number of messages you can send and the frequency of interactions. These restrictions help maintain a positive user experience and prevent spamming."
  },
  {
    question: "What should I do if I encounter issues with WA Sender?",
    answer: "If you experience any issues with WA Sender, visit our Support Center for troubleshooting guides and contact our customer support team for assistance. We're here to help you resolve any problems promptly."
  },
  {
    question: "Can I try WA Sender before purchasing?",
    answer: "Yes, we offer a free trial period for you to explore WA Sender's features and see how it fits your needs. Sign up on our website to start your trial and experience the benefits of our tool firsthand."
  }
];

const FAQ = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFAQ = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 6) % faqData.length);
  };

  const prevFAQ = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 6 + faqData.length) % faqData.length
    );
  };

  return (
    <div className="bg-[#E8FBF4] p-10">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {faqData.slice(currentIndex, currentIndex + 6).map((faq, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-5">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <i className="fas fa-question-circle text-blue-600">WMT</i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">{faq.question}</h3>
            </div>
            <p className="text-gray-600">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={prevFAQ}
          className="bg-white p-3 rounded-full shadow-lg mx-2"
        >
          <FaArrowLeft className="text-blue-600" />
        </button>
        <button
          onClick={nextFAQ}
          className="bg-white p-3 rounded-full shadow-lg mx-2"
        >
          <FaArrowRight className="text-blue-600" />
        </button>
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
}

export default FAQ;
