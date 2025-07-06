import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface EventCardProps {
  date: string;
  title: string;
  type: string;
  description: string;
  imageUrl: string;
}

const EventCard: React.FC<EventCardProps> = ({
  date,
  title,
  type,
  description,
  imageUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative rounded-2xl overflow-hidden h-80 group my-4 md:my-8 w-full max-w-md shadow-2xl hover:shadow-3xl transition-all duration-500"
    >
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Enhanced overlay with better contrast */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 z-20" />

      {/* Content with improved typography and spacing */}
      <div className="relative z-30 h-full flex flex-col justify-end p-6 md:p-8 text-white">
        <div className="mb-3 md:mb-4">
          <span className="text-xs md:text-sm font-bold bg-primary text-primary-foreground px-4 py-2 md:px-5 md:py-2.5 rounded-full inline-block shadow-lg border border-white/20 backdrop-blur-sm">
            {type}
          </span>
        </div>

        <div className="text-sm md:text-base font-semibold mb-3 md:mb-4 text-white/90 tracking-wide">
          {date}
        </div>

        <h3 className="text-xl md:text-2xl xl:text-3xl font-black mb-3 md:mb-4 text-white leading-tight drop-shadow-lg">
          {title}
        </h3>

        <p className="text-white/95 text-sm md:text-base leading-relaxed drop-shadow-sm line-clamp-3">
          {description}
        </p>
      </div>

      {/* Subtle border for definition */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 z-40 pointer-events-none" />
    </motion.div>
  );
};

const Events: React.FC = () => {
  const events = [
    {
      date: "04/July/2025",
      title: "CAIRL Learning Labs: AI in Life Sciences",
      type: "Event",
      description:
        "Join us for an exciting event focused on AI applications in genomics, drug discovery, and diagnostics. Explore cutting-edge research and network with industry leaders.",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751228905/UpComing_Event_-_04th_July_25_ejuccu.jpg",
    },
    {
      date: "15/August/2025",
      title: "Advanced AI Symposium",
      type: "Symposium",
      description:
        "A deep dive into the latest advancements in machine learning models and applications. Featuring keynote speakers from leading tech companies.",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750189052/events-img-1_jargc1.jpg",
    },
  ];

  return (
    <section className="bg-transparent min-h-screen w-full flex flex-col justify-center items-center py-12 md:py-20">
      <div className="bg-secondary/80 backdrop-blur-sm h-full w-full py-8 md:py-12 px-6 md:px-8 rounded-3xl max-w-7xl mx-auto flex flex-col items-center border border-white/10">
        {/* Enhanced badge with better styling */}
        <motion.h4
          initial={{ opacity: 0.5, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#85D1F1]/20 to-[#60C3E8]/20 text-[#85D1F1] text-sm md:text-base font-semibold mb-6 md:mb-8 border border-primary/20 shadow-lg backdrop-blur-sm"
        >
          Happenings
        </motion.h4>

        {/* Enhanced heading with better typography */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl xl:text-5xl font-black text-foreground mb-8 md:mb-12 text-center leading-tight tracking-tight"
        >
          Upcoming Events & Webinars
        </motion.h2>

        {/* Enhanced grid layout with better spacing */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 place-items-center mb-8 md:mb-12">
          {events.map((event, index) => (
            <EventCard
              key={index}
              date={event.date}
              title={event.title}
              type={event.type}
              description={event.description}
              imageUrl={event.imageUrl}
            />
          ))}
        </div>

        {/* Enhanced CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <Link
            href="/happenings"
            className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[#85D1F1] to-[#60C3E8] text-white hover:from-[#60C3E8] hover:to-[#85D1F1] px-8 py-4 rounded-full font-semibold flex items-center text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl border border-primary/20 backdrop-blur-sm"
          >
            View All Events
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
