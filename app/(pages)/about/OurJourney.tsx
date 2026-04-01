"use client"; // Обязательно для анимаций

import Image from 'next/image';
import { motion } from 'framer-motion';

const stats = [
  { value: '200+', label: 'Happy Customers', icon: '/image/icons/grup-icon.svg' },
  { value: '10k+', label: 'Properties For Clients' },
  { value: '16+',  label: 'Years of Experience' },
];

// Варианты анимации для контейнера карточек (поочередное появление)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Задержка между появлением каждой карточки
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const OurJourney = () => {
  return (
    <section className="bg-[#141414] text-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Левая колонка */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <motion.span 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="text-gray-500 text-lg"
            >
              ✦
            </motion.span>
            <span className="text-gray-500 text-sm tracking-widest uppercase">Our Journey</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Our Journey
          </h2>

          <p className="text-gray-400 leading-relaxed text-base mb-10 max-w-lg">
            Our story is one of continuous growth and evolution. We started as a small team with big
            dreams, determined to create a real estate platform that transcended the ordinary. Over
            the years, we've expanded our reach, forged valuable partnerships, and gained the trust
            of countless clients.
          </p>

          {/* Карточки статистики с поочередным появлением */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5, borderColor: '#703BF7' }} // Эффект при наведении
                className="relative bg-[#1A1A1A] border border-[#262626] rounded-xl p-5 flex flex-col gap-1 transition-colors duration-300"
              >
                {stat.icon && (
                  <div className="absolute top-4 left-4">
                    <Image src={stat.icon} alt="" width={18} height={18} />
                  </div>
                )}
                <span className="text-white text-3xl font-bold mt-6">{stat.value}</span>
                <span className="text-gray-500 text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Правая колонка — изображение */}
        <motion.div 
          initial={{ x: 50, opacity: 0, scale: 0.9 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          <div
            className="relative w-full max-w-[520px] aspect-square rounded-3xl overflow-hidden border border-[#262626]"
            style={{
              background: `
                radial-gradient(ellipse at 50% 50%, #1e1e2e 0%, #141414 70%),
                repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 40px, #262626 41px, transparent 42px)
              `,
            }}
          >
            {/* Анимированный фон (пульсация) */}
            <motion.svg
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern id="wave" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <circle cx="40" cy="40" r="38" fill="none" stroke="#ffffff" strokeWidth="0.5" />
                  <circle cx="40" cy="40" r="28" fill="none" stroke="#ffffff" strokeWidth="0.5" />
                  <circle cx="40" cy="40" r="18" fill="none" stroke="#ffffff" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#wave)" />
            </motion.svg>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full relative"
            >
              <Image
                src="/image/home.png"
                alt="Hand holding a house model"
                fill
                className="object-cover relative z-10"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OurJourney;
