import { motion } from "motion/react";
import { ShieldCheck, Clock, Users, Ban, AlertTriangle, Info } from "lucide-react";
import { useEffect } from "react";

const policies = [
  {
    title: "Reservation & Payment",
    icon: ShieldCheck,
    items: [
      "All bookings must be paid in full to secure a reservation.",
      "Bookings are only considered confirmed upon receipt of payment and issuance of a confirmation message or email.",
      "A refundable caution fee of ₦20,000 is required, returned within 48hrs provided there is no damage or stains to studio properties.",
      "All bookings are non-refundable once confirmed."
    ]
  },
  {
    title: "Arrival & Capacity",
    icon: Users,
    items: [
      "Clients are encouraged to arrive at least 15 minutes prior to their scheduled booking time.",
      "Each booking admits a maximum of 2 people.",
      "Overcrowding is not permitted and Larami reserves the right to restrict access where capacity limits are exceeded."
    ]
  },
  {
    title: "Studio Rules",
    icon: Ban,
    items: [
      "External speakers are not permitted. Speakers are provided in each space and volume must be kept at a minimum.",
      "Nudity or semi-nudity is strictly prohibited. Violation will result in denial of access without a refund.",
      "Smoking is strictly prohibited within and around the premises.",
      "Movement of studio props is permitted provided items are handled with care and under supervision of the studio manager."
    ]
  },
  {
    title: "Rescheduling",
    icon: Clock,
    items: [
      "Requests to reschedule must be made at least 48 hours prior to the scheduled booking date.",
      "Late rescheduling requests will attract a rescheduling fee of ₦30,000."
    ]
  },
  {
    title: "Liability & Damages",
    icon: AlertTriangle,
    items: [
      "Any damage to studio property, furniture, or equipment—whether during setup, use or tear down—will attract repair or replacement charges.",
      "Larami shall not be held responsible for loss or damage of personal belongings.",
      "Forgotten items, once recovered, must be claimed within 24 hours."
    ]
  },
  {
    title: "Environment",
    icon: Info,
    items: [
      "The studio is located in a residential environment; clients, guests and vendors are required to maintain a calm and respectful atmosphere at all times.",
      "Clients are advised to come in covered clothing as changing facilities are available on-site."
    ]
  }
];

export default function BookingPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-brand-light min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">
            Guidelines
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-semibold text-brand-dark mb-6">
            Booking Policy
          </h1>
          <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto leading-relaxed">
            To preserve the serenity and exclusivity of LARAMI, kindly ensure full compliance with the following guidelines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {policies.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-sm border border-brand-primary/10 shadow-sm"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-brand-secondary flex items-center justify-center rounded-sm">
                  <section.icon className="text-brand-dark" size={24} />
                </div>
                <h2 className="text-2xl font-serif font-semibold text-brand-dark">{section.title}</h2>
              </div>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-brand-dark/70">
                    <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-brand-dark text-brand-light rounded-sm text-center"
        >
          <p className="text-sm font-medium tracking-widest uppercase mb-4">Questions about our policies?</p>
          <p className="text-brand-light/60 mb-8">Feel free to reach out to our studio manager for clarification.</p>
          <a
            href="mailto:hello@larami.studio"
            className="inline-block bg-brand-primary text-brand-dark px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-brand-secondary transition-all duration-300 rounded-sm"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
}
