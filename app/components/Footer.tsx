"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Send, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const footerLinks = [
    {
      title: "Home",
      links: ["Hero Section", "Features", "Properties", "Testimonials", "FAQ’s"],
    },
    {
      title: "About Us",
      links: ["Our Story", "Our Works", "How It Works", "Our Team", "Our Clients"],
    },
    {
      title: "Properties",
      links: ["Portfolio", "Categories"],
    },
    {
      title: "Services",
      links: ["Valuation Mastery", "Strategic Marketing", "Negotiation Wizardry", "Closing Success", "Property Management"],
    },
    {
      title: "Contact Us",
      links: ["Contact Form", "Our Offices"],
    },
  ];

  return (
    <footer className="bg-[#141414] text-white pt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        
        {/* Секция CTA */}
        <div className="relative border-y border-[#262626] py-16 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/image/abstract-design.png')] bg-cover bg-center" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <h2 className="text-3xl md:text-5xl font-semibold">Start Your Real Estate Journey Today</h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Your dream property is just a click away. Whether you&apos;re looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way.
            </p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 bg-[#703BF7] text-white px-6 py-4 rounded-xl font-medium whitespace-nowrap transition-colors hover:bg-[#5b2fd1]"
          >
            Explore Properties
          </motion.button>
        </div>

        {/* Основная навигация */}
        <div className="py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* LOGO и Подписка */}
          <div className="lg:col-span-3 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-[#703BF7] p-2 rounded-lg transition-transform group-hover:rotate-12">
                <Image 
                  src="/image/logo.svg" 
                  alt="logo" 
                  width={24} 
                  height={24} 
                />
              </div>
              <span className="text-xl font-bold tracking-tight">Estatein</span>
            </Link>
            
            <div className="relative">
              <div className="flex items-center gap-2 bg-[#141414] border border-[#262626] rounded-xl p-3 px-4 focus-within:border-[#703BF7] transition-all">
                <input 
                  type="email" 
                  placeholder="Enter Your Email" 
                  className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none text-white placeholder:text-gray-500"
                />
                <button className="text-white hover:text-[#703BF7] transition-colors">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Ссылки */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {footerLinks.map((column, idx) => (
              <div key={idx} className="space-y-5">
                <h3 className="text-gray-500 font-medium text-sm">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link href="#" className="text-gray-300 hover:text-[#703BF7] transition-colors text-sm">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright и Соцсети */}
      <div className="bg-[#1A1A1A] py-6 px-6 md:px-16 border-t border-[#262626]">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
            <p>©2026 Estatein. All Rights Reserved.</p>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>

          <div className="flex items-center gap-3">
            {[Facebook, Linkedin, Twitter, Youtube].map((Icon, i) => (
              <Link 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#141414] flex items-center justify-center border border-[#262626] text-white hover:bg-[#703BF7] hover:border-[#703BF7] transition-all"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}