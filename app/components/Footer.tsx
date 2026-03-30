"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Send, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const navColumns = [
  {
    title: 'Home',
    links: ['Hero Section', 'Features', 'Properties', 'Testimonials', 'FAQ'],
  },
  {
    title: 'About Us',
    links: ['Our Story', 'Our Team', 'Our Works', 'Our Values', 'Achievements'],
  },
  {
    title: 'Properties',
    links: ['Portfolio', 'Categories', 'For Sale', 'For Rent', 'New Listings'],
  },
  {
    title: 'Services',
    links: ['Valuation Mastery', 'Strategic Marketing', 'Negotiation', 'Closing Success', 'Property Management'],
  },
  {
    title: 'Contact Us',
    links: ['Contact Form', 'Our Offices', 'Support Center', 'Privacy Policy', 'Terms & Conditions'],
  },
];

const socials = [
  { icon: <Facebook className="w-4 h-4" />, label: 'Facebook' },
  { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
  { icon: <Twitter className="w-4 h-4" />, label: 'Twitter' },
  { icon: <Youtube className="w-4 h-4" />, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-[#141414] border-t border-[#262626] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 space-y-12">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12"
        >
          {/* Лого и подписка */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/image/icons/logo.svg" alt="Estatein" width={32} height={32} />
              <span className="text-white font-semibold text-lg">Estatein</span>
            </Link>

            <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#262626] rounded-xl px-4 py-3">
              <Mail className="w-4 h-4 text-gray-500 shrink-0" />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
              />
              <button className="w-8 h-8 rounded-lg bg-[#703BF7] flex items-center justify-center hover:bg-[#5f2de0] transition-colors shrink-0">
                <Send className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>

          {/* Навигационные колонки */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {navColumns.map((col) => (
              <div key={col.title} className="space-y-4">
                <p className="text-white font-semibold text-sm">{col.title}</p>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm transition-colors hover:text-white"
                        style={{ color: '#999999' }}
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Нижняя панель */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-[#262626] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm" style={{ color: '#999999' }}>
            @2023 Estatein. All Rights Reserved.{' '}
            <Link href="#" className="hover:text-white transition-colors underline underline-offset-2">
              Terms &amp; Conditions
            </Link>
          </p>

          <div className="flex gap-3">
            {socials.map((s) => (
              <button
                key={s.label}
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-[#262626] flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#703BF7] hover:border-[#703BF7] transition-colors"
              >
                {s.icon}
              </button>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
