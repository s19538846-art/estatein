"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Mail, Phone, MapPin, Navigation } from "lucide-react";

type Tab = "All" | "Regional" | "International";

interface Office {
  id: number;
  type: "Regional" | "International";
  label: string;
  address: string;
  description: string;
  email: string;
  phone: string;
  city: string;
}

const offices: Office[] = [
  {
    id: 1,
    type: "Regional",
    label: "Main Headquarters",
    address: "123 Estatein Blvd, Suite 100",
    description:
      "Our main headquarters serves as the heart of Estatein's operations. Located in the heart of the city, it's where our core team works to deliver exceptional real estate services.",
    email: "info@estatein.com",
    phone: "+1 (123) 456-7890",
    city: "New York, NY",
  },
  {
    id: 2,
    type: "Regional",
    label: "Regional Office — West",
    address: "456 Pacific Ave, Floor 3",
    description:
      "Our West Coast regional office handles all operations across the western states, providing local expertise and personalized service to clients in the region.",
    email: "west@estatein.com",
    phone: "+1 (213) 555-0192",
    city: "Los Angeles, CA",
  },
  {
    id: 3,
    type: "Regional",
    label: "Regional Office — South",
    address: "789 Magnolia St, Suite 200",
    description:
      "Serving the southern region with deep market knowledge and a dedicated team focused on residential and commercial real estate opportunities.",
    email: "south@estatein.com",
    phone: "+1 (713) 555-0147",
    city: "Houston, TX",
  },
  {
    id: 4,
    type: "International",
    label: "International Office — UK",
    address: "10 Canary Wharf, Level 5",
    description:
      "Our London office bridges Estatein's services with the European market, offering cross-border investment advisory and premium property management.",
    email: "uk@estatein.com",
    phone: "+44 20 7946 0958",
    city: "London, UK",
  },
  {
    id: 5,
    type: "International",
    label: "International Office — UAE",
    address: "Dubai Marina Tower, 22nd Floor",
    description:
      "Strategically positioned in Dubai, our Middle East office connects global investors with high-value real estate opportunities across the Gulf region.",
    email: "uae@estatein.com",
    phone: "+971 4 555 0183",
    city: "Dubai, UAE",
  },
  {
    id: 6,
    type: "International",
    label: "International Office — Singapore",
    address: "1 Raffles Place, #30-00",
    description:
      "Our Singapore office serves as the gateway to Asia-Pacific real estate markets, offering expert guidance on investments across the region.",
    email: "sg@estatein.com",
    phone: "+65 6123 4567",
    city: "Singapore",
  },
];

const tabs: Tab[] = ["All", "Regional", "International"];

function Badge({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1A1A1A] border border-[#262626] rounded-full text-xs text-gray-400 whitespace-nowrap">
      <Icon className="w-3.5 h-3.5 text-purple-400 shrink-0" />
      <span>{text}</span>
    </div>
  );
}

function OfficeCard({ office, index }: { office: Office; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" as const }}
      className="bg-[#141414] border border-[#262626] rounded-2xl p-8 md:p-10 flex flex-col gap-6"
    >
      {/* Top */}
      <div className="space-y-2">
        <p className="text-xs text-white font-medium tracking-wide uppercase opacity-60">
          {office.label}
        </p>
        <h3 className="text-2xl font-bold text-white leading-snug">{office.address}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "#999999" }}>
          {office.description}
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        <Badge icon={Mail} text={office.email} />
        <Badge icon={Phone} text={office.phone} />
        <Badge icon={MapPin} text={office.city} />
      </div>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="w-full flex items-center justify-center gap-2 py-3 bg-[#703BF7] hover:bg-[#5f2fe0] text-white text-sm font-medium rounded-lg transition-colors duration-200"
      >
        <Navigation className="w-4 h-4" />
        Get Direction
      </motion.button>
    </motion.div>
  );
}

export default function OfficeLocations() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const filtered = activeTab === "All"
    ? offices
    : offices.filter((o) => o.type === activeTab);

  return (
    <section className="bg-[#141414] text-white py-20 px-6 md:px-16 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto space-y-10">

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
          <h2 className="text-4xl font-semibold">Discover Our Office Locations</h2>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "#999999" }}>
            Estatein is where you are. With offices spanning key cities and international hubs,
            our teams are always close by to provide expert guidance and personalized service.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="inline-flex items-center gap-1 bg-[#1A1A1A] border border-[#262626] rounded-xl p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "bg-[#141414] text-white border border-[#4D4D4D]"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((office, i) => (
              <OfficeCard key={office.id} office={office} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
