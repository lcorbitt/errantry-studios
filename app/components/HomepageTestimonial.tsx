'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    quote: "Errantry Studios has helped our construction company elevate our video presence with custom videos of all of our builds...Brandan makes it easy and is always ready to think through a new idea with us.",
    author: "MARKETING DIRECTOR",
    company: "COBALT VENTURES LLC.",
  },
  {
    quote: "The reviews we receive from their video services has allowed us to increase and improve our brand awareness, not to mention raise additional funds for our programs",
    author: "PATRICK WYNN - CEO",
    company: "BOYS & GIRLS CLUBS OF NORTH ALABAMA",
  },
  {
    quote: "Errantry Studios has done an outstanding job on our video marketing. They were able to showcase and establish the 'feel' of the home. Because of the video, we were able to sell the listing in 48 hours.",
    author: "LISA GASTON - REALTOR",
    company: "THE GASTON COLLECTIVE",
  }
];

const HomepageTestimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <section className="w-full pt-16 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="relative w-full">          
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="bg-white">
                  <div className="flex flex-col items-center text-center px-2 md:px-8">
                    <blockquote className="text-lg md:text-xl lg:text-2xl italic text-gray-700 mb-4 md:mb-6 font-bold leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="mt-4">
                      <p className="font-semibold text-gray-900 text-base md:text-lg">
                        {testimonial.author} | <span className="text-gray-600">{testimonial.company}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <img 
                        src="/google_stars.png" 
                        alt="5 star Google Review" 
                        className="h-6 md:h-8"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomepageTestimonial;