'use client';

import React from 'react';
import Slider from 'react-slick';

const brands = [
  { src: '/slide_1.png', alt: 'Slide 1' },
  { src: '/slide_2.png', alt: 'Slide 2' },
  { src: '/slide_3.png', alt: 'Slide 3' },
  { src: '/slide_4.png', alt: 'Slide 4' },
  { src: '/slide_5.png', alt: 'Slide 5' }
];

const BrandCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <section className="w-full py-8 px-32 flex flex-col justify-center bg-white slider-container">
      <h2 className="text-center text-3xl font-bold mb-4 text-black">BRANDS WE HAVE WORKED WITH</h2>
      <Slider {...settings} className="w-full">
        {brands.map((brand, index) => (
          <div key={index} className="flex justify-center">
            <img src={brand.src} alt={brand.alt} className="h-24 object-contain" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BrandCarousel;