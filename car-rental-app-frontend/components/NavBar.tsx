'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '#cars', label: 'Cars' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="CarRental Logo" width={85} height={85} />
          <span className="text-2xl font-extrabold text-gray-900">Ally's Auto Rentals</span>
        </Link>

        {/* Menu Items */}
        <div className="space-x-8 hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition ${
                pathname === item.href
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/login"
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Sign In
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-gray-700 text-2xl">&#9776;</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
