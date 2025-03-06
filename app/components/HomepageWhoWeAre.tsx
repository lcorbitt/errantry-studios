import React from 'react';
import Link from 'next/link';

const HomepageVideoServices = () => {
  return (
    <section className="relative w-full bg-black px-32">
      <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Image */}
        <div className="w-full h-full">
          <img 
            src="/who_we_are.png" 
            alt="Who We Are" 
            className="w-full h-full object-cover object-right"
            style={{objectPosition: "100% 50%"}} 
          />
        </div>

        <div className="w-full h-full text-center justify-center items-center flex flex-col gap-16">
          <div>
            <h2 className="text-center text-white text-3xl mb-8 font-bold">WHO ARE WE?</h2>
            <p className="text-white text-xl">Errantry Studios is a Middle Tennessee based video production and creative studio in Hendersonville, TN. We produce professional quality video content for a wide range of businesses within the corporate, marketing, real estate, and non-profit industries​. Additionally we offer studio rental services for creatives, professionals, influencers and more!</p>
          </div>

          <div>
            <h2 className="text-center text-white text-3xl mb-8 font-bold">OUR MISSION</h2>
            <p className="text-white text-xl">We are dedicated to providing film and media solutions that bridge the gap between corporate goals, creative aspirations, and community needs.</p>
          </div>

          <Link
            href="/about" 
            className="bg-cyan-600 text-white px-8 py-2 rounded-lg text-xl uppercase transition-all duration-500 w-fit hover:bg-black hover:text-cyan-600 border border-cyan-600"
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HomepageVideoServices;