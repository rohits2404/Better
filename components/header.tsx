'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Buy', href: '/mortgage-calculator' },
    { name: 'Refinance', href: '/mortgage-calculator' },
    { name: 'HELOC', href: '/mortgage-calculator' },
    { name: 'Rates', href: '/mortgage-calculator' },
    { name: 'Better+', href: '/about-us' },
  ];

  return (
    <nav className="bg-accentPrimary absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-white font-extrabold text-[22px] tracking-tight">
              Better
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white/90 hover:text-white text-[15px] font-semibold transition-colors ${
                  pathname === item.href ? 'underline underline-offset-4' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-5">
            <Button
              variant="ghost"
              size="icon"
              className="text-white border border-white rounded-full w-10 h-10 p-0 hover:bg-white hover:text-accentPrimary transition"
            >
              <Phone className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              className="text-white text-[15px] hover:text-black font-medium"
            >
              <a href='/start'>Sign In</a>
            </Button>
            <Link href="/start">
              <Button className="bg-[#2DF294] hover:bg-[#2DF294]/90 text-black hover:text-white font-semibold rounded-full px-6 py-2 text-[15px] transition">
                Continue
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-green-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-green-900/90 backdrop-blur-md px-4 py-6 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-white/90 hover:text-white text-[16px] font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="border-t border-white/20 pt-4 space-y-3">
            <Button
              variant="ghost"
              className="w-full text-white hover:text-black text-[15px]"
            >
              Sign in
            </Button>
            <Link href="/start" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-[#2DF294] hover:bg-[#2DF294]/90 text-black font-semibold rounded-full text-[15px]">
                Continue
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}