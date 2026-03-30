"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Properties', href: '/properties' },
    { name: 'Services', href: '/services' },
  ];

  return (
    <header className="w-full bg-[#141414] border-b border-[#262626] py-5 px-6 md:px-16 flex items-center justify-between sticky top-0 z-50">

      <Link href="/" className="flex items-center gap-2 group">
        <Image 
          src="/image/icons/logo.svg" 
          alt="Estatein Logo" 
          width={40} 
          height={40} 
          className="transition-transform group-hover:scale-105"
        />
        <span className="text-white font-bold text-xl tracking-tight">
          Estatein
        </span>
      </Link>

      <nav className="hidden md:flex items-center bg-[#0F0F0F] border border-[#262626] rounded-xl p-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive 
                  ? "text-white bg-[#1A1A1A] border border-[#262626] shadow-inner"
                  : "text-gray-400 hover:text-white hover:bg-[#1A1A1A]/50"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      <div className="flex items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/contact"
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 border ${
            pathname === '/contactPage' 
                ? "bg-white text-black border-white" 
                : "bg-[#141414] text-white border-[#262626] hover:bg-[#1A1A1A] hover:border-gray-500"
            }`}
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;