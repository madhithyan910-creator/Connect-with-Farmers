import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, ShoppingBasket, Warehouse } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (role: 'farmer' | 'consumer') => void;
}

export function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [role, setRole] = React.useState<'farmer' | 'consumer'>('consumer');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-[100]"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white dark:bg-zinc-900 rounded-[40px] shadow-2xl z-[110] p-10 overflow-hidden"
          >
            <div className="text-center mb-10">
              <div className="bg-farm-green/10 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-farm-green w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-farm-green serif mb-2">Welcome Back</h3>
              <p className="text-gray-500">Select your role to continue to the platform.</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <button 
                onClick={() => setRole('consumer')}
                className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-3 ${role === 'consumer' ? 'border-farm-green bg-farm-green/5' : 'border-gray-100 hover:border-farm-green/20'}`}
              >
                <ShoppingBasket className={`w-8 h-8 ${role === 'consumer' ? 'text-farm-green' : 'text-gray-400'}`} />
                <span className={`font-bold text-sm ${role === 'consumer' ? 'text-farm-green' : 'text-gray-400'}`}>Consumer</span>
              </button>
              <button 
                onClick={() => setRole('farmer')}
                className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-3 ${role === 'farmer' ? 'border-farm-green bg-farm-green/5' : 'border-gray-100 hover:border-farm-green/20'}`}
              >
                <Warehouse className={`w-8 h-8 ${role === 'farmer' ? 'text-farm-green' : 'text-gray-400'}`} />
                <span className={`font-bold text-sm ${role === 'farmer' ? 'text-farm-green' : 'text-gray-400'}`}>Farmer</span>
              </button>
            </div>

            <div className="space-y-4 mb-10">
              <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 border-none outline-none focus:ring-2 focus:ring-farm-green text-sm" />
              <input type="password" placeholder="Password" className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 border-none outline-none focus:ring-2 focus:ring-farm-green text-sm" />
            </div>

            <button 
              onClick={() => onLogin(role)}
              className="w-full bg-farm-green text-white py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all mb-6"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-400">
              Don't have an account? <button className="text-farm-accent font-bold hover:underline">Register Now</button>
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
