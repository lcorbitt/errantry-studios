import React from 'react';
import Link from 'next/link';

const services = [
  { href: '/events', icon: '/video_service_1.png', title: 'EVENT', subtitle: 'VIDEO' },
  { href: '/aerial-production', icon: '/video_service_2.png', title: 'AERIAL', subtitle: 'PRODUCTION' },
  { href: '/creative-studio', icon: '/video_service_3.png', title: 'CREATIVE', subtitle: 'STUDIO' },
  { href: '/real-estate', icon: '/video_service_4.png', title: 'DEVELOPMENT', subtitle: 'REAL ESTATE' },
  { href: '/corporate-video', icon: '/video_service_5.png', title: 'CORPORATE', subtitle: 'VIDEO' },
  { href: '/content-library', icon: '/video_service_6.png', title: 'CONTENT', subtitle: 'LIBRARY' },
];

const HomepageVideoServices = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-black">
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

export default HomepageVideoServices;