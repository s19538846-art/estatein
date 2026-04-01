"use client";

import { motion } from "framer-motion";
import { Star, BarChart3, PieChart, Coins, Megaphone } from "lucide-react";

const cards = [
  {
    icon: BarChart3,
    title: "Valuation Mastery",
    description: "We employ cutting-edge techniques to accurately assess your property's value, ensuring you get the best possible price.",
  },
  {
    icon: PieChart,
    title: "Strategic Marketing",
    description: "Our targeted marketing campaigns reach the right buyers, maximizing exposure and generating qualified leads.",
  },
  {
    icon: Coins,
    title: "Negotiation Wizardry",
    description: "Our skilled negotiators work tirelessly to secure the best terms, protecting your interests throughout the process.",
  },
  {
    icon: Megaphone,
    title: "Closing Success",
    description: "We guide you through every step of the closing process, ensuring a smooth and successful transaction.",
  },
];

function IconBadge({ Icon }: { Icon: React.ElementType }) {
  return (
    <div className="relative flex items-center justify-center w-12 h-12 shrink-0">
      <div className="absolute inset-0 rounded-full border border-[#262626]" />
      <div className="absolute inset-[6px] rounded-full border border-[#262626]" />
      
      {/* Эффект свечения иконки при наведении на родительскую карточку (group-hover) */}
      <motion.div 
        variants={{
          hover: { scale: 1.3, opacity: 0.2, filter: "blur(12px)" }
        }}
        className="absolute inset-0 rounded-full bg-[#703BF7] opacity-0 transition-all duration-500"
      />

      <div className="relative z-10 w-8 h-8 rounded-full bg-[#1A1A1A] border border-[#262626] flex items-center justify-center transition-all duration-300 group-hover:border-[#703BF7]/50 group-hover:shadow-[0_0_15px_rgba(112,59,247,0.3)]">
        <Icon className="w-4 h-4 text-[#703BF7]" />
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.21, 0.45, 0.32, 0.9] },
  }),
};

export default function UnlockValue() {
  return (
    <section className="bg-[#141414] text-white py-20 px-6 md:px-[162px] border-t border-[#262626]">
      <div className="max-w-[1920px] mx-auto space-y-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <div className="flex items-end gap-1">
            <Star className="w-3 h-3 text-gray-500 fill-gray-500" />
            <Star className="w-5 h-5 text-gray-400 fill-gray-400" />
            <Star className="w-3 h-3 text-gray-500 fill-gray-500" />
          </div>
          <h2 className="text-4xl font-semibold">Unlock Property Value</h2>
          <p className="leading-relaxed max-w-4xl text-sm text-[#999999]">
            Selling your property should be a rewarding experience, and at Estatein, we make sure it is. 
            Our Property Selling Service is designed to maximize the value of your property.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Первые 3 карточки (верхний ряд) */}
          {cards.slice(0, 3).map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="group bg-[#141414] border border-[#262626] rounded-xl p-8 space-y-5 cursor-pointer transition-all duration-300 hover:bg-[#1c1c1c] hover:border-[#333333] hover:-translate-y-2"
            >
              <div className="flex items-center gap-4">
                <IconBadge Icon={card.icon} />
                <h3 className="text-white font-semibold text-lg">{card.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#999999]">{card.description}</p>
            </motion.div>
          ))}

          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="group bg-[#141414] border border-[#262626] rounded-xl p-8 space-y-5 cursor-pointer transition-all duration-300 hover:bg-[#1c1c1c] hover:border-[#333333] hover:-translate-y-2"
          >
            <div className="flex items-center gap-4">
              <IconBadge Icon={cards[3].icon} />
              <h3 className="text-white font-semibold text-lg">{cards[3].title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-[#999999]">{cards[3].description}</p>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 relative overflow-hidden rounded-xl border border-[#262626] p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
            style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #111111 100%)" }}
          >
            <svg className="absolute inset-0 w-full h-full opacity-[0.1] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="arcs-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 A 100 100 0 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" />
                  <path d="M 100 20 A 80 80 0 0 0 20 100" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#arcs-grid)" />
            </svg>

            <div className="relative z-10 space-y-3 max-w-xl">
              <h3 className="text-white text-2xl font-semibold">Unlock the Value of Your Property Today</h3>
              <p className="text-sm text-[#999999]">Ready to sell? Let our experts guide you to the best outcome.</p>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 shrink-0 px-8 py-4 rounded-lg border border-[#262626] bg-[#141414] text-white text-sm font-medium transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}