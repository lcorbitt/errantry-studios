'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '#home', label: 'HOME' },
  { href: '#services', label: 'SERVICES' },
  { href: '#estv', label: 'ESTV' },
  { href: '#about', label: 'ABOUT' },
  { href: '#contact', label: 'CONTACT' },
];

const serviceLinks = [
  { href: '#events', label: 'Events' },
  { href: '#development', label: 'Development & Real Estate' },
  { href: '#aerial', label: 'Aerial' },
  { href: '#content-library', label: 'Content Library' },
  { href: '#corporate', label: 'Corporate' },
  { href: '#studio', label: 'Studio' },
];

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdownVisible(false);
    }, 200); // Adjust the delay as needed
  };

  return (
    <nav className="bg-black px-16 py-4 flex items-center justify-between">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={300} height={300} className="mr-6" />
        </div>
        <ul className="flex space-x-10 relative">
          {links.map((link) => (
            <NavLink 
              key={link.href} 
              href={link.href} 
              label={link.label} 
              onMouseEnter={link.label === 'SERVICES' ? handleMouseEnter : undefined}
              onMouseLeave={link.label === 'SERVICES' ? handleMouseLeave : undefined}
            />
          ))}
          <li className="relative">
            {isDropdownVisible && (
              <ul 
                className="absolute top-full -left-[435px] mt-2 bg-black text-white shadow-lg rounded z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {serviceLinks.map((service) => (
                  <li key={service.href} className="px-4 py-2">
                    <Link 
                      href={service.href} 
                      className="hover:text-cyan-400 text-white/80 transition-colors duration-300 ease-in-out"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

const NavLink = ({ href, label, onMouseEnter, onMouseLeave }: { href: string; label: string; onMouseEnter?: () => void; onMouseLeave?: () => void }) => {
  return (
    <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="relative">
      <Link href={href} className="hover:text-cyan-400 text-white/80 transition-colors duration-300 ease-in-out">
        {label}
      </Link>
    </li>
  );
};

export default Navbar;