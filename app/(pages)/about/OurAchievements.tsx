"use client";

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const achievements = [
  {
    title: '3+ Years of Excellence',
    description:
      "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
  },
  {
    title: 'Happy Clients',
    description:
      'Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.',
  },
  {
    title: 'Industry Recognition',
    description:
      "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
  },
];

export default function OurAchievements() {
  return (
    <section className="bg-[#141414] text-white py-20 px-6 md:px-16 border-t border-[#262626] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Заголовок — Появление сверху вниз */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-5"
        >
          <div className="flex items-end gap-1">
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-3 h-3 text-gray-500 fill-gray-500" />
            </motion.div>
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            >
              <Star className="w-5 h-5 text-gray-400 fill-gray-400" />
            </motion.div>
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            >
              <Star className="w-3 h-3 text-gray-500 fill-gray-500" />
            </motion.div>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold">Our Achievements</h2>

          <p className="text-gray-400 leading-relaxed max-w-2xl">
            Our story is one of continuous growth and evolution. We started as a small team with big
            dreams, determined to create a real estate platform that transcended the ordinary.
          </p>
        </motion.div>

        {/* Сетка карточек с эффектом Scale-up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.2, 
                type: "spring", 
                stiffness: 100, 
                damping: 15 
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-[#1A1A1A] border border-[#262626] rounded-2xl p-8 space-y-4 relative group"
            >
              {/* Скрытый градиент при наведении */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#703BF7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-white text-2xl font-semibold leading-snug relative z-10 group-hover:text-[#703BF7] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed relative z-10 group-hover:text-gray-400 transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
