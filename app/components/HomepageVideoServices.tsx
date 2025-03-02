import React from 'react';
import Link from 'next/link';

const services = [
  { href: '/event-video', icon: '/event_video_icon.png', title: 'EVENT', subtitle: 'VIDEO' },
  { href: '/aerial-production', icon: '/aerial_production_icon.png', title: 'AERIAL', subtitle: 'PRODUCTION' },
  { href: '/creative-studio', icon: '/creative_studio_icon.png', title: 'CREATIVE', subtitle: 'STUDIO' },
  { href: '/development-real-estate', icon: '/development_icon.png', title: 'DEVELOPMENT', subtitle: 'REAL ESTATE' },
  { href: '/corporate-video', icon: '/corporate_video_icon.png', title: 'CORPORATE', subtitle: 'VIDEO' },
  { href: '/content-library', icon: '/content_library_icon.png', title: 'CONTENT', subtitle: 'LIBRARY' },
];

const VideoServices = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center">
      <h2 className="text-center text-white text-3xl mb-8 font-bold">OUR VIDEO SERVICES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {services.map((service, index) => (
          <Link key={index} href={service.href} className="relative flex flex-col justify-center items-center p-6 rounded-lg text-center h-44 group">
            <div className="h-44 w-full">
              <img
                src={service.icon}
                alt={service.title}
                className="absolute inset-0 w-full h-44 object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="h-full absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20 rounded-lg" />
            </div>
            <p className="absolute top-4 text-white">{service.title}</p>
            <p className="relative text-white mt-32">{service.subtitle}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default VideoServices;