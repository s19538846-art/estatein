"use client";

import { Store, CircleDollarSign, Building2, Sun, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { icon: <Store className="w-7 h-7 text-[#703BF7]" />,           title: 'Find Your Dream Home' },
  { icon: <CircleDollarSign className="w-7 h-7 text-[#703BF7]" />, title: 'Unlock Property Value' },
  { icon: <Building2 className="w-7 h-7 text-[#703BF7]" />,        title: 'Effortless Property Management' },
  { icon: <Sun className="w-7 h-7 text-[#703BF7]" />,             title: 'Smart Investments, Informed Decisions' },
];

export default function ServicesGrid() {
  return (
    <section className="bg-[#141414] border-b border-[#262626]">
      <div className="max-w-[1920px] mx-auto">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#262626]"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative bg-[#141414] p-10 md:p-14 flex flex-col items-center justify-center gap-8 cursor-pointer transition-all duration-500 hover:bg-[#1A1A1A]"
            >
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-[#262626] bg-[#141414] flex items-center justify-center transition-all duration-300 group-hover:bg-[#703BF7] group-hover:border-[#703BF7] shadow-sm">
                <ArrowUpRight className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute w-32 h-32 rounded-full border border-[#262626] opacity-40 group-hover:opacity-100 transition-opacity" />
                <div className="absolute w-24 h-24 rounded-full border border-[#262626] opacity-60 group-hover:border-[#703BF7]/30 transition-all" />
                
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#262626] flex items-center justify-center 
                                transition-all duration-300 group-hover:border-[#703BF7] group-hover:shadow-[0_0_25px_rgba(112,59,247,0.35)]">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-white font-medium text-center text-lg leading-tight max-w-[200px] transition-colors duration-300 group-hover:text-[#703BF7]">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}