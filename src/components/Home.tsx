import React from 'react';
import { useState } from "react";
import { translations } from "../translations";
import FarmGame from "./FarmGame";
import { motion } from 'framer-motion';
import { 
  MapPin, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2, 
  Globe, 
  Users, 
  Target, 
  Apple, 
  ShoppingBasket, 
  Zap, 
  Award, 
  BarChart3, 
  Warehouse, 
  Layers, 
  Package, 
  Truck, 
  IndianRupee, 
  HelpCircle, 
  Building2, 
  PlayCircle 
} from 'lucide-react';

interface HomeProps {
  setCurrentView: (view: 'home' | 'seeds' | 'market' | 'dashboard') => void;
  setIsLoginOpen: (open: boolean) => void;
}

export function Home({ setCurrentView, setIsLoginOpen }: HomeProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-farm-light">
        <div className="absolute inset-0 z-0">
    
<img 
  src="/hero-bg.jpg" // Path to your local file in the public folder
  alt="Indian Farmer in Field" 
  className="w-full h-full object-cover opacity-80"
  onError={(e) => {
    // Fallback to Unsplash if local image is not found
    e.currentTarget.src = "https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?q=80&w=2000&auto=format&fit=crop";
  }}
  referrerPolicy="no-referrer"
/>

          <div className="absolute inset-0 bg-gradient-to-r from-farm-light/80 via-farm-light/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20 pb-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-farm-blue/10 text-farm-blue text-sm font-bold mb-6"
            >
              <MapPin className="w-4 h-4" />
              Empowering the Next Generation of Farmers
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-bold text-farm-green serif leading-[0.9] mb-8"
            >
              Vibrant Future for <br />
              <span className="text-farm-accent italic">Indian Agriculture.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-700 font-medium max-w-xl mb-10 leading-relaxed"
            >
              Eliminating the structural gap between producers and households. 
              Direct aggregation, transparent pricing, and quality-controlled delivery.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <button onClick={() => setCurrentView('market')} className="bg-farm-green text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-farm-green/90 transition-all shadow-xl flex items-center gap-3 group">
                Explore Market <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => { setIsLoginOpen(true); }}
                className="bg-white text-farm-green border-2 border-farm-green/20 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-farm-light transition-all"
              >
                Partner as Farmer
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Problem & Solution */}
      <section id="concept" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-bold text-farm-green serif mb-8">The Disconnect We Solve</h2>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 rounded-3xl bg-red-50 border border-red-100">
                  <AlertCircle className="text-red-500 w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="font-bold text-red-900 mb-2">For Farmers</h4>
                    <p className="text-red-800/70 text-sm leading-relaxed">
                      Low price realization due to middlemen, price manipulation in mandis, delayed payments, and limited bargaining power.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 rounded-3xl bg-orange-50 border border-orange-100">
                  <AlertCircle className="text-orange-500 w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="font-bold text-orange-900 mb-2">For Consumers</h4>
                    <p className="text-orange-800/70 text-sm leading-relaxed">
                      High retail prices, zero transparency in sourcing, and inconsistent quality across perishable goods.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="bg-farm-light p-10 rounded-[40px] border border-farm-green/5">
              <h3 className="text-3xl font-bold text-farm-green serif mb-6">Our Concept</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                "Connect With Farmers" is a digital aggregation platform that directly connects South Indian farmers 
                with households, institutions, and bulk buyers through a controlled marketplace.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Farmer Verification",
                  "Direct Ordering",
                  "Transparent Pricing",
                  "Direct Settlement",
                  "Quality Inspection",
                  "Scheduled Delivery"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-farm-green font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-farm-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

{/* Farmer Story Video */}
<section className="py-16 bg-[#e8e3d6]">
  <div className="max-w-6xl mx-auto px-4 text-center">

    <h2 className="text-3xl font-bold mb-6">
      Our Farmers Story
    </h2>

    <div className="rounded-xl overflow-hidden shadow-lg">
<video
  autoPlay
  muted
  loop
  playsInline
  className="w-full rounded-xl"
>        <source src="/farmer-story.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

  </div>
</section>
      {/* Market Opportunity */}
      <section id="market" className="py-24 bg-farm-green text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Globe className="w-full h-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold serif mb-6">The Southern India Opportunity</h2>
            <p className="text-white/70 text-lg">
              South India contributes significantly to India's agricultural production. 
              Capturing even 0.5% of South Indian farmers creates a massive, stable base.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "India's Farmers", value: "146M", icon: Users },
              { label: "Target Share (Y3)", value: "1%+", icon: Target },
              { label: "Key Crops", value: "Rice, Spices, Coconut", icon: Apple },
              { label: "Market Segment", value: "Daily Essential", icon: ShoppingBasket },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 text-center"
              >
                <stat.icon className="w-10 h-10 text-farm-accent mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/60 text-sm font-medium uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid lg:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="text-farm-accent" /> USP: Strict Model
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                No open retailer onboarding initially. Prevents bulk buyer dominance and price suppression.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="text-farm-accent" /> Regional Deep Focus
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Instead of wide national expansion, we build deep trust as "The Southern India Farmer Network".
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BarChart3 className="text-farm-accent" /> Awareness-First
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Village-level awareness drives and local language marketing build offline trust before digital scaling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Model */}
      <section id="operations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-farm-green serif mb-4">Operational Excellence</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A controlled distribution model ensuring quality from aggregation to doorstep.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Aggregation Centers", 
                desc: "Strategic collection points near production hubs to reduce wastage.",
                icon: Warehouse 
              },
              { 
                title: "Sorting & Grading", 
                desc: "Standardized quality checkpoints and cold storage facilities.",
                icon: Layers 
              },
              { 
                title: "Hygienic Packaging", 
                desc: "In-house units ensuring proper weight and grading labels.",
                icon: Package 
              },
              { 
                title: "Outsourced Logistics", 
                desc: "Contract-based delivery to maintain operational flexibility.",
                icon: Truck 
              },
            ].map((op, i) => (
              <div key={i} className="group">
                <div className="bg-farm-light w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-farm-accent transition-colors">
                  <op.icon className="text-farm-green w-8 h-8 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-farm-green mb-3">{op.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{op.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 bg-farm-light rounded-[40px] border border-farm-green/5">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-farm-green serif mb-4">Government Support & Subsidies</h3>
                <p className="text-gray-600 mb-6">
                  Leveraging regional and national initiatives to build a robust agricultural infrastructure.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Tamil Nadu Agritech Startup Grants",
                    "Grameen Bhandaran Yojana",
                    "FPO Support (10,000 FPOs)",
                    "Agricultural Infrastructure Fund (AIF)"
                  ].map((sub, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm">
                      <IndianRupee className="text-farm-accent w-5 h-5" />
                      <span className="text-sm font-bold text-farm-green">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-farm-green p-8 rounded-3xl text-white">
                <HelpCircle className="w-10 h-10 text-farm-accent mb-4" />
                <h4 className="text-lg font-bold mb-2">Farmer Engagement</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Regular village meetings, demo sessions, and training on digital pricing systems build grassroots trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Channels */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Online Platform", desc: "Seamless ordering via our mobile app and website.", icon: Globe },
                  { title: "Company Outlets", desc: "Direct retail points in urban consumption centers.", icon: Warehouse },
                  { title: "Franchisee Stores", desc: "Authorized partners ensuring local community reach.", icon: Users },
                  { title: "Institutional Supply", desc: "Bulk supply for hospitals, schools, and institutions.", icon: Building2 },
                ].map((channel, i) => (
                  <div key={i} className="bg-farm-light p-6 rounded-3xl border border-farm-green/5">
                    <channel.icon className="text-farm-accent w-8 h-8 mb-4" />
                    <h4 className="font-bold text-farm-green mb-2">{channel.title}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{channel.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-farm-green serif mb-6">Controlled Distribution</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                To maintain price stability and quality, we follow a strictly controlled distribution model. 
                No open market retail selling is permitted, ensuring every product is verified and price-fixed centrally.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-farm-green font-bold">
                  <div className="w-2 h-2 rounded-full bg-farm-accent"></div>
                  No Wholesalers Allowed
                </div>
                <div className="flex items-center gap-3 text-farm-green font-bold">
                  <div className="w-2 h-2 rounded-full bg-farm-accent"></div>
                  No Open-Market Retailers
                </div>
                <div className="flex items-center gap-3 text-farm-green font-bold">
                  <div className="w-2 h-2 rounded-full bg-farm-accent"></div>
                  Direct Farmer-to-Channel Flow
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Geographical Reach */}
      <section id="reach" className="py-24 bg-farm-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-farm-green serif mb-4">Roadmap to Scale</h2>
            <p className="text-gray-500">Deep regional penetration strategy over 36 months.</p>
          </div>

          <div className="space-y-8">
            {[
              {
                phase: "Phase 1: Pilot Region (0-12M)",
                focus: "Deep Focus in Tamil Nadu",
                districts: "Coimbatore, Erode, Salem, Namakkal, Madurai, Theni",
                goals: "Build supply chain, test logistics, achieve operational repeatability."
              },
              {
                phase: "Phase 2: Southern Expansion (12-24M)",
                focus: "Multi-State Growth",
                districts: "Karnataka (Bengaluru, Mysuru), Kerala (Kochi), AP (Guntur), Telangana (Hyderabad)",
                goals: "Replicate hub model, expand farmer onboarding, local language adaptation."
              },
              {
                phase: "Phase 3: Scale-Deep Strategy (24-36M+)",
                focus: "Tier-2 & Tier-3 Cities",
                districts: "Tiruppur, Trichy, Hubballi, Mangaluru, Kollam, Visakhapatnam, Nizamabad",
                goals: "Higher order volumes, mega fulfillment hubs, cold chain partnerships."
              }
            ].map((p, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-farm-green/5 flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="bg-farm-accent text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shrink-0">
                  {i + 1}
                </div>
                <div>
                  <div className="text-farm-accent font-bold uppercase tracking-widest text-sm mb-2">{p.phase}</div>
                  <h3 className="text-2xl font-bold text-farm-green serif mb-4">{p.focus}</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-xs font-bold uppercase text-gray-400 mb-2">Strategic Zones</h5>
                      <p className="text-gray-700 text-sm">{p.districts}</p>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold uppercase text-gray-400 mb-2">Primary Goals</h5>
                      <p className="text-gray-700 text-sm">{p.goals}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Our Team */}
<section className="py-24 bg-farm-light">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-farm-green serif mb-4">
        Meet Our Team
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        A passionate group of innovators committed to building a transparent
        and sustainable agricultural marketplace.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

      {[
        {
          name: "Somshekhar",
          role: "Founder & Strategy",
          img: "/team1.jpg"
        },
        {
          name: "Adhithyan M",
          role: "Technology Lead",
          img: "/team2.jpg"
        },
        {
          name: "Satyam Kochar",
          role: "Operations",
          img: "/team3.jpg"
        },
        {
          name: "Younu Hwang Subba",
          role: "Farmer Relations",
          img: "/team4.jpg"
        },
        {
          name: "Himal Khawas",
          role: "Marketing & Outreach",
          img: "/team5.jpg"
        }
      ].map((member, i) => (
        <div
          key={i}
          className="bg-white rounded-3xl shadow-md p-6 text-center hover:shadow-xl transition"
        >
          <img
            src={member.img}
            alt={member.name}
            className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
          />

          <h4 className="font-bold text-farm-green text-lg">
            {member.name}
          </h4>

          <p className="text-sm text-gray-500">
            {member.role}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>
<FarmGame />
const [lang, setLang] = useState("en");
<select
  value={lang}
  onChange={(e) => setLang(e.target.value)}
  className="border p-2 rounded-lg"
>
  <option value="en">English</option>
  <option value="hi">Hindi</option>
  <option value="ta">Tamil</option>
  <option value="te">Telugu</option>
  <option value="kn">Kannada</option>
  <option value="ml">Malayalam</option>
</select>
<select value={lang} onChange={(e) => setLang(e.target.value)}>
      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-farm-blue via-farm-accent to-farm-gold rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000&auto=format&fit=crop" 
                alt="Produce" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold serif mb-8">Ready to Connect?</h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Join the trusted direct farm-to-customer network. 
                Experience transparency, quality, and fair trade with the next generation of Indian farmers.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="bg-white text-farm-accent px-12 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all flex items-center gap-3">
                  Download App <PlayCircle className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => setIsLoginOpen(true)}
                  className="bg-farm-green text-white px-12 py-5 rounded-2xl text-xl font-bold hover:bg-farm-green/90 transition-all shadow-xl"
                >
                  Partner with Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}