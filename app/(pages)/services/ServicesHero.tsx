"use client";

import { motion } from 'framer-motion';

export default function ServicesHero() {
  return (
    <section className="
      relative /* Обязательно для абсолютного позиционирования фона внутри */
      bg-[#141414] 
      border-b border-[#262626] 
      overflow-hidden /* Чтобы свечение не вылезало за границы секции */
      
      /* Базовые отступы для мобильных */
      px-6 py-20 
      
      /* Специфические отступы из запроса для десктопа */
      md:pt-[150px] 
      md:pb-[100px] 
      md:pl-[162px] 
      md:pr-[400px]
    ">
      
      {/* Мягкое свечение слева (Backdrop Glow) */}
      <div 
        className="absolute inset-y-0 left-0 w-1/3 z-0 pointer-events-none opacity-30"
        style={{
          background: `
            radial-gradient(circle at 0% 50%, #703BF7 0%, transparent 70%),
            radial-gradient(circle at -20% 50%, rgba(112,59,247,0.5) 0%, transparent 80%)
          `,
          filter: 'blur(100px)', // Сильное размытие для мягкости
        }}
      />

      {/* Контент секции (выше свечения за счет z-10) */}
      <div className="relative z-10 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight max-w-4xl"
        >
          Elevate Your Real Estate Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm md:text-base leading-relaxed max-w-3xl"
          style={{ color: '#999999' }}
        >
          Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our
          comprehensive range of services, each designed to cater to your unique needs and dreams.
        </motion.p>
      </div>
    </section>
  );
}