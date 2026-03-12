"use client"; // Обязательно для использования хуков

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname(); // Получаем текущий путь (например, "/about")

  // Массив ссылок для удобства
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Properties', href: '/properties' },
    { name: 'Services', href: '/services' },
  ];

  return (
    <header className="w-full bg-[#141414] border-b border-[#262626] py-4 px-6 md:px-16 flex items-center justify-between">
      {/* Логотип */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#703BF7] rounded-full flex items-center justify-center">
         <div className="relative w-12 h-12 flex items-center justify-center">
             <Image 
                 src="/image/icons/logo.svg" 
                 alt="Estatein Logo" 
                 width={48} 
                 height={48} 
                 priority // Чтобы логотип загружался мгновенно
              />
         </div>
         <span className="text-white font-bold text-xl tracking-tight">
                 Estatein
         </span>
         </div>
    </div>

      {/* Навигация */}
      <nav className="hidden md:flex items-center gap-1 bg-[#0F0F0F] border border-[#262626] rounded-lg p-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-5 py-3 rounded-md transition-all ${
                isActive 
                  ? "text-white bg-[#1A1A1A] border border-[#262626]" // Стиль активной ссылки
                  : "text-gray-400 hover:text-white"                 // Стиль обычной ссылки
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Кнопка действия */}
      <div className="flex items-center">
        <Link 
          href="/contact" 
          className={`px-6 py-3 border rounded-lg transition-all ${
            pathname === '/contact' 
              ? "bg-white text-black" 
              : "bg-[#1A1A1A] text-white border-[#262626] hover:bg-[#262626]"
          }`}
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Header;