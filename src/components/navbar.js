'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

const links = [
    { name: 'About', href: '#about' }, // ✅ anchor link
  { name: 'Services', href: '#services' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Contact', href: '#contact' },
];


  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/image.png" alt="Logo" width={70} height={50} />
          <div className="leading-tight">
            <h1 className="text-lg font-bold text-gray-800">Dr. Serena Blake</h1>
            <p className="text-xs text-gray-600 -mt-1">Clinical Psychologist</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-700 hover:text-blue-600">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden bg-white px-4 pb-4 space-y-2">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="block text-gray-700 hover:text-blue-600">
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
