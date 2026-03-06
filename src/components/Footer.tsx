import React from 'react';
import { Leaf, Globe, Users, MapPin, IndianRupee, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  setCurrentView: (view: 'home' | 'seeds' | 'market' | 'dashboard') => void;
}

export function Footer({ setCurrentView }: FooterProps) {
  return (
    <footer className="bg-farm-green text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Leaf className="text-farm-accent w-10 h-10" />
              <span className="text-3xl font-bold serif uppercase tracking-tight">Connect With Farmers</span>
            </div>
            <p className="text-white/60 max-w-md leading-relaxed mb-8">
              South India’s trusted direct farm-to-customer network, eliminating middlemen 
              and ensuring transparent, fair agricultural trade.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-farm-accent transition-colors cursor-pointer">
                <Globe className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-farm-accent transition-colors cursor-pointer">
                <Users className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-8">Platform</h4>
            <ul className="space-y-4 text-white/50">
              <li><button onClick={() => setCurrentView('home')} className="hover:text-farm-accent transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentView('seeds')} className="hover:text-farm-accent transition-colors">Seed Varieties</button></li>
              <li><button onClick={() => setCurrentView('dashboard')} className="hover:text-farm-accent transition-colors">Farmer Dashboard</button></li>
              <li><button onClick={() => setCurrentView('market')} className="hover:text-farm-accent transition-colors">Marketplace</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-8">Contact</h4>
            <ul className="space-y-4 text-white/50">
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Tamil Nadu, India</li>
              <li className="flex items-center gap-3"><IndianRupee className="w-4 h-4" /> support@connectfarmers.com</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4" /> Verified FPO Partner</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-sm">
          <p>© 2024 Connect With Farmers. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
