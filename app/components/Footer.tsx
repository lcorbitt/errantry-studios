'use client';

import Link from 'next/link';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white/80 py-14 px-32 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        <div className="mb-4 md:mb-0">
          <p  className='text-sm'>919 West Main St. Ste. U3</p>
          <p  className='text-sm'>Hendersonville, TN 37075</p>
          <p  className='text-sm'><a href="mailto:info@errantrystudios.com" className="hover:text-cyan-600 transition-colors duration-300 ease-in-out">info@errantrystudios.com</a></p>
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link href="https://www.facebook.com/ErrantryStudios" target="_blank" className="hover:text-cyan-600 transition-colors duration-300 ease-in-out">
            <FaFacebook size={24} />
          </Link>
          <Link href="https://www.youtube.com/@errantrystudios346" target="_blank" className="hover:text-cyan-600 transition-colors duration-300 ease-in-out">
            <FaYoutube size={24} />
          </Link>
          <Link href="https://www.instagram.com/errantrystudios/?hl=en" target="_blank" className="hover:text-cyan-600 transition-colors duration-300 ease-in-out">
            <FaInstagram size={24} />
          </Link>
        </div>
        <div className="text-center md:text-right">
          <p  className='text-sm'>© 2024 Errantry Studios | all rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;