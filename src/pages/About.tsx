import { motion } from "motion/react";
import { ArrowRight, Quote } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-primary text-xs font-semibold tracking-[0.4em] uppercase mb-6 block">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-semibold text-brand-dark mb-8 leading-tight">
              Calm, Functional, and Elevated.
            </h1>
            <div className="space-y-6 text-brand-dark/70 text-lg leading-relaxed">
              <p>
                Larami Lifestyle started as an idea….a need for a creative space that actually understands visuals, intention, and atmosphere.
              </p>
              <p>
                I didn’t rush this. I didn’t cut corners.
              </p>
              <p>
                As an interior designer, I’ve always believed that spaces influence creativity and I designed LARAMI how I envisioned a creative studio to feel—calm, functional and elevated.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://picsum.photos/seed/larami-about/1200/1500"
                alt="Larami Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-primary p-10 rounded-sm hidden md:block">
              <Quote className="text-brand-dark mb-4" size={32} />
              <p className="text-brand-dark font-serif italic text-xl max-w-[200px]">
                "Spaces influence creativity."
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, order: 2 }}
            whileInView={{ opacity: 1, order: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:order-2"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-brand-dark mb-8">
              A Vision for Creatives
            </h2>
            <div className="space-y-6 text-brand-dark/70 text-lg leading-relaxed">
              <p>
                Larami Lifestyle was created to support creatives, brands, and people who care about how their stories are told — every detail shaped to support visuals, storytelling, and content creation.
              </p>
              <p>
                Proud of what we’ve created. Welcome to Larami Lifestyle. I’m excited to finally open the doors and see what gets created here.📸
              </p>
            </div>
            <div className="mt-12 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-primary">
                <img src="https://picsum.photos/seed/founder/200/200" alt="Founder" />
              </div>
              <div>
                <p className="text-brand-dark font-serif font-semibold">Fatima</p>
                <p className="text-xs tracking-widest uppercase text-brand-dark/40">Creative Director & Founder</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, order: 1 }}
            whileInView={{ opacity: 1, scale: 1, order: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:order-1"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://picsum.photos/seed/larami-about-2/1200/1500"
                alt="Larami Studio"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="bg-brand-dark rounded-sm p-12 md:p-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-brand-light mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-brand-primary font-serif text-2xl mb-4">Intention</h3>
                <p className="text-brand-light/60 text-sm leading-relaxed">Every detail is placed with purpose to enhance your creative process.</p>
              </div>
              <div>
                <h3 className="text-brand-primary font-serif text-2xl mb-4">Atmosphere</h3>
                <p className="text-brand-light/60 text-sm leading-relaxed">A calm and elevated environment that inspires storytelling.</p>
              </div>
              <div>
                <h3 className="text-brand-primary font-serif text-2xl mb-4">Function</h3>
                <p className="text-brand-light/60 text-sm leading-relaxed">Spaces designed to be as practical as they are beautiful.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
