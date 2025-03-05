'use client';

import React from 'react';

const images = [
  { src: '/bts_1.png', alt: 'Behind the scenes 1' },
  { src: '/bts_2.png', alt: 'Behind the scenes 2' },
  { src: '/bts_3.png', alt: 'Behind the scenes 3' },
  { src: '/bts_4.png', alt: 'Behind the scenes 4' },
  { src: '/bts_5.png', alt: 'Behind the scenes 5' },
  { src: '/bts_6.png', alt: 'Behind the scenes 6' },
  { src: '/bts_7.png', alt: 'Behind the scenes 7' },
  { src: '/bts_8.png', alt: 'Behind the scenes 8' },
];

const HomepageBehindTheScenes = () => {
  return (
    <section className="w-full px-32 py-14 flex flex-col justify-center bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">BEHIND THE SCENES</h2>
        
        <div className="grid grid-cols-4 grid-rows-2 gap-2">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageBehindTheScenes;