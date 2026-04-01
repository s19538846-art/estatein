"use client";

import { motion } from "framer-motion";
import { Star, Users, Wrench, ShieldCheck, Gavel } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Tenant Harmony",
    description:
      "We handle tenant relations with care — from screening and onboarding to conflict resolution — keeping your property occupied and your tenants satisfied.",
  },
  {
    icon: Wrench,
    title: "Maintenance Ease",
    description:
      "Our proactive maintenance network ensures issues are resolved quickly, preserving your property's value and keeping tenants happy.",
  },
  {
    icon: ShieldCheck,
    title: "Financial Peace of Mind",
    description:
      "From rent collection to detailed financial reporting, we give you full visibility and control over your property's performance.",
  },
  {
    icon: Gavel,
    title: "Legal Guardian",
    description:
      "Stay compliant and protected. We navigate lease agreements, local regulations, and legal requirements so you never have to worry.",
  },
];

function IconBadge({ Icon, hovered }: { Icon: React.ElementType; hovered?: boolean }) {
  return (
    <div className="relative flex items-center justify-center w-12 h-12 shrink-0">
      <div
        className={`absolute inset-0 rounded-full border transition-colors duration-300 ${
          hovered ? "border-purple-500/40" : "border-[#2a2a2a]"
        }`}
      />
      <div
        className={`absolute inset-[6px] rounded-full border transition-colors duration-300 ${
          hovered ? "border-purple-500/30" : "border-[#2a2a2a]"
        }`}
      />
      <div
        className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-300 ${
          hovered ? "bg-purple-900/40" : "bg-[#1a1a2e]"
        }`}
      >
        <Icon
          className={`w-3.5 h-3.5 transition-colors duration-300 ${
            hovered ? "text-[#703BF7]" : "text-purple-400"
          }`}
        />
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

export default function PropertyManagement() {
  return (
    <section className="bg-[#141414] text-white py-20 px-6 md:px-16 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header */}
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
          <h2 className="text-4xl font-semibold">Effortless Property Management</h2>
          <p className="leading-relaxed max-w-5xl text-sm" style={{ color: "#999999" }}>
            Managing a property shouldn't be a full-time job. Our comprehensive property management
            service takes care of everything — from finding the right tenants and handling
            maintenance to ensuring legal compliance and maximizing your returns. We're your
            dedicated partner in making property ownership truly effortless.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Top row — 3 cards */}
          {cards.slice(0, 3).map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -5 }}
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

          {/* Bottom row — small card */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="group bg-[#141414] border border-[#262626] rounded-xl p-8 space-y-4 hover:border-purple-500/40 transition-colors cursor-default"
          >
            <div className="flex items-center gap-4">
              <IconBadge Icon={cards[3].icon} />
              <h3 className="text-white font-semibold text-base">{cards[3].title}</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#999999" }}>
              {cards[3].description}
            </p>
          </motion.div>

          {/* CTA card — col-span-2 */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="md:col-span-2 relative overflow-hidden rounded-xl border border-[#262626] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)" }}
          >
            {/* Arc pattern overlay */}
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern id="arcs-pm" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 A 80 80 0 0 0 0 80" fill="none" stroke="white" strokeWidth="0.8" />
                  <path d="M 80 20 A 60 60 0 0 0 20 80" fill="none" stroke="white" strokeWidth="0.8" />
                  <path d="M 80 40 A 40 40 0 0 0 40 80" fill="none" stroke="white" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#arcs-pm)" />
            </svg>

            <div className="relative z-10 space-y-2 max-w-sm">
              <h3 className="text-white text-xl font-semibold leading-snug">
                Experience Effortless Property Management
              </h3>
              <p className="text-sm" style={{ color: "#999999" }}>
                Let us handle the details while you enjoy the returns.
              </p>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="relative z-10 shrink-0 px-6 py-3 rounded-lg border border-white/20 bg-[#0f0f0f] text-white text-sm font-medium hover:bg-white hover:text-black transition-colors duration-200"
            >
              Learn More
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
