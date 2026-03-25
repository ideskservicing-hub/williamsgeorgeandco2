/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Calculator, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Award,
  Briefcase,
  FileText,
  ArrowRight,
  CheckCircle2,
  Lock,
  Scale,
  Facebook,
  Linkedin,
  Youtube,
  Github,
  Share2,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 25 C35 12 65 12 85 25 L82 33 C65 22 35 22 18 33 Z" fill="#F16529" />
    <path d="M12 38 C15 65 45 95 48 95 L55 88 C25 65 18 38 18 38 Z" fill="#F16529" />
    <path d="M88 38 C85 65 55 95 52 95 L45 88 C75 65 82 38 82 38 Z" fill="#F16529" />
    <path d="M36 48 H64 V77 H36 V62 H54" stroke="#F16529" strokeWidth="8" strokeLinejoin="miter" strokeLinecap="butt" />
    <path d="M50 98 L60 108 L50 118 L40 108 Z" fill="#F16529" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-tight text-slate-900 leading-none">Williams George & Co.</span>
            <span className="text-[10px] uppercase tracking-[0.1em] text-slate-500 font-bold mt-1">Chartered Accountants</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#expertise" className="hover:text-slate-900 transition-colors">Expertise</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#process" className="hover:text-slate-900 transition-colors">Process</a>
          <a href="#contact" className="px-6 py-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
            Get In Touch
          </a>
        </div>

        <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-lg font-medium text-slate-600">
              <a href="#expertise" onClick={() => setIsMenuOpen(false)}>Expertise</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#process" onClick={() => setIsMenuOpen(false)}>Process</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-slate-900 font-bold">Contact Us</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="pt-48 pb-32 px-6 bg-[#fcfcfc] relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-1/3 pointer-events-none" />
    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-600 rounded-full mb-8">
          <ShieldCheck className="w-3 h-3" />
          Professional Excellence Since 1998
        </div>
        <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[1.02] mb-10 text-slate-900 tracking-tight">
          Strategic Financial <br />
          <span className="italic font-normal text-slate-500">Mastery & Oversight.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl leading-relaxed font-light">
          Providing high-level audit, taxation, and advisory services to corporations and private clients with unwavering integrity.
        </p>
        <div className="flex flex-wrap gap-5">
          <a href="#contact" className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all flex items-center gap-3 group shadow-2xl shadow-slate-300">
            Schedule Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#expertise" className="px-10 py-5 border border-slate-200 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all text-slate-600 hover:border-slate-400">
            Our Expertise
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Expertise = () => {
  const expertise = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Audit & Assurance",
      desc: "Independent, rigorous examination of financial statements to provide stakeholders with absolute confidence."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Taxation Strategy",
      desc: "Sophisticated tax planning and compliance services designed to optimize your global financial position."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Business Advisory",
      desc: "Strategic consulting to drive growth, navigate complex transitions, and enhance operational efficiency."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Corporate Finance",
      desc: "Expert guidance on mergers, acquisitions, capital raising, and comprehensive financial restructuring."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Outsourced Finance",
      desc: "High-level back-office support including payroll, management accounting, and CFO-level oversight."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Private Client",
      desc: "Bespoke wealth management, estate planning, and tax advisory for high-net-worth individuals."
    }
  ];

  return (
    <section id="expertise" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-4 block">Our Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8">Comprehensive Solutions.</h2>
          <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
            We deliver a full spectrum of professional services, ensuring that every facet of your financial life is managed with precision and foresight.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {expertise.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 border border-slate-100 rounded-3xl hover:border-slate-300 transition-all group bg-slate-50/30"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-32 px-6 bg-slate-50">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
      <div className="relative">
        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
            alt="Office Interior" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-12 -right-12 bg-white p-12 rounded-3xl shadow-xl hidden xl:block max-w-xs">
          <p className="text-4xl font-serif font-bold text-slate-900 mb-2">25+</p>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Years of Excellence</p>
        </div>
      </div>
      <div>
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-6 block">The Firm</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-slate-900 leading-tight">Built on Integrity, <br />Driven by Accuracy.</h2>
        <p className="text-slate-500 text-lg leading-relaxed mb-8">
          Williams George & Co. is a premier firm of Chartered Accountants dedicated to providing high-level financial oversight and strategic advisory. Our legacy is built on the success of our clients and the unwavering ethical standards of our practice.
        </p>
        <p className="text-slate-500 text-lg leading-relaxed mb-12">
          We believe that true financial partnership requires more than just technical skill—it requires a deep understanding of your vision and a commitment to protecting your interests at every turn.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-slate-900 mb-2">ICAN Member</h4>
            <p className="text-sm text-slate-400">Regulated by the Institute of Chartered Accountants of Nigeria.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-2">Global Vision</h4>
            <p className="text-sm text-slate-400">Providing local expertise with a sophisticated global perspective.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-16 lg:p-24 text-white">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10">Let's Discuss Your Strategy.</h2>
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Direct Line</p>
                  <p className="text-xl">+234-0809-090-1714</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Email Inquiry</p>
                  <p className="text-xl">info@williamsgeorgeandco.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Headquarters</p>
                  <p className="text-lg leading-relaxed">GoldRim Plaza, Suit 10SF, 207, Old Abeokuta Road, Agege, Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white p-12 lg:p-24">
            {!submitted ? (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Full Name</label>
                    <input required type="text" className="w-full border-b border-slate-200 py-3 focus:border-slate-900 outline-none transition-all text-slate-900" placeholder="e.g. Alexander Hamilton" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Email Address</label>
                    <input required type="email" className="w-full border-b border-slate-200 py-3 focus:border-slate-900 outline-none transition-all text-slate-900" placeholder="e.g. alex@firm.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Service Interest</label>
                  <select className="w-full border-b border-slate-200 py-3 focus:border-slate-900 outline-none transition-all text-slate-900 bg-transparent">
                    <option>Audit & Assurance</option>
                    <option>Taxation Strategy</option>
                    <option>Business Advisory</option>
                    <option>Corporate Finance</option>
                    <option>Other Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Message</label>
                  <textarea required className="w-full border-b border-slate-200 py-3 focus:border-slate-900 outline-none transition-all text-slate-900 h-32 resize-none" placeholder="Briefly describe your requirements..."></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                  Send Inquiry
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-10 h-10 text-slate-900" />
                </div>
                <h4 className="text-3xl font-serif font-bold text-slate-900 mb-4">Inquiry Received.</h4>
                <p className="text-slate-500 mb-10">A partner will review your request and contact you within one business day.</p>
                <button onClick={() => setSubmitted(false)} className="text-slate-900 font-bold uppercase tracking-widest text-[10px] border-b-2 border-slate-900 pb-1">
                  Send Another Message
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-24 px-6 bg-slate-950 text-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <Logo className="w-12 h-12" />
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight leading-none">Williams George & Co.</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mt-2">Chartered Accountants</span>
            </div>
          </div>
          <p className="text-slate-500 max-w-md leading-relaxed">
            A premier firm of Chartered Accountants providing sophisticated financial oversight and strategic advisory to corporations and private clients worldwide.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-8">Quick Links</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><a href="#expertise" className="hover:text-white transition-colors">Expertise</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Firm</a></li>
            <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-8">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all"><Linkedin className="w-4 h-4" /></a>
            <a href="https://github.com/ideskservicing-hub/williamsgeorgeandco2.git" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all"><Github className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
      <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-widest font-bold text-slate-600">
        <p>© 2026 Williams George & Co. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Legal Disclaimer</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-slate-900 selection:text-white bg-white">
      <Navbar />
      <Hero />
      <Expertise />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
