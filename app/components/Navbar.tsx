import Image from 'next/image';
import Link from 'next/link';

const links = [
  { href: '#home', label: 'HOME' },
  { href: '#services', label: 'SERVICES' },
  { href: '#estv', label: 'ESTV' },
  { href: '#about', label: 'ABOUT' },
  { href: '#contact', label: 'CONTACT' },
];

const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={50} height={50} className="mr-4" />
        <h1 className="text-white text-lg">Your Brand</h1>
      </div>
      <ul className="flex space-x-10">
        {links.map((link) => (
          <NavLink key={link.href} href={link.href} label={link.label} />
        ))}
      </ul>
    </nav>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <li>
      <Link href={href} className="text-cyan-400 hover:text-white transition-colors duration-300 ease-in-out">
        {label}
      </Link>
    </li>
  );
};

export default Navbar;