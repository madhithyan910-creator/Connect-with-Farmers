import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Marketplace } from './components/Marketplace';
import { FarmerDashboard } from './components/FarmerDashboard';
import { SeedVarieties } from './components/SeedVarieties';
import { LoginModal } from './components/LoginModal';
import { Footer } from './components/Footer';
import { ThemeSettings } from './components/ThemeSettings';

export default function App() {
  const [currentView, setCurrentView] = React.useState<'home' | 'seeds' | 'market' | 'dashboard'>('home');
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userRole, setUserRole] = React.useState<'farmer' | 'consumer' | null>(null);
  
  const [colors, setColors] = React.useState({
    green: '#2E7D32',
    accent: '#E91E63',
    blue: '#00AEEF',
    gold: '#D4AF37',
    light: '#fdfcf0',
    text: '#1a1a1a'
  });

  const darkColors = {
    green: '#4caf50',
    accent: '#ff4081',
    blue: '#40c4ff',
    gold: '#ffd700',
    light: '#121212',
    text: '#f5f5f5'
  };

  const defaultLightColors = {
    green: '#2E7D32',
    accent: '#E91E63',
    blue: '#00AEEF',
    gold: '#D4AF37',
    light: '#fdfcf0',
    text: '#1a1a1a'
  };

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  React.useEffect(() => {
    const root = document.documentElement;
    const currentColors = isDarkMode ? darkColors : colors;
    
    root.style.setProperty('--color-farm-green', currentColors.green);
    root.style.setProperty('--color-farm-accent', currentColors.accent);
    root.style.setProperty('--color-farm-blue', currentColors.blue);
    root.style.setProperty('--color-farm-gold', currentColors.gold);
    root.style.setProperty('--color-farm-light', currentColors.light);
    root.style.setProperty('--color-farm-text', currentColors.text);
  }, [colors, isDarkMode]);

  const handleColorChange = (key: string, value: string) => {
    setColors(prev => ({ ...prev, [key]: value }));
  };

  const resetColors = () => {
    setColors(isDarkMode ? darkColors : defaultLightColors);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-farm-accent selection:text-white bg-farm-light text-farm-text transition-colors duration-300">
      <ThemeSettings 
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        colors={colors}
        handleColorChange={handleColorChange}
        resetColors={resetColors}
      />

      <Navigation 
        currentView={currentView}
        setCurrentView={setCurrentView}
        isLoggedIn={isLoggedIn}
        userRole={userRole}
        setIsLoggedIn={setIsLoggedIn}
        setIsLoginOpen={setIsLoginOpen}
      />


      <AnimatePresence mode="wait">
        {currentView === 'home' && (
          <Home setCurrentView={setCurrentView} setIsLoginOpen={setIsLoginOpen} />
        )}

        {currentView === 'seeds' && (
          <motion.div
            key="seeds"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <SeedVarieties />
          </motion.div>
        )}

        {currentView === 'market' && (
          <motion.div
            key="market"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <Marketplace />
          </motion.div>
        )}

        {currentView === 'dashboard' && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <FarmerDashboard />
          </motion.div>
        )}
      </AnimatePresence>

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLogin={(role) => {
          setIsLoggedIn(true);
          setUserRole(role);
          setIsLoginOpen(false);
          if (role === 'farmer') setCurrentView('dashboard');
          else setCurrentView('market');
        }}
      />

      <Footer setCurrentView={setCurrentView} />
    </div>
  );
}