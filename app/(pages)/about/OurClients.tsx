"use client";

import { useState } from 'react';
import { Star, LayoutGrid, Zap, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const clients = [
  { since: 'Since 2019', name: 'ABC Corporation',   domain: 'Commercial Real Estate',  category: 'Luxury Home Development',    quote: "Estatein's expertise and professionalism transformed our property search. Their team guided us every step of the way, making the entire process seamless and stress-free." },
  { since: 'Since 2018', name: 'Golden Gate Ltd',   domain: 'Residential Real Estate', category: 'Premium Apartments',          quote: 'Working with Estatein was an absolute pleasure. They understood our needs perfectly and delivered results beyond our expectations.' },
  { since: 'Since 2020', name: 'Horizon Ventures',  domain: 'Industrial Real Estate',  category: 'Office Space Development',    quote: 'The Estatein team demonstrated unparalleled knowledge of the market. Their dedication to client satisfaction is truly commendable.' },
  { since: 'Since 2021', name: 'Summit Holdings',   domain: 'Mixed-Use Development',   category: 'Retail & Commercial',         quote: 'From the first consultation to closing, Estatein provided exceptional service. We highly recommend them to anyone seeking real estate solutions.' },
  { since: 'Since 2017', name: 'Pinnacle Group',    domain: 'Commercial Real Estate',  category: 'Corporate Headquarters',      quote: "Estatein's market insights and negotiation skills saved us both time and money. A truly outstanding team." },
  { since: 'Since 2022', name: 'Nova Realty',       domain: 'Residential Real Estate', category: 'Suburban Developments',       quote: 'Professional, responsive, and results-driven — Estatein exceeded every expectation we had.' },
  { since: 'Since 2019', name: 'Crestwood Partners',domain: 'Commercial Real Estate',  category: 'Luxury Home Development',    quote: 'The level of care and attention Estatein gave our portfolio was remarkable. We look forward to a long partnership.' },
  { since: 'Since 2020', name: 'Meridian Estates',  domain: 'Residential Real Estate', category: 'High-Rise Condominiums',      quote: 'Estatein helped us navigate a complex market with ease. Their expertise is second to none.' },
  { since: 'Since 2016', name: 'Apex Developments', domain: 'Mixed-Use Development',   category: 'Urban Renewal Projects',      quote: 'We trusted Estatein with our most ambitious project yet, and they delivered flawlessly.' },
  { since: 'Since 2023', name: 'Skyline Realty',    domain: 'Commercial Real Estate',  category: 'Boutique Office Spaces',      quote: 'From start to finish, Estatein was a true partner. Their commitment to excellence is evident in everything they do.' },
];

const PAGE_SIZE = 2;
const TOTAL_PAGES = Math.ceil(clients.length / PAGE_SIZE);

export default function OurClients() {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);

  const navigate = (next: number) => {
    setDir(next > page ? 1 : -1);
    setPage(next);
  };

  const visible = clients.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

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
          <h2 className="text-4xl md:text-5xl font-semibold">Our Valued Clients</h2>
          <p className="leading-relaxed max-w-3xl" style={{ color: '#999999' }}>
            At Estatein, we've had the privilege of working with a diverse range of clients across
            various industries. From commercial enterprises to residential developments, our
            portfolio speaks for itself.
          </p>
        </motion.div>

        {/* Слайдер */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={page}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {visible.map((client, i) => (
                <div
                  key={i}
                  className="bg-[#1A1A1A] border border-[#262626] rounded-[20px] p-8 space-y-6 hover:border-gray-700 transition-colors"
                >
                  {/* Шапка */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-gray-500 text-xs">{client.since}</p>
                      <h3 className="text-white text-2xl font-semibold">{client.name}</h3>
                    </div>
                    <button className="flex items-center gap-2 text-sm text-white border border-[#262626] rounded-lg px-4 py-2 hover:bg-[#262626] transition-colors whitespace-nowrap">
                      Visit Website <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Domain / Category */}
                  <div className="grid grid-cols-2 border border-[#262626] rounded-xl overflow-hidden">
                    <div className="p-4 space-y-1">
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                        <LayoutGrid className="w-3.5 h-3.5" /><span>Domain</span>
                      </div>
                      <p className="text-white text-sm font-medium">{client.domain}</p>
                    </div>
                    <div className="p-4 space-y-1 border-l border-[#262626]">
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                        <Zap className="w-3.5 h-3.5" /><span>Category</span>
                      </div>
                      <p className="text-white text-sm font-medium">{client.category}</p>
                    </div>
                  </div>

                  {/* Отзыв */}
                  <div className="border border-[#262626] rounded-xl p-5 space-y-3 bg-[#141414]">
                    <p className="text-white text-sm font-medium">What They Said 📝</p>
                    <p className="text-gray-500 text-sm leading-relaxed italic">"{client.quote}"</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Навигация */}
        <div className="border-t border-[#262626] pt-6 flex items-center justify-between">
          <span className="text-sm">
            <span className="text-white font-medium">{String(page + 1).padStart(2, '0')}</span>
            <span className="text-gray-500"> of {String(TOTAL_PAGES).padStart(2, '0')}</span>
          </span>
          <div className="flex gap-3">
            <button
              onClick={() => navigate(Math.max(0, page - 1))}
              disabled={page === 0}
              className="w-10 h-10 rounded-full border border-[#262626] flex items-center justify-center hover:bg-[#262626] transition-colors disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => navigate(Math.min(TOTAL_PAGES - 1, page + 1))}
              disabled={page === TOTAL_PAGES - 1}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-30"
            >
              <ChevronRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
