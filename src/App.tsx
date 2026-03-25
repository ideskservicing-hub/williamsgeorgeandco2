/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
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
  Share2
} from "lucide-react";
import { useState } from "react";

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 1. Top Arch */}
    <path 
      d="M15 25 C35 12 65 12 85 25 L82 33 C65 22 35 22 18 33 Z" 
      fill="#F16529" 
    />
    {/* 2. Left Wing */}
    <path 
      d="M12 38 C15 65 45 95 48 95 L55 88 C25 65 18 38 18 38 Z" 
      fill="#F16529" 
    />
    {/* 3. Right Wing */}
    <path 
      d="M88 38 C85 65 55 95 52 95 L45 88 C75 65 82 38 82 38 Z" 
      fill="#F16529" 
    />
    {/* 4. Central 'G' Shape - Precise Stroke */}
    <path 
      d="M36 48 H64 V77 H36 V62 H54" 
      stroke="#F16529" 
      strokeWidth="8" 
      strokeLinejoin="miter"
      strokeLinecap="butt"
    />
    {/* 5. Bottom Diamond */}
    <path 
      d="M50 98 L60 108 L50 118 L40 108 Z" 
      fill="#F16529" 
    />
  </svg>
);

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Logo className="w-10 h-10" />
        <span className="font-serif text-xl font-bold tracking-tight text-slate-900">Williams George & Co. (Chartered Accountants)</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#expertise" className="hover:text-slate-900 transition-colors">Expertise</a>
        <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
        <a href="#process" className="hover:text-slate-900 transition-colors">Process</a>
        <a href="#contact" className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all">
          Get In Touch
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-40 pb-24 px-6 bg-[#f8f9fa] relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <span className="inline-block px-3 py-1 bg-slate-200 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-600 rounded-full mb-6">
          Chartered Accountants & Business Advisors
        </span>
        <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[1.05] mb-8 text-slate-900">
          Strategic <br />
          <span className="italic font-normal text-slate-700">Financial Excellence.</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
          Empowering businesses and individuals with comprehensive financial solutions, rooted in integrity and precision.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-lg shadow-slate-200">
            Start Your Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#expertise" className="px-8 py-4 border border-slate-200 rounded-full font-medium hover:bg-white transition-all text-slate-700">
            Explore Our Expertise
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
      desc: "Delivering transparency and confidence through rigorous independent audits and assurance services."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Taxation Strategy",
      desc: "Optimizing your tax position with proactive planning and meticulous compliance for corporations and individuals."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Business Advisory",
      desc: "Strategic guidance to navigate growth, manage risks, and enhance operational efficiency."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Corporate Finance",
      desc: "Expert support for mergers, acquisitions, capital raising, and financial restructuring."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Payroll & Outsourcing",
      desc: "Reliable back-office solutions that allow you to focus on your core business goals."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Private Client Services",
      desc: "Bespoke wealth management and estate planning for high-net-worth individuals and families."
    }
  ];

  return (
    <section id="expertise" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-900">Our Expertise</h2>
          <div className="w-20 h-1 bg-slate-900 mx-auto mb-8" />
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Comprehensive financial solutions tailored to your unique needs, delivered with the highest standards of professional excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 border border-slate-100 rounded-2xl hover:shadow-xl hover:shadow-slate-100 transition-all group bg-slate-50/50"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => (
  <section className="py-32 px-6 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
          Why Williams George & Co. <br />
          <span className="italic font-normal text-slate-400">(Chartered Accountants)</span>
        </h2>
        <p className="text-slate-400 mb-12 text-lg leading-relaxed">
          Partnering for financial mastery requires more than just numbers. It requires a legacy of trust, a commitment to precision, and a vision for your future.
        </p>
        <div className="space-y-6">
          {[
            "Member of the Institute of Chartered Accountants",
            "Decades of combined partner experience",
            "Bespoke strategies for diverse industries",
            "Unwavering commitment to ethical standards"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <CheckCircle2 className="w-6 h-6 text-slate-400" />
              <span className="text-lg font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="aspect-square rounded-3xl overflow-hidden grayscale opacity-80">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-2xl shadow-2xl hidden md:block max-w-xs">
          <Award className="w-10 h-10 text-slate-900 mb-4" />
          <p className="text-slate-900 font-bold text-xl mb-2">Partnering for Mastery</p>
          <p className="text-slate-500 text-sm leading-relaxed">
            We don't just manage your finances; we master them alongside you.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" alt="Professional" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-12">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop" alt="Meeting" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-slate-900">About the Firm</h2>
          <h3 className="text-2xl italic text-slate-600 mb-8">A Legacy of Integrity and Accuracy.</h3>
          <p className="text-slate-500 text-lg leading-relaxed mb-8">
            Williams George & Co. was founded on the principles of trust, transparency, and technical excellence. As Chartered Accountants, we understand the weight of our responsibility to our clients and the public.
          </p>
          <p className="text-slate-500 text-lg leading-relaxed mb-10">
            Our firm brings together a diverse team of experts dedicated to providing high-level financial oversight and strategic advisory. We pride ourselves on building long-term relationships that transcend simple transactions.
          </p>

        </div>
      </div>
    </div>
  </section>
);

const Process = () => {
  const steps = [
    { number: "01", title: "Discovery", desc: "We begin by understanding your unique financial landscape and long-term objectives." },
    { number: "02", title: "Analysis", desc: "Our experts perform a deep dive into your current structures and identify opportunities." },
    { number: "03", title: "Strategy", desc: "We develop a bespoke roadmap designed to achieve your specific financial goals." },
    { number: "04", title: "Execution", desc: "Meticulous implementation of the strategy with ongoing oversight and reporting." }
  ];

  return (
    <section id="process" className="py-32 px-6 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-900">The Process</h2>
          <h3 className="text-2xl italic text-slate-600 mb-8">How We Drive Your Growth.</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="text-5xl font-serif font-bold text-slate-100 absolute top-4 right-4 leading-none">
                {step.number}
              </span>
              <h4 className="text-xl font-bold mb-4 text-slate-900 relative z-10">{step.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Leadership = () => (
  <section className="py-32 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-900">Our Leadership</h2>
        <h3 className="text-2xl italic text-slate-600 mb-8">Meet the Minds Behind Your Success.</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          { name: "George Williams", role: "Senior Partner, FCA", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
          { name: "Sarah Jenkins", role: "Taxation Partner, CTA", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
          { name: "David Chen", role: "Audit Director, ACA", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" }
        ].map((member, i) => (
          <div key={i} className="group">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
            <p className="text-slate-500 uppercase tracking-widest text-xs font-bold mt-1">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-slate-900">Get In Touch</h2>
          <h3 className="text-2xl italic text-slate-600 mb-12">Ready to Optimize Your Future?</h3>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                <Phone className="w-5 h-5 text-slate-900" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
                <p className="text-xl font-medium text-slate-900">+234-0809-090-1714</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                <Mail className="w-5 h-5 text-slate-900" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                <p className="text-xl font-medium text-slate-900">info@williamsgeorgeandco.com</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                <MapPin className="w-5 h-5 text-slate-900" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Visit Us</p>
                <p className="text-xl font-medium text-slate-900">GoldRim Plaza, Suit 10SF, 207, Old Abeokuta Road, Agege, Lagos, Nigeria</p>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-200">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Follow Our Updates</p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-slate-900 hover:text-white transition-all group" title="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-slate-900 hover:text-white transition-all group" title="Linkedin">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-slate-900 hover:text-white transition-all group" title="Youtube">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-slate-900 hover:text-white transition-all group" title="Social">
                  <Share2 className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50">
          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input required type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-slate-900 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input required type="email" className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-slate-900 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Service Required</label>
                <select className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-slate-900 outline-none transition-all">
                  <option>Audit & Assurance</option>
                  <option>Taxation Strategy</option>
                  <option>Business Advisory</option>
                  <option>Corporate Finance</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                <textarea required className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-slate-900 outline-none transition-all h-32 resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-slate-900 text-white rounded-xl font-bold uppercase tracking-[0.2em] hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                Send Message
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-20"
            >
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-slate-900" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Message Received</h4>
              <p className="text-slate-500">Thank you for reaching out. A partner will contact you within 24 hours.</p>
              <button onClick={() => setSubmitted(false)} className="mt-8 text-slate-900 font-bold uppercase tracking-widest text-xs underline underline-offset-4">
                Send another message
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

const Legal = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <>
      <section className="py-12 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
          <button onClick={() => setShowPrivacy(true)} className="hover:text-white transition-colors">Privacy Statement</button>
          <button onClick={() => setShowDisclaimer(true)} className="hover:text-white transition-colors">Legal Disclaimer</button>
        </div>
      </section>

      {/* Modals */}
      {(showPrivacy || showDisclaimer) && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => { setShowPrivacy(false); setShowDisclaimer(false); }} />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-3xl p-10 relative z-10 shadow-2xl"
          >
            <button 
              onClick={() => { setShowPrivacy(false); setShowDisclaimer(false); }}
              className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <ArrowRight className="w-6 h-6 rotate-180" />
            </button>
            
            {showPrivacy && (
              <div className="prose prose-slate max-w-none">
                <h2 className="text-3xl font-serif font-bold mb-6">Privacy Statement</h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p><strong>1. Introduction:</strong> Williams George & Co. (Chartered Accountants) is committed to protecting the privacy and security of your personal data. This statement outlines how we collect, use, and safeguard information in accordance with the Nigeria Data Protection Regulation (NDPR) and other applicable laws.</p>
                  <p><strong>2. Our Legal Grounds for Processing:</strong> We process personal data based on several legal grounds, including the performance of a contract, compliance with legal and regulatory obligations (such as tax and audit requirements), and our legitimate business interests in providing high-quality professional services.</p>
                  <p><strong>3. Transfers of Personal Data:</strong> Your personal data may be transferred to and stored by third-party service providers who assist us in our operations. We ensure that all such transfers are protected by appropriate security measures and contractual safeguards.</p>
                  <p><strong>4. Our Processing Activities:</strong> We collect and process data for purposes including client onboarding, financial auditing, taxation strategy, corporate finance advisory, and maintaining professional relationships. We only collect data that is necessary for these specific purposes.</p>
                  <p><strong>5. Your Legal Rights:</strong> Under the NDPR, you have rights regarding your personal data, including the right to access, rectify, or request the erasure of your data. You also have the right to object to processing and the right to data portability.</p>
                  <p><strong>6. Contact Us:</strong> If you have any questions about this privacy statement or our data handling practices, please contact us at info@williamsgeorgeandco.com.</p>
                </div>
              </div>
            )}

            {showDisclaimer && (
              <div className="prose prose-slate max-w-none">
                <h2 className="text-3xl font-serif font-bold mb-6">Legal Disclaimer</h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p><strong>1. General Guidance:</strong> The information contained in this site is for general guidance on matters of interest only. The application and impact of laws can vary widely based on the specific facts involved. Given the changing nature of laws, rules, and regulations, there may be delays, omissions, or inaccuracies in information contained in this site.</p>
                  <p><strong>2. No Professional Advice:</strong> Accordingly, the information on this site is provided with the understanding that the authors and publishers are not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal, or other competent advisers.</p>
                  <p><strong>3. Accuracy and Responsibility:</strong> While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, Williams George & Co. (Chartered Accountants) is not responsible for any errors or omissions, or for the results obtained from the use of this information.</p>
                  <p><strong>4. Third-Party Links:</strong> Certain links in this site connect to other websites maintained by third parties over whom Williams George & Co. (Chartered Accountants) has no control. We make no representations as to the accuracy or any other aspect of information contained in other websites.</p>
                  <p><strong>5. Liability:</strong> In no event will Williams George & Co. (Chartered Accountants), its related partners, or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information in this site or for any consequential, special, or similar damages.</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 bg-slate-900 text-white border-t border-slate-800">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="flex items-center gap-3">
        <Logo className="w-10 h-10" />
        <span className="font-serif text-xl font-bold tracking-tight">Williams George & Co.</span>
      </div>
      <p className="text-slate-500 text-sm">
        © 2026 Williams George & Co.(Chartered Accountants). All rights reserved.
      </p>
      <div className="flex flex-col items-center md:items-end gap-4">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Follow Us</p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all" title="Facebook">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all" title="Linkedin">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all" title="Youtube">
            <Youtube className="w-4 h-4" />
          </a>
          <a href="https://github.com/ideskservicing-hub/williamsgeorgeandco2.git" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all" title="GitHub">
            <Github className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all" title="Social">
            <Share2 className="w-4 h-4" />
          </a>
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
      <WhyUs />
      <About />
      <Process />
      <Leadership />
      <Contact />
      <Legal />
      <Footer />
    </div>
  );
}
