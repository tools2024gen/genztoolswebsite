import React from "react";
import ContactUs from "./ContactUs";
import Features from "./Features";
import Hero from "./Hero";
import Tiles from "./Tiles";
import FAQ from "./FAQ";
import Testimonials from "./Testimonials";
import HowItWorks from "./HowItWorks";
import GetStarted from "./GetStarted";
const Home = () => {
  return (
    <div>
      <Hero />
      <GetStarted />

      <Features />
      <Tiles />
      <FAQ />
      <Testimonials />
      <HowItWorks />
      <section>
        <div className="bg-[#E8FBF4] p-10">
          <h2 className="text-3xl font-bold text-center mb-10">Tutorials</h2>
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="lg:w-3/4 w-full">
              <iframe
                className="w-full h-64 lg:h-96 rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/videoseries?list=PL5EhzS3PKOc1WDkDcIyxBjRKS86X_U5t8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <a
              href="/tutorials"
              className="bg-gradient-to-r from-[#004F45] to-[#007249] text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Watch complete Playlist{" "}
            </a>
          </div>
        </div>
      </section>
      <ContactUs />
    </div>
  );
};

export default Home;
