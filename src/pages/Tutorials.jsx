import React from "react";

const Tutorials = () => {
  const videos = [
    {
      title: "How to Install WhatsApp Marketing tool",
      link: "https://www.youtube.com/embed/UnYh-yW9ZFY",
    },
    {
      title: "How to send Bulk whatsapp Messages",
      link: "https://www.youtube.com/embed/oaN8sIN2etE",
    },
    {
      title: "How to send Bulk messages in Groups",
      link: "https://www.youtube.com/embed/XLYezL-nEwI",
    },
    {
      title: "How to use Multiple WhatsApp Accounts",
      link: "https://www.youtube.com/embed/RQ6Oam0Dhi0",
    },
    {
      title: "How to grab contact list",
      link: "https://www.youtube.com/embed/khJFFDjTT9M",
    },
    {
      title: "How to send bulk Whatsapp Messages by Contact",
      link: "https://www.youtube.com/embed/wEnbVaQB3Cg",
    },
    {
      title: "How to Send Audio Messages in WhatsApp Campaign",
      link: "https://www.youtube.com/embed/0B4YivAEvcQ",
    },
    {
      title: "How to Schedule a Campaign",
      link: "https://www.youtube.com/embed/dex20d9BL-0",
    },
    {
      title: "How to Scrape Google Map Data in Bulk",
      link: "https://www.youtube.com/embed/dNSa3l8APVU",
    },
    {
      title: "How to Scape Emails and Contacts from Social Media (Linkedin, Facebook, Instagram, Tiktok)",
      link: "https://www.youtube.com/embed/-Ovf43vZpis",
    },
    {
      title: "How to scrape Bulk Emails and Contacts from Websites",
      link: "https://www.youtube.com/embed/J9NAYGooqvA",
    },
    {
      title: "Hidden tricks you must know",
      link: "https://www.youtube.com/embed/7agcM6MimrA",
    },
    {
      title: "How to ad Key Markers (WhatsApp Antiban Trick)",
      link: "https://www.youtube.com/embed/bhPsPMHQLQM",
    },
    {
      title: "How to use Whatsapp Warmer (WhatsApp Antiban Trick)",
      link: "https://www.youtube.com/embed/IRSQGDFl4A4",
    },
    {
      title: "How to send multi message campaign (Whatsapp Antiban Trick)",
      link: "https://www.youtube.com/embed/lQRfQeC7XnQ",
    },
    {
      title: "How to Setup WhatsApp Auto Responder Bot",
      link: "https://www.youtube.com/embed/xUjdtD7dWjM",
    },
    {
      title: "How to Use Auto Responder Bot",
      link: "https://www.youtube.com/embed/C33XElb0_qA",
    },
    {
      title: "How to find Whatsapp groups",
      link: "https://www.youtube.com/embed/j1HTwMxoenw",
    },
    {
      title: "How to Extract WhatsApp Business Profiles",
      link: "https://www.youtube.com/embed/rsIEXrNrCaA",
    },
    {
      title: "WhatsApp Marketing Tool: How to Extract Community members and send messages to them",
      link: "https://www.youtube.com/embed/T0Y8tqlfsvA",
    },
    {
      title: "How to Invite Group Members",
      link: "https://www.youtube.com/embed/48OSJ1m7vmI",
    },
    {
      title: "How to generate WhatsApp groups in Bulk",
      link: "https://www.youtube.com/embed/HYShIqRSPF8",
    },
    {
      title: "How to Bulk Add Group Members Without Saving Number",
      link: "https://www.youtube.com/embed/TzjtA8tG-es",
    },
    {
      title: "How to Grab WhatsApp Group Links From Web",
      link: "https://www.youtube.com/embed/SykNHmV5SUQ",
    },
    {
      title: "How to Filter Numbers Quickly",
      link: "https://www.youtube.com/embed/BfJFOAACijY",
    },
    {
      title: "How to use Polls with whatsapp BOT",
      link: "https://www.youtube.com/embed/nZf0s3Ig_-w",
    },
    {
      title: "How to Get Poll Results",
      link: "https://www.youtube.com/embed/3-bfOLOb90Q",
    },
    {
      title: "How to update Chrome Driver",
      link: "https://www.youtube.com/embed/liCv-far7jU",
    },
    {
      title: "how to resolve Chrome Driver Issue on Windows 7 and Windows 8",
      link: "https://www.youtube.com/embed/ObjRzNc0Z9g",
    },
    {
      title: "How to update ChromeDriver Easy way v2 7 3 +",
      link: "https://www.youtube.com/embed/eiz9vZS600Y",
    },
    {
      title: "How to Internal software update",
      link: "https://www.youtube.com/embed/7scajcFdKQk",
    },
  ];

  return (
    <div className="container mx-auto my-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        WhatsApp Marketing Tool Tutorials
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {videos.map((video, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="w-full h-64 lg:h-96 relative">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={video.link}
                title={`YouTube video player - ${video.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-xl font-semibold mt-4 text-center px-4 py-2 bg-gray-100 rounded-b-lg">
              {video.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
