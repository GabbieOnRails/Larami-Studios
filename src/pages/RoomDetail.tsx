import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { rooms } from "../data/rooms";
import BookingCalendar from "../components/BookingCalendar";
import { ArrowLeft, Check, Users, Clock, Sparkles, Twitter, Facebook, MessageCircle, Link2, X, Maximize2 } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";

export default function RoomDetail() {
  const { id } = useParams<{ id: string }>();
  const room = rooms.find((r) => r.id === id);
  const [copied, setCopied] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shareUrl = window.location.href;
  const shareText = `Check out the ${room?.name} Space at Larami Content Studio!`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
                <div>
                  <span className="text-brand-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">
                    ₦{room.rate.toLocaleString()} / HR
                  </span>
                  <h1 className="text-4xl md:text-6xl font-serif font-semibold text-brand-dark">
                    {room.name} Space
                  </h1>
                </div>
                
                {/* Social Sharing */}
                <div className="flex items-center space-x-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-dark/40">Share</span>
                  <div className="flex space-x-2">
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white border border-brand-primary/10 flex items-center justify-center rounded-full text-brand-dark/60 hover:text-brand-primary hover:border-brand-primary transition-all duration-300"
                      title="Share on Twitter"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white border border-brand-primary/10 flex items-center justify-center rounded-full text-brand-dark/60 hover:text-brand-primary hover:border-brand-primary transition-all duration-300"
                      title="Share on Facebook"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white border border-brand-primary/10 flex items-center justify-center rounded-full text-brand-dark/60 hover:text-brand-primary hover:border-brand-primary transition-all duration-300"
                      title="Share on WhatsApp"
                    >
                      <MessageCircle size={18} />
                    </a>
                    <button
                      onClick={handleCopyLink}
                      className="w-10 h-10 bg-white border border-brand-primary/10 flex items-center justify-center rounded-full text-brand-dark/60 hover:text-brand-primary hover:border-brand-primary transition-all duration-300 relative"
                      title="Copy Link"
                    >
                      <Link2 size={18} />
                      {copied && (
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-dark text-white text-[10px] py-1 px-2 rounded whitespace-nowrap">
                          Copied!
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
              <div 
                className="relative aspect-video overflow-hidden rounded-sm mb-12 group cursor-pointer"
                onClick={() => setSelectedImage(room.image)}
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <Maximize2 className="text-white" size={48} />
                </div>
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
                  <div 
                    key={index} 
                    className="aspect-square overflow-hidden rounded-sm cursor-pointer group relative"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      src={img}
                      alt={`${room.name} Detail ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <Maximize2 className="text-white" size={24} />
                    </div>
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

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/95 p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-brand-light/60 hover:text-brand-light transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Room Detail View"
                className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
