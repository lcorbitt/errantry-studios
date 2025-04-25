'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full bg-white overflow-visible slider-container">
      <div className="max-w-7xl mx-auto py-16 px-4 lg:px-12">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-black">BRANDS WE HAVE WORKED WITH</h2>
        <div className="w-full relative">
          <style jsx global>{`
            .slick-dots {
              bottom: -30px !important;
            }
            .slick-dots li button:before {
              font-size: 12px !important;
              color: #000000 !important;
              opacity: 0.3 !important;
            }
            .slick-dots li.slick-active button:before {
              opacity: 0.8 !important;
            }
          `}</style>
          <Slider {...settings}>
            {brands.map((brand, index) => (
              <div key={index} className="flex justify-center items-center px-1 sm:px-2 md:px-4">
                <img 
                  src={brand.src} 
                  alt={brand.alt} 
                  className="h-12 sm:h-16 md:h-24 w-24 sm:w-32 md:w-48 object-contain max-w-full"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;