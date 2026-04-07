/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RoomDetail from "./pages/RoomDetail";
import About from "./pages/About";
import BookingPolicy from "./pages/BookingPolicy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FDFBF7] text-[#2D2A26] font-sans selection:bg-[#D4A373] selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/room/:id" element={<RoomDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking-policy" element={<BookingPolicy />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}
