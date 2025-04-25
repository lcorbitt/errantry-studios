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
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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

  const toggleMobileServices = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  return (
    <nav className={`w-full bg-black md:py-4 sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black/80' : 'bg-black'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between w-full">
        <Link href="/" className={`flex items-center transition-opacity duration-1000 ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Image src="/logo.png" alt="Logo" width={300} height={300} className="mr-6" priority />
        </Link>
        <div className="flex items-center">
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
                        onClick={handleServiceLinkClick}
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
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white hover:cursor-pointer focus:outline-none hover:text-cyan-600 transition-colors duration-300 p-2"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-6 relative flex items-center justify-center">
                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-3' : 'rotate-0 top-1'}`} />
                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-3' : 'rotate-0 top-5'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu with Animation */}
      <div 
        className={`lg:hidden fixed left-0 top-16 w-full bg-black transform transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <ul className="py-4">
            {links.map((link) => (
              <li key={link.href} className="border-b border-white/10 last:border-0">
                {link.label === 'SERVICES' ? (
                  <div>
                    <button
                      onClick={toggleMobileServices}
                      className="w-full hover:cursor-pointer p-2 flex items-center justify-between text-white/80 hover:text-cyan-600 transition-colors duration-300"
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <ul className="pl-4 py-2 bg-black/50">
                        {serviceLinks.map((service) => (
                          <li key={service.href} className="p-2">
                            <Link 
                              href={service.href} 
                              onClick={toggleMenu}
                              className="block text-white/80 hover:text-cyan-600 transition-colors duration-300"
                            >
                              {service.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link 
                    href={link.href} 
                    onClick={toggleMenu} 
                    className="block p-2 text-white/80 hover:text-cyan-600 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
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
