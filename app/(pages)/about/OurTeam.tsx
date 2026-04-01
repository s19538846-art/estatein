"use client";

import { Star, Twitter, Send } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const team = [
  { name: 'Max Mitchell',   role: 'Founder',                     img: '/image/img1.png' },
  { name: 'Sarah Johnson',  role: 'Chief Real Estate Officer',   img: '/image/img2.png' },
  { name: 'David Brown',    role: 'Head of Property Management', img: '/image/img3.png' },
  { name: 'Michael Turner', role: 'Legal Counsel',               img: '/image/img1.png' },
];

export default function OurTeam() {
  return (
    <section className="bg-[#141414] text-white py-20 px-6 md:px-16 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto space-y-12">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <div className="flex items-end gap-1">
            <Star className="w-3 h-3 text-gray-500 fill-gray-500" />
            <Star className="w-5 h-5 text-gray-400 fill-gray-400" />
            <Star className="w-3 h-3 text-gray-500 fill-gray-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold">Meet the Estatein Team</h2>
          <p className="text-gray-400 leading-relaxed max-w-2xl">
            At Estatein, our success is driven by the dedication and expertise of our team. Get to
            know the people behind our mission to make real estate dreams a reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#1A1A1A] border border-[#262626] rounded-2xl p-6 flex flex-col items-center gap-4"
            >
              {/* Фото + Twitter */}
              <div className="relative w-full">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                  <Image src={member.img} alt={member.name} fill className="object-cover" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#703BF7] flex items-center justify-center border-2 border-[#1A1A1A]">
                  <Twitter className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Имя и должность */}
              <div className="pt-5 text-center space-y-1">
                <p className="text-white font-semibold text-base">{member.name}</p>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>

              {/* Say Hello */}
              <button className="w-full flex items-center justify-between bg-[#141414] border border-[#262626] rounded-xl px-4 py-3 hover:bg-[#262626] transition-colors mt-auto">
                <span className="text-white text-sm font-medium">Say Hello 👋</span>
                <div className="w-7 h-7 rounded-full bg-[#703BF7] flex items-center justify-center">
                  <Send className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
