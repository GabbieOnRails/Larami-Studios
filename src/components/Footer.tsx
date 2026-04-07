import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex flex-col items-start mb-6">
            <span className="text-3xl font-serif font-semibold tracking-widest">LARAMI</span>
            <span className="text-xs tracking-[0.4em] text-brand-primary uppercase -mt-1">Content Studio</span>
          </Link>
          <p className="text-brand-light/60 max-w-md leading-relaxed mb-8">
            Larami Lifestyle was created to support creatives, brands, and people who care about how their stories are told — every detail shaped to support visuals, storytelling, and content creation.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-brand-light/60 hover:text-brand-primary transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-brand-light/60 hover:text-brand-primary transition-colors duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-brand-light/60 hover:text-brand-primary transition-colors duration-300">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-brand-primary">Quick Links</h4>
          <ul className="space-y-4 text-sm text-brand-light/60">
            <li><Link to="/" className="hover:text-brand-primary transition-colors duration-300">Home</Link></li>
            <li><Link to="/#rooms" className="hover:text-brand-primary transition-colors duration-300">Rooms</Link></li>
            <li><Link to="/about" className="hover:text-brand-primary transition-colors duration-300">About Us</Link></li>
            <li><Link to="/booking-policy" className="hover:text-brand-primary transition-colors duration-300">Booking Policy</Link></li>
            <li><Link to="/#gallery" className="hover:text-brand-primary transition-colors duration-300">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-brand-primary">Contact</h4>
          <ul className="space-y-4 text-sm text-brand-light/60">
            <li className="flex items-center space-x-3">
              <Mail size={16} className="text-brand-primary" />
              <span>hello@laramistudio.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={16} className="text-brand-primary" />
              <span>+234 800 000 0000</span>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin size={16} className="text-brand-primary mt-0.5" />
              <span>Lagos, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-light/10 text-center text-xs text-brand-light/40 tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Larami Content Studio. All Rights Reserved.
      </div>
    </footer>
  );
}
