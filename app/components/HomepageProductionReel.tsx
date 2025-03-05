'use client';

import React from 'react';
import YouTube from 'react-youtube';

const HomepageProductionReel = () => {
  return (
    <section className="w-full px-32 flex flex-col justify-center bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          PRODUCTION REEL
        </h2>
        
        <div className="aspect-video w-full h-[400px]">
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
    </section>
  );
};

export default HomepageProductionReel;