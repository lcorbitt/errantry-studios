import React from 'react';
import Link from 'next/link';

const services = [
  { href: '/events', icon: '/video_service_1.png', title: 'EVENT', subtitle: 'VIDEO' },
  { href: '/aerial-production', icon: '/video_service_3.png', title: 'AERIAL', subtitle: 'PRODUCTION' },
  { href: '/creative-studio', icon: '/video_service_5.png', title: 'CREATIVE', subtitle: 'STUDIO' },
  { href: '/real-estate', icon: '/video_service_4.png', title: 'VIDEO', subtitle: 'REAL ESTATE' },
  { href: '/corporate-video', icon: '/video_service_2.png', title: 'CORPORATE', subtitle: 'VIDEO' },
  { href: '/content-library', icon: '/video_service_6.png', title: 'CONTENT', subtitle: 'LIBRARY' },
];

const HomepageVideoServices = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full">
        <h2 className="text-center text-white text-2xl md:text-3xl mb-12 font-bold">OUR VIDEO SERVICES</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={service.href} 
              className="group relative overflow-hidden rounded-lg aspect-square lg:aspect-video"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center p-3 md:p-4 bg-black/60 backdrop-blur-sm">
                <p className="text-sm md:text-lg lg:text-xl font-bold text-white drop-shadow-lg">{service.title}</p>
                <p className="text-sm md:text-lg lg:text-xl font-bold text-cyan-400 drop-shadow-lg">{service.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageVideoServices;