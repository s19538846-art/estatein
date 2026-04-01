"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Share2, Star } from "lucide-react";
import React from "react";

// Кастомные SVG-иконки для соцсетей (Instagram, LinkedIn, Facebook)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function ContactCards() {
  const contactCards = [
    { icon: Mail, label: "Email", value: "info@estatein.com", href: "mailto:info@estatein.com" },
    { icon: Phone, label: "Phone", value: "+1 (123) 456-7890", href: "tel:+11234567890" },
    { icon: MapPin, label: "Location", value: "Main Headquarters", href: "#" },
    { icon: Share2, label: "Socials", value: "Connect with us", isSocials: true, href: "#" },
  ];

  return (
    <section className="bg-[#141414] text-white py-16 px-6 md:px-[162px] border-t border-[#262626]">
      <div className="max-w-[1920px] mx-auto space-y-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-gray-600 text-gray-600" />
            <Star className="w-4 h-4 fill-gray-500 text-gray-500" />
            <Star className="w-3 h-3 fill-gray-600 text-gray-600" />
          </div>
          <h2 className="text-4xl font-semibold">Get in Touch with Estatein</h2>
          <p className="leading-relaxed max-w-4xl text-sm text-[#999999]">
            Welcome to Estatein&apos;s contact page. We&apos;re here to assist you with any inquiries, 
            whether you&apos;re looking to buy, sell, or invest in real estate.
          </p>
        </motion.div>

        {/* 1. Сетка из 4-х карточек в ряд */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactCards.map((card, i) => (
            <motion.div
              key={card.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}

              className="group bg-[#141414] border border-[#262626] rounded-xl p-8 flex flex-col gap-6 hover:border-[#333333] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                {/* Иконка слева в кругах */}
                <div className="relative flex items-center justify-center w-12 h-12 shrink-0">
                  <div className="absolute inset-0 rounded-full border border-[#262626]" />
                  <div className="absolute inset-[6px] rounded-full border border-[#262626]" />
                  <div className="relative z-10 w-8 h-8 rounded-full bg-[#1A1A1A] border border-[#262626] flex items-center justify-center transition-all duration-300 group-hover:border-[#703BF7]/50 group-hover:shadow-[0_0_15px_rgba(112,59,247,0.3)]">
                    <card.icon className="w-4 h-4 text-[#703BF7]" />
                  </div>
                </div>
                <a 
                  href={card.href}
                  className="w-12 h-12 rounded-full border border-[#262626] bg-[#141414] flex items-center justify-center transition-all duration-300 group-hover:bg-[#703BF7] group-hover:border-[#703BF7]"
                >
                  <ArrowUpRight className="w-6 h-6 text-[#4D4D4D] group-hover:text-white transition-colors" />
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-[#999999] uppercase tracking-wider">{card.label}</p>
                {card.isSocials ? (
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full border border-[#262626] hover:text-[#703BF7] hover:border-[#703BF7] transition-all cursor-pointer"><InstagramIcon /></div>
                    <div className="p-2 rounded-full border border-[#262626] hover:text-[#703BF7] hover:border-[#703BF7] transition-all cursor-pointer"><LinkedInIcon /></div>
                    <div className="p-2 rounded-full border border-[#262626] hover:text-[#703BF7] hover:border-[#703BF7] transition-all cursor-pointer"><FacebookIcon /></div>
                  </div>
                ) : (
                  <p className="text-white text-sm font-medium">{card.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}