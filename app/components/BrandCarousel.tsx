'use client';

import React from 'react';
import Slider from 'react-slick';

const brands = [
  { src: '/slide_1.png', alt: 'Slide 1' },
  { src: '/slide_2.png', alt: 'Slide 2' },
  { src: '/slide_3.png', alt: 'Slide 3' },
  { src: '/slide_4.png', alt: 'Slide 4' },
  { src: '/slide_5.png', alt: 'Slide 5' },
  { src: '/slide_6.png', alt: 'Slide 6' },
  { src: '/slide_7.png', alt: 'Slide 7' },
  { src: '/slide_8.png', alt: 'Slide 8' },
  { src: '/slide_9.png', alt: 'Slide 9' },
  { src: '/slide_10.png', alt: 'Slide 10' },
  { src: '/slide_11.png', alt: 'Slide 11' },
  { src: '/slide_12.png', alt: 'Slide 12' },
  { src: '/slide_13.png', alt: 'Slide 13' },
  { src: '/slide_14.png', alt: 'Slide 14' },
  { src: '/slide_15.png', alt: 'Slide 15' },
  { src: '/slide_16.png', alt: 'Slide 16' },
  { src: '/slide_17.png', alt: 'Slide 17' },
  { src: '/slide_18.png', alt: 'Slide 18' },
  
];

const BrandCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full p-16 flex flex-col justify-center bg-white slider-container">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8 text-black">BRANDS WE HAVE WORKED WITH</h2>
        <Slider {...settings} className="w-full">
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center px-4"> {/* Added px-4 for consistent horizontal padding */}
              <img src={brand.src} alt={brand.alt} className="h-24 object-contain" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BrandCarousel;