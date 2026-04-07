import { motion } from "motion/react";
import Hero from "../components/Hero";
import RoomCard from "../components/RoomCard";
import Gallery from "../components/Gallery";
import { rooms } from "../data/rooms";
import { Camera, Video, Sparkles, Layout, Palette, Share2, Star, Users } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useCases = [
  { icon: Camera, title: "Photography & Videography", description: "Professional shoots with high-end equipment support." },
  { icon: Sparkles, title: "Influencer & Creator Content", description: "Elevated backdrops for your social media presence." },
  { icon: Share2, title: "Brand & Product Campaigns", description: "Showcase your products in a premium environment." },
  { icon: Palette, title: "Fashion & Beauty Shoots", description: "Soft lighting and textures for stunning visuals." },
  { icon: Layout, title: "Lifestyle Editorials", description: "Authentic settings for storytelling and features." },
  { icon: Video, title: "UGC & Social Media Ads", description: "Engaging environments for high-converting content." },
  { icon: Star, title: "Brand Activations & Pop-ups", description: "Unique spaces for intimate brand experiences." },
  { icon: Users, title: "Intimate Events", description: "Small gatherings in a sophisticated setting." },
];

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="pt-20">
      <Hero />

      {/* Rooms Section */}
      <section id="rooms" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="text-brand-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">
                Our Spaces
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-semibold text-brand-dark">
                Explore Our Curated Rooms
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-brand-dark/60 text-sm md:text-base max-w-sm leading-relaxed"
            >
              Each room is uniquely designed with its own atmosphere, lighting, and textures to suit your specific creative vision.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {rooms.map((room, idx) => (
              <RoomCard key={room.id} room={room} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">
                Versatile Creative Spaces
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-semibold text-brand-dark mb-6">
                A Blank Canvas for Big Ideas
              </h2>
              <p className="text-brand-dark/60 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
                Designed to be a canvas for your creativity, our studio supports a wide range of visual storytelling needs.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 border border-brand-primary/10 rounded-sm hover:bg-brand-secondary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-secondary flex items-center justify-center rounded-sm mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                  <useCase.icon className="text-brand-dark" size={24} />
                </div>
                <h3 className="text-lg font-serif font-semibold text-brand-dark mb-3">{useCase.title}</h3>
                <p className="text-brand-dark/60 text-sm leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      {/* Call to Action */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-secondary/20 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-brand-dark p-12 md:p-20 rounded-sm flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-serif font-semibold text-brand-light mb-6">
                Ready to Bring Your Ideas to Life?
              </h2>
              <p className="text-brand-light/60 text-sm md:text-lg leading-relaxed">
                Book your session today and experience the calm, functional, and elevated atmosphere of Larami Content Studio.
              </p>
            </div>
            <a
              href="#rooms"
              className="bg-brand-primary text-brand-dark px-12 py-5 text-sm font-bold tracking-widest uppercase hover:bg-brand-secondary transition-all duration-300 rounded-sm"
            >
              Book a Space
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
