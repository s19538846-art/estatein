"use client";

import { motion } from "framer-motion";
import { Star, BarChart, Lightbulb, Zap, Sun } from "lucide-react";

const cards = [
  {
    icon: BarChart,
    title: "Market Insight",
    description:
      "Stay ahead with real-time market analysis and data-driven insights that help you identify the best investment opportunities before the competition.",
  },
  {
    icon: Zap,
    title: "ROI Assessment",
    description:
      "We evaluate every investment through a rigorous ROI lens, ensuring your capital works harder and delivers measurable, sustainable returns.",
  },
  {
    icon: Lightbulb,
    title: "Customized Strategies",
    description:
      "No two investors are alike. We craft personalized investment strategies aligned with your financial goals, risk tolerance, and timeline.",
  },
  {
    icon: Sun,
    title: "Diversification Mastery",
    description:
      "Reduce risk and maximize growth by building a well-balanced portfolio across property types, locations, and market segments.",
  },
];

function IconBadge({ Icon }: { Icon: React.ElementType }) {
  return (
    <div className="relative flex items-center justify-center w-12 h-12 shrink-0">
      <div className="absolute inset-0 rounded-full border border-[#2a2a2a] group-hover:border-purple-500/40 transition-colors duration-300" />
      <div className="absolute inset-[6px] rounded-full border border-[#2a2a2a] group-hover:border-purple-500/30 transition-colors duration-300" />
      <div className="relative z-10 w-7 h-7 rounded-full bg-[#1a1a2e] group-hover:bg-purple-900/40 flex items-center justify-center transition-colors duration-300">
        <Icon className="w-3.5 h-3.5 text-purple-400 group-hover:text-[#703BF7] transition-colors duration-300" />
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function SmartInvestments() {
  return (
    <section className="bg-[#141414] text-white py-20 px-6 md:px-16 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Left column — header + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1 flex flex-col gap-8"
          >
            {/* Header */}
            <div className="space-y-5">
              <div className="flex items-end gap-1">
                <Star className="w-3 h-3 text-gray-500 fill-gray-500" />
                <Star className="w-5 h-5 text-gray-400 fill-gray-400" />
                <Star className="w-3 h-3 text-gray-500 fill-gray-500" />
              </div>
              <h2 className="text-4xl font-semibold leading-tight">
                Smart Investments, Informed Decisions
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#999999" }}>
                Investing in real estate is one of the most powerful ways to build wealth — but only
                when done right. Our investment advisory service combines deep market knowledge with
                personalized strategies to help you make confident, profitable decisions.
              </p>
            </div>

            {/* CTA card */}
            <div
              className="relative overflow-hidden rounded-xl border border-[#262626] p-8 flex flex-col gap-6 flex-1"
              style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)" }}
            >
              {/* Arc pattern */}
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <pattern id="arcs-si" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                    <path d="M 80 0 A 80 80 0 0 0 0 80" fill="none" stroke="white" strokeWidth="0.8" />
                    <path d="M 80 20 A 60 60 0 0 0 20 80" fill="none" stroke="white" strokeWidth="0.8" />
                    <path d="M 80 40 A 40 40 0 0 0 40 80" fill="none" stroke="white" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#arcs-si)" />
              </svg>

              <div className="relative z-10 space-y-2">
                <h3 className="text-white text-xl font-semibold leading-snug">
                  Unlock Your Investment Potential
                </h3>
                <p className="text-sm" style={{ color: "#999999" }}>
                  Let our experts guide you toward smarter, more profitable real estate investments.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 self-start px-6 py-3 rounded-lg border border-white/20 bg-[#0f0f0f] text-white text-sm font-medium hover:bg-white hover:text-black transition-colors duration-200"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right column — 2x2 cards grid */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -5, backgroundColor: "#1c1c1c" }}
                className="group bg-[#141414] border border-[#262626] rounded-xl p-8 space-y-4 hover:border-purple-500/40 transition-colors cursor-default"
              >
                <div className="flex items-center gap-4">
                  <IconBadge Icon={card.icon} />
                  <h3 className="text-white font-semibold text-base">{card.title}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#999999" }}>
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
