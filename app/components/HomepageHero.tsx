import React from 'react';

const HomepageHero = () => {
  return (
    <section className="bg-black relative w-full h-[48rem] flex items-center justify-center">
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Site</h1>
        <p className="mt-4 text-lg">Your tagline or description goes here.</p>
      </div>
    </section>
  );
};

export default HomepageHero;