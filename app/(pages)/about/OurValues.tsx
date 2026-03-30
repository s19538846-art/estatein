"use client";

import { motion } from 'framer-motion';
import { Star, GraduationCap, Users } from 'lucide-react';

const values = [
  {
    title: 'Trust',
    description: 'Trust is the cornerstone of every successful real estate transaction.',
    icon: <Star className="w-5 h-5 text-white" />,
  },
  {
    title: 'Excellence',
    description: 'We set the bar high for ourselves. From the properties we list to the services we provide.',
    icon: <GraduationCap className="w-5 h-5 text-white" />,
  },
  {
    title: 'Client-Centric',
    description: 'Your dreams and needs are at the center of our universe. We listen, understand.',
    icon: <Users className="w-5 h-5 text-white" />,
  },
  {
    title: 'Our Commitment',
    description: 'We are dedicated to providing you with the highest level of service, professionalism, and support.',
    icon: <Star className="w-5 h-5 text-white" />,
  },
];

export default function OurValues() {
  return (
    <section className="bg-[#141414] text-white py-20 px-6 md:px-16 border-t border-[#262626] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 items-center">

        {/* Левая колонка — Плавный выезд слева */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="flex items-end gap-1">
            <Star className="w-3 h-3 text-gray-500 fill-gray-500" />
            <Star className="w-5 h-5 text-gray-400 fill-gray-400" />
            <Star className="w-3 h-3 text-gray-500 fill-gray-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">Our Values</h2>

          <p className="text-gray-400 leading-relaxed max-w-sm">
            Our story is one of continuous growth and evolution. We started as a small team
            with big dreams, determined to create a real estate platform that transcended the ordinary.
          </p>
        </motion.div>

        {/* Правая колонка — Плавное появление контейнера */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-[#262626] rounded-2xl overflow-hidden bg-[#1A1A1A] min-h-[470px] flex shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            {values.map((value, i) => {
              const isRight = i % 2 === 1;
              const isBottom = i >= 2;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ backgroundColor: "#1F1F1F" }}
                  className={[
                    'p-10 flex flex-col justify-center space-y-4 group transition-colors duration-300',
                    isRight ? 'md:border-l border-[#262626]' : '',
                    isBottom ? 'border-t border-[#262626]' : '',
                  ].join(' ')}
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="w-12 h-12 rounded-full border border-[#703BF7] flex items-center justify-center flex-shrink-0 bg-[#703BF7]/10 group-hover:bg-[#703BF7] transition-all duration-300"
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-white font-semibold text-xl group-hover:text-[#703BF7] transition-colors">{value.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}