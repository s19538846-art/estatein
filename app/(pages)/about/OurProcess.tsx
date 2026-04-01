"use client";

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: 'Step 01',
    title: 'Discover a World of Possibilities',
    description: 'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences.',
  },
  {
    step: 'Step 02',
    title: 'Narrowing Down Your Choices',
    description: "Once you've found properties that catch your eye, save them to your account and compare them side by side to find the perfect match.",
  },
  {
    step: 'Step 03',
    title: 'Personalized Guidance',
    description: 'Have questions about a property or need more information? Our dedicated team of real estate experts is just a message or call away.',
  },
  {
    step: 'Step 04',
    title: 'See It for Yourself',
    description: "Arrange viewings of the properties you're interested in. We'll coordinate with the owners and guide you through each visit.",
  },
  {
    step: 'Step 05',
    title: 'Making Informed Decisions',
    description: 'Before making an offer, our team will assist you with due diligence, ensuring you have all the information you need.',
  },
  {
    step: 'Step 06',
    title: 'Getting the Best Deal',
    description: "We'll help you negotiate the best terms and prepare your offer so you can close with confidence.",
  },
];

export default function OurProcess() {
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
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight max-w-2xl">
            Navigating the Estatein Experience
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-2xl">
            At Estatein, we've designed a straightforward process to help you find and purchase your
            dream property with ease. Here's a step-by-step guide to how it all works.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative rounded-2xl border border-[#262626] overflow-hidden"
            >
              {/* Фиолетовая полоса сверху */}
              <div className="h-[3px] w-full bg-[#703BF7]" />

              {/* Градиентное свечение */}
              <div
                className="absolute top-0 left-0 w-40 h-40 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at top left, rgba(112,59,247,0.18) 0%, transparent 70%)' }}
              />

              <div className="relative p-8 space-y-4 bg-[#1A1A1A]">
                <span className="text-[#703BF7] text-sm font-medium tracking-widest">{item.step}</span>
                <h3 className="text-white text-xl font-semibold leading-snug">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
