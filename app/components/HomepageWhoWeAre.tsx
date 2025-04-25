import React from 'react';
import Link from 'next/link';

const HomepageWhoWeAre = () => {
  return (
    <section className="max-w-7xl mx-auto  relative w-full bg-black px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Image */}
        <div className="w-full h-[300px] md:h-full order-1 md:order-none">
          <img 
            src="/who_we_are.png" 
            alt="Who We Are" 
            className="w-full h-full object-cover shadow-lg"
            style={{objectPosition: "50% 50%"}} 
          />
        </div>

        <div className="w-full h-full flex flex-col justify-center gap-8 md:gap-12 lg:gap-16 order-2 md:order-none py-4">
          <div className="text-center md:text-left">
            <h2 className="text-white text-2xl md:text-3xl mb-4 md:mb-6 font-bold">WHO ARE WE?</h2>
            <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed">
              Errantry Studios is a Middle Tennessee based video production and creative studio in Hendersonville, TN. We produce professional quality video content for a wide range of businesses within the corporate, marketing, real estate, and non-profit industries​. Additionally we offer studio rental services for creatives, professionals, influencers and more!
            </p>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-white text-2xl md:text-3xl mb-4 md:mb-6 font-bold">OUR MISSION</h2>
            <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed">
              We are dedicated to providing film and media solutions that bridge the gap between corporate goals, creative aspirations, and community needs.
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <Link
              href="/about" 
              className="bg-cyan-600 text-white px-6 md:px-8 py-2 rounded-lg text-lg md:text-xl uppercase transition-all duration-500 hover:bg-black hover:text-cyan-600 border border-cyan-600 hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageWhoWeAre;