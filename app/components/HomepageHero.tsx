import React from 'react';

const HomepageHero = () => {
  return (
    <section className="bg-black relative w-full h-screen flex items-center justify-center">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default HomepageHero;