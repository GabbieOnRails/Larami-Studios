import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { rooms } from "../data/rooms";
import BookingCalendar from "../components/BookingCalendar";
import { ArrowLeft, Check, Users, Clock, Maximize2, Sparkles } from "lucide-react";
import { useEffect } from "react";

export default function RoomDetail() {
  const { id } = useParams<{ id: string }>();
  const room = rooms.find((r) => r.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-light">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-semibold text-brand-dark mb-6">Room Not Found</h1>
          <Link to="/" className="text-brand-primary hover:underline flex items-center justify-center">
            <ArrowLeft className="mr-2" size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-semibold tracking-widest uppercase text-brand-dark/40 hover:text-brand-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-2 transition-transform" size={16} />
          Back to Rooms
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Room Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">
                ₦{room.rate.toLocaleString()} / HR
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-semibold text-brand-dark mb-8">
                {room.name} Space
              </h1>
              
              <div className="relative aspect-video overflow-hidden rounded-sm mb-12 group">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="grid grid-cols-3 gap-8 mb-12 py-8 border-y border-brand-primary/10">
                <div className="flex flex-col items-center text-center">
                  <Users size={24} className="text-brand-primary mb-3" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-brand-dark/40 mb-1">Max Guests</span>
                  <span className="text-sm font-medium">{room.maxGuests} People</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Clock size={24} className="text-brand-primary mb-3" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-brand-dark/40 mb-1">Min Duration</span>
                  <span className="text-sm font-medium">1 Hour</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Sparkles size={24} className="text-brand-primary mb-3" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-brand-dark/40 mb-1">Vibe</span>
                  <span className="text-sm font-medium">Curated</span>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-xl font-serif font-semibold text-brand-dark mb-6">About the Space</h3>
                <p className="text-brand-dark/60 text-lg leading-relaxed mb-8">
                  {room.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {room.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3 text-brand-dark/70">
                      <div className="w-5 h-5 bg-brand-secondary flex items-center justify-center rounded-full">
                        <Check size={12} className="text-brand-dark" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Images */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {room.gallery.slice(1).map((img, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-sm">
                    <img
                      src={img}
                      alt={`${room.name} Detail ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Booking Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BookingCalendar rate={room.rate} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
