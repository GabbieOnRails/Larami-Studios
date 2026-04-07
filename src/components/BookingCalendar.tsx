import { useState } from "react";
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

export default function BookingCalendar({ rate }: { rate: number }) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [hours, setHours] = useState(1);

  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const times = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

  const totalPrice = rate * hours;

  return (
    <div className="bg-white border border-brand-primary/10 p-8 rounded-sm shadow-sm sticky top-24">
      <h3 className="text-xl font-serif font-semibold text-brand-dark mb-6">Book Your Session</h3>
      
      {/* Date Selector */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-dark/40">Select Date</span>
          <div className="flex space-x-2">
            <button className="p-1 hover:bg-brand-secondary rounded-full transition-colors"><ChevronLeft size={16} /></button>
            <button className="p-1 hover:bg-brand-secondary rounded-full transition-colors"><ChevronRight size={16} /></button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {days.slice(0, 14).map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDate(day)}
              className={cn(
                "h-10 w-full flex items-center justify-center text-xs font-medium rounded-sm transition-all duration-300",
                selectedDate === day 
                  ? "bg-brand-primary text-brand-dark" 
                  : "hover:bg-brand-secondary text-brand-dark/60"
              )}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Time Selector */}
      <div className="mb-8">
        <span className="text-sm font-semibold tracking-widest uppercase text-brand-dark/40 block mb-4">Select Time</span>
        <div className="grid grid-cols-3 gap-2">
          {times.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={cn(
                "py-2 text-[10px] font-bold tracking-widest uppercase rounded-sm border transition-all duration-300",
                selectedTime === time 
                  ? "bg-brand-dark text-white border-brand-dark" 
                  : "border-brand-primary/20 text-brand-dark/60 hover:border-brand-primary"
              )}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Duration Selector */}
      <div className="mb-8">
        <span className="text-sm font-semibold tracking-widest uppercase text-brand-dark/40 block mb-4">Duration (Hours)</span>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setHours(Math.max(1, hours - 1))}
            className="w-10 h-10 flex items-center justify-center border border-brand-primary/20 rounded-sm hover:bg-brand-secondary transition-colors"
          >-</button>
          <span className="text-lg font-serif font-semibold w-8 text-center">{hours}</span>
          <button 
            onClick={() => setHours(hours + 1)}
            className="w-10 h-10 flex items-center justify-center border border-brand-primary/20 rounded-sm hover:bg-brand-secondary transition-colors"
          >+</button>
        </div>
      </div>

      {/* Summary */}
      <div className="pt-8 border-t border-brand-primary/10 mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-brand-dark/60">Rate per hour</span>
          <span className="text-sm font-medium">₦{rate.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-brand-dark/60">Duration</span>
          <span className="text-sm font-medium">{hours} hr{hours > 1 ? 's' : ''}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-serif font-semibold">Total</span>
          <span className="text-lg font-serif font-semibold text-brand-primary">₦{totalPrice.toLocaleString()}</span>
        </div>
      </div>

      <button
        disabled={!selectedDate || !selectedTime}
        className={cn(
          "w-full py-4 text-sm font-bold tracking-widest uppercase rounded-sm transition-all duration-300",
          selectedDate && selectedTime 
            ? "bg-brand-dark text-white hover:bg-brand-primary" 
            : "bg-brand-dark/10 text-brand-dark/30 cursor-not-allowed"
        )}
      >
        Confirm Booking
      </button>
      
      <p className="text-[10px] text-center text-brand-dark/40 mt-4 tracking-widest uppercase">
        * Maximum 3 guests per space
      </p>
    </div>
  );
}
