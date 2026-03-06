import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, X, Menu, LogOut } from 'lucide-react';

interface NavigationProps {
  currentView: string;
  setCurrentView: (view: 'home' | 'seeds' | 'market' | 'dashboard') => void;
  isLoggedIn: boolean;
  userRole: 'farmer' | 'consumer' | null;
  setIsLoggedIn: (val: boolean) => void;
  setIsLoginOpen: (val: boolean) => void;
}

export function Navigation({ 
  currentView, 
  setCurrentView, 
  isLoggedIn, 
  userRole, 
  setIsLoggedIn, 
  setIsLoginOpen 
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-farm-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <Leaf className="text-farm-accent w-8 h-8" />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold text-farm-green serif uppercase tracking-tight">Connect With</span>
              <span className="text-xl font-bold text-farm-blue serif uppercase tracking-tight">Farmers</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => setCurrentView('home')} className={`text-sm font-medium transition-colors ${currentView === 'home' ? 'text-farm-green font-bold underline underline-offset-8' : 'text-gray-600 hover:text-farm-green'}`}>Home</button>
            <button onClick={() => setCurrentView('market')} className={`text-sm font-medium transition-colors ${currentView === 'market' ? 'text-farm-green font-bold underline underline-offset-8' : 'text-gray-600 hover:text-farm-green'}`}>Marketplace</button>
            <button onClick={() => setCurrentView('seeds')} className={`text-sm font-medium transition-colors ${currentView === 'seeds' ? 'text-farm-green font-bold underline underline-offset-8' : 'text-gray-600 hover:text-farm-green'}`}>Seeds</button>
            {isLoggedIn && userRole === 'farmer' && (
              <button onClick={() => setCurrentView('dashboard')} className={`text-sm font-medium transition-colors ${currentView === 'dashboard' ? 'text-farm-green font-bold underline underline-offset-8' : 'text-gray-600 hover:text-farm-green'}`}>Dashboard</button>
            )}
            <a href="#concept" className="text-sm font-medium text-gray-600 hover:text-farm-green transition-colors">Concept</a>
            
            {!isLoggedIn ? (
              <button 
                onClick={() => setIsLoginOpen(true)}
                className="bg-farm-accent text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-farm-accent/90 transition-all shadow-lg hover:scale-105"
              >
                Login
              </button>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                  <span className="text-xs font-bold text-farm-green uppercase tracking-tighter">{userRole}</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Madhithyan</span>
                </div>
                <button 
                  onClick={() => { setIsLoggedIn(false); setCurrentView('home'); }}
                  className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 hover:text-red-500 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-farm-green p-2">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-farm-green/10 px-4 pt-2 pb-6 flex flex-col gap-4 overflow-hidden"
          >
            <button onClick={() => { setCurrentView('home'); setIsMenuOpen(false); }} className="text-left text-sm font-medium text-gray-600">Home</button>
            <button onClick={() => { setCurrentView('seeds'); setIsMenuOpen(false); }} className="text-left text-sm font-medium text-gray-600">Seed Varieties</button>
            <a href="#concept" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-600">Concept</a>
            <a href="#market" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-600">Market</a>
            <a href="#operations" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-600">Operations</a>
            <div className="flex flex-col gap-2 pt-2">
              <button className="bg-farm-green text-white px-4 py-3 rounded-xl text-sm font-bold">Download App</button>
              <button 
                onClick={() => { setIsLoginOpen(true); setIsMenuOpen(false); }}
                className="bg-farm-accent text-white px-4 py-3 rounded-xl text-sm font-bold"
              >
                Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
