import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is the cancellation policy?",
    answer: "All bookings are non-refundable once confirmed. We recommend ensuring your schedule is clear before making a reservation."
  },
  {
    question: "Can I reschedule my booking?",
    answer: "Yes, requests to reschedule must be made at least 48 hours prior to your scheduled booking date. Late rescheduling requests will attract a fee of ₦30,000."
  },
  {
    question: "How many people can I bring to my shoot?",
    answer: "Each booking admits a maximum of 2 people. Overcrowding is not permitted to preserve the serenity and exclusivity of the studio."
  },
  {
    question: "Is there a security deposit required?",
    answer: "Yes, a refundable caution fee of ₦20,000 is required for all bookings. This is returned within 48 hours provided there is no damage or stains to studio properties."
  },
  {
    question: "Can I bring my own speakers?",
    answer: "External speakers are not permitted. We provide speakers in each space, and volume must be kept at a minimum to respect our residential environment."
  },
  {
    question: "Is smoking allowed on the premises?",
    answer: "No, smoking is strictly prohibited within and around the premises at all times."
  },
  {
    question: "What happens if I break something?",
    answer: "Any damage to studio property, furniture, or equipment—whether during setup, use, or tear down—will attract repair or replacement charges."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-brand-dark mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-dark/60 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about booking and using our creative spaces.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white border border-brand-primary/10 rounded-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-brand-secondary/30 transition-colors duration-300"
              >
                <span className="text-lg font-serif font-semibold text-brand-dark">{faq.question}</span>
                <div className="w-8 h-8 bg-brand-secondary flex items-center justify-center rounded-sm">
                  {activeIndex === idx ? (
                    <Minus className="text-brand-dark" size={18} />
                  ) : (
                    <Plus className="text-brand-dark" size={18} />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-brand-dark/60 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
