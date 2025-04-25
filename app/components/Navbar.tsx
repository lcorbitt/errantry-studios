'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'HOME' },
  { href: '#', label: 'SERVICES' },
  // { href: 'estv', label: 'ESTV' },
  { href: 'about', label: 'ABOUT' },
  { href: 'contact', label: 'CONTACT' },
];

const serviceLinks = [
  { href: 'events', label: 'Events' },
  { href: 'real-estate', label: 'Real Estate & Development' },
  { href: 'aerial', label: 'Aerial' },
  { href: 'content-library', label: 'Content Library' },
  { href: 'corporate', label: 'Corporate' },
  { href: 'studio', label: 'Studio' },
];

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isContentVisible, setContentVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  let timeoutId: NodeJS.Timeout;

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 250); // Delay of 0.25 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdownVisible(false);
    }, 200);
  };

  const handleServiceLinkClick = () => {
    setDropdownVisible(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`px-4 py-4 flex items-center justify-between sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black/80' : 'bg-black'}`}>
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <Link href="/" className={`flex items-center transition-opacity duration-1000 ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Image src="/logo.png" alt="Logo" width={300} height={300} className="mr-6" priority />
        </Link>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none hover:cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`flex relative transition-opacity duration-1000 ${isContentVisible ? 'opacity-100' : 'opacity-0'} hidden lg:flex`}>
          {links.map((link) => (
            <NavLink 
              key={link.href} 
              href={link.href} 
              label={link.label} 
              onMouseEnter={link.label === 'SERVICES' ? handleMouseEnter : undefined}
              onMouseLeave={link.label === 'SERVICES' ? handleMouseLeave : undefined}
              pathname={pathname}
            />
          ))}
          <li className="relative">
            {isDropdownVisible && (
              <ul 
                className="absolute top-full -left-[435px] mt-2 bg-black text-white shadow-lg rounded z-50 p-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {serviceLinks.map((service) => (
                  <li key={service.href} className="p-2">
                    <Link 
                      href={service.href} 
                      onClick={handleServiceLinkClick} // Close dropdown on click
                      className={`hover:text-cyan-600 transition-colors duration-300 ease-in-out ${pathname === `/${service.href}` ? 'text-cyan-600' : 'text-white/80'}`}
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
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 right-0 bg-black text-white w-full p-4 cursor-pointer hover:cyan-600">
          <ul>
            {links.map((link) => (
              <li key={link.href} className="p-2">
                <Link href={link.href} onClick={toggleMenu} className="block hover:text-cyan-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, label, onMouseEnter, onMouseLeave, pathname }: { href: string; label: string; onMouseEnter?: () => void; onMouseLeave?: () => void; pathname: string }) => {
  return (
    <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="relative">
      <Link href={href} className={`hover:text-cyan-600 transition-colors duration-300 ease-in-out ml-8 ${label === 'SERVICES' ? '' : 'cursor-pointer'} ${pathname.replace(/^\//, '') === href ? 'text-cyan-600' : 'text-white/80'}`}>
        {label}
      </Link>
    </li>
  );
};

export default Navbar;
