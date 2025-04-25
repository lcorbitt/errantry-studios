import React from 'react';
import Image from 'next/image';
const HomepageHero = () => {
  return (
    <section className="bg-black relative w-full h-[48rem] flex items-center justify-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="relative z-10 text-white text-center">
        <Image 
          src="/logo.png" 
          alt="Logo" 
          width={400} 
          height={400} 
          className="mx-auto"
          priority 
        />
      </div> */}
    </section>
  );
};

export default HomepageHero;