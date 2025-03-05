'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface TestimonialProps {
  author: string;
  company: string;
  quote: string;
}

const Testimonial = ({ author, company, quote }: TestimonialProps) => {

  return (
    <section className="w-full py-14 px-32 flex flex-col justify-center bg-white slider-container">
      <div className="max-w-6xl mx-auto">
        <div className="px-4">
          <div className="bg-white mx-4">
            <div className="flex flex-col items-center text-center">
              <blockquote className="text-xl italic text-gray-700 mb-4 font-bold">
                "{quote}"
              </blockquote>
              <div className="mt-4">
                <p className="font-semibold text-gray-900">{author} | <span className="text-gray-600">{company}</span></p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <img 
                  src="/google_stars.png" 
                  alt="5 star Google Review" 
                  className="h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;