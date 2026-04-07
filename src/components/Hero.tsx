import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const heroImageUrl = "https://i.ibb.co/Xk2v23Cb/Project-Larami-Bhsa-V3s3.jpg";
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        {/* Mobile Image Background */}
        <div className="absolute inset-0 md:hidden">
          <img
            src={heroImageUrl}
            alt="Larami Lifestyle Studio"
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Image Background */}
        <div className="absolute inset-0 hidden md:block">
          <img
            src={heroImageUrl}
            alt="Larami Content Studio"
            className="w-full h-full object-cover brightness-[0.5]"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-4xl md:text-7xl lg:text-8xl font-serif font-semibold text-brand-light mb-12 leading-tight"
        >
          Elevate Your <br />
          Creative Vision
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="#rooms"
            className="w-full sm:w-auto bg-brand-primary text-brand-dark px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-brand-secondary transition-all duration-300 rounded-sm flex items-center justify-center group"
          >
            Explore Rooms
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </a>
          <a
            href="/about"
            className="w-full sm:w-auto border border-brand-light/30 text-brand-light px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-brand-light hover:text-brand-dark transition-all duration-300 rounded-sm"
          >
            Our Story
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-brand-light/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-primary to-transparent" />
      </motion.div>
    </section>
  );
}
