import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Room } from "../data/rooms";
import { ArrowRight, Users, Clock } from "lucide-react";
import React from "react";

interface RoomCardProps {
  room: Room;
  index: number;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white border border-brand-primary/10 overflow-hidden rounded-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-4 left-4 bg-brand-primary text-brand-dark px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-sm">
          ₦{room.rate.toLocaleString()} / HR
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-serif font-semibold text-brand-dark">{room.name}</h3>
          <div className="flex items-center space-x-3 text-brand-dark/40">
            <div className="flex items-center space-x-1">
              <Users size={14} />
              <span className="text-xs font-medium">{room.maxGuests}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={14} />
              <span className="text-xs font-medium">1hr min</span>
            </div>
          </div>
        </div>
        
        <p className="text-brand-dark/60 text-sm leading-relaxed mb-8 line-clamp-2">
          {room.description}
        </p>

        <Link
          to={`/room/${room.id}`}
          className="inline-flex items-center text-sm font-semibold tracking-widest uppercase text-brand-primary hover:text-brand-dark transition-colors duration-300 group/link"
        >
          View Details
          <ArrowRight className="ml-2 group-hover/link:translate-x-2 transition-transform" size={16} />
        </Link>
      </div>
    </motion.div>
  );
};

export default RoomCard;
