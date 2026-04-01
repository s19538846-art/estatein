"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

function GalleryImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      className={`relative overflow-hidden rounded-xl ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </motion.div>
  );
}

export default function ExploreGallery() {
  return (
    <section className="bg-[#141414] text-white py-20 px-6 md:px-16 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#141414] border border-[#262626] rounded-3xl p-8 md:p-16">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col lg:flex-row gap-8"
          >
            {/* Left column */}
            <div className="flex flex-col gap-6 lg:w-[38%]">

              {/* team1 and team3 are stacked here */}
              <GalleryImage
                src="/image/team/team1.png"
                alt="Estatein office workspace"
                className="h-52 md:h-64"
              />
              <GalleryImage
                src="/image/team/team3.png"
                alt="Team collaboration meeting"
                className="h-52 md:h-64"
              />

              {/* Header below images */}
              <motion.div variants={itemVariants} className="space-y-4 mt-2">
                <div className="flex items-end gap-1">
                  <Star className="w-3 h-3 text-gray-500 fill-gray-500" />
                  <Star className="w-5 h-5 text-gray-400 fill-gray-400" />
                  <Star className="w-3 h-3 text-gray-500 fill-gray-500" />
                </div>
                <h2 className="text-4xl font-semibold leading-tight">
                  Explore Estatein&apos;s World
                </h2>
                <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#999999" }}>
                  Step inside Estatein&apos;s world — where passion meets professionalism. From our
                  dynamic team to our collaborative workspaces, every corner reflects our
                  commitment to excellence in real estate.
                </p>
              </motion.div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-4 lg:w-[62%]">

              {/* Large top image */}
              <GalleryImage
                src="/image/team/team2.png"
                alt="Estatein leadership team"
                className="h-64 md:h-72"
              />

              {/* Two medium images side by side */}
              <div className="grid grid-cols-2 gap-4">
                <GalleryImage
                  src="/image/team/team4.png"
                  alt="Team members discussing strategy"
                  className="h-44 md:h-52"
                />
                <GalleryImage
                  src="/image/team/team5.png"
                  alt="Professional real estate consultants"
                  className="h-44 md:h-52"
                />
              </div>

              {/* Large bottom image */}
              <GalleryImage
                src="/image/team/team6.png"
                alt="Successful client partnership"
                className="h-52 md:h-60"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}