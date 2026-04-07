import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Image as ImageIcon, Loader2, User, Sparkles } from "lucide-react";
import Markdown from "react-markdown";
import { getChatResponse, analyzeImageVibe } from "../services/geminiService";

interface Message {
  role: "user" | "model";
  text: string;
  image?: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: "model", 
      text: "Hello! I'm the Larami Studio AI Assistant. \n\nHow can I help you find the perfect creative space today? \n\n**Tip:** You can upload a reference image of the vibe you're trying to achieve, and I'll match it to our studios!" 
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return;

    const userMessage: Message = { role: "user", text };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const chatHistory = messages.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));
    chatHistory.push({ role: "user", parts: [{ text: userMessage.text }] });

    const aiResponse = await getChatResponse(chatHistory);
    setMessages(prev => [...prev, { role: "model", text: aiResponse || "I'm sorry, I couldn't process that." }]);
    setIsLoading(false);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result as string;
      const base64Data = base64.split(",")[1];

      setMessages(prev => [...prev, { role: "user", text: "I'm looking for a space with this vibe...", image: base64 }]);
      setIsImageLoading(true);

      const aiResponse = await analyzeImageVibe(base64Data);
      setMessages(prev => [...prev, { role: "model", text: aiResponse || "I couldn't analyze the image. Could you describe the vibe?" }]);
      setIsImageLoading(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[90vw] md:w-[400px] h-[500px] bg-white rounded-sm shadow-2xl border border-brand-primary/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-dark p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-brand-primary flex items-center justify-center rounded-sm">
                  <Sparkles size={18} className="text-brand-dark" />
                </div>
                <div>
                  <h3 className="text-sm font-serif font-semibold text-brand-light">Larami AI</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-brand-light/60 uppercase tracking-widest font-bold">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-brand-light/60 hover:text-brand-light transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-light/30">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}>
                    <div className={`flex items-center space-x-2 mb-1 ${msg.role === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${msg.role === "user" ? "bg-brand-primary/20" : "bg-brand-dark/10"}`}>
                        {msg.role === "user" ? <User size={12} className="text-brand-dark/60" /> : <Sparkles size={12} className="text-brand-primary" />}
                      </div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-brand-dark/40">
                        {msg.role === "user" ? "You" : "Larami AI"}
                      </span>
                    </div>
                    
                    <div
                      className={`p-3 rounded-sm text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-brand-primary text-brand-dark"
                          : "bg-white border border-brand-primary/10 text-brand-dark/80 shadow-sm"
                      }`}
                    >
                      {msg.image && (
                        <img src={msg.image} alt="Uploaded vibe" className="w-full h-auto rounded-sm mb-2" />
                      )}
                      <div className="markdown-body prose prose-sm max-w-none">
                        <Markdown>{msg.text}</Markdown>
                      </div>
                    </div>
                    
                    {/* Quick Action Button for First Model Message */}
                    {idx === 0 && msg.role === "model" && messages.length === 1 && (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        onClick={() => fileInputRef.current?.click()}
                        className="mt-4 flex items-center space-x-2 bg-brand-primary text-brand-dark px-4 py-2 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-brand-secondary transition-all shadow-md border border-brand-dark/5"
                      >
                        <ImageIcon size={14} />
                        <span>Upload Vibe Image</span>
                      </motion.button>
                    )}
                  </div>
                </div>
              ))}
              {(isLoading || isImageLoading) && (
                <div className="flex justify-start">
                  <div className="bg-white border border-brand-primary/10 p-3 rounded-sm flex items-center space-x-2">
                    <Loader2 size={16} className="animate-spin text-brand-primary" />
                    <span className="text-xs text-brand-dark/40 font-medium">Larami is thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-brand-primary/10">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="p-2 text-brand-dark/40 hover:text-brand-primary transition-colors relative group"
                  title="Upload image for vibe matching"
                >
                  <ImageIcon size={20} />
                  {messages.length === 1 && (
                    <span className="absolute top-0 right-0 w-2 h-2 bg-brand-primary rounded-full animate-ping" />
                  )}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-brand-dark text-brand-light px-2 py-1 rounded text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Match a Vibe
                  </div>
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about a room or vibe..."
                  className="flex-1 bg-brand-light/50 border border-brand-primary/10 rounded-sm px-4 py-2 text-sm focus:outline-none focus:border-brand-primary transition-colors"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className="p-2 bg-brand-dark text-brand-light rounded-sm hover:bg-brand-primary hover:text-brand-dark transition-all disabled:opacity-50 disabled:hover:bg-brand-dark disabled:hover:text-brand-light"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[9px] text-center mt-2 text-brand-dark/30 uppercase tracking-widest font-bold">
                Powered by Gemini AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-dark text-brand-primary flex items-center justify-center rounded-full shadow-2xl border-2 border-brand-primary/20 relative group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageSquare size={24} />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-primary rounded-full border-2 border-brand-dark animate-pulse" />
        )}
        <div className="absolute right-full mr-4 bg-brand-dark text-brand-light px-3 py-1.5 rounded-sm text-[10px] font-bold tracking-widest uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-brand-primary/10">
          Chat with us
        </div>
      </motion.button>
    </div>
  );
}
