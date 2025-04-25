'use client';

import React from 'react';
import YouTube from 'react-youtube';

const HomepageProductionReel = () => {
  return (
    <section className="w-full bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 text-white">
          PRODUCTION REEL
        </h2>
        
        <div className="relative w-full pb-[56.25%]">
          <div className="absolute inset-0">
            <YouTube 
              videoId="xR2mftY_TgM" 
              opts={{
                width: '100%',
                height: '100%',
                playerVars: {
                  autoplay: 0,
                  modestbranding: 1,
                  controls: 1,
                  rel: 0,
                },
              }}
              className="w-full h-full"
              iframeClassName="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageProductionReel;