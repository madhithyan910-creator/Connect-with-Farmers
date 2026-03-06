import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Sun, Moon, RotateCcw } from 'lucide-react';

interface ThemeSettingsProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  colors: {
    green: string;
    accent: string;
    blue: string;
    gold: string;
    light: string;
    text: string;
  };
  handleColorChange: (key: string, value: string) => void;
  resetColors: () => void;
}

export function ThemeSettings({
  isDarkMode,
  setIsDarkMode,
  colors,
  handleColorChange,
  resetColors
}: ThemeSettingsProps) {
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);

  return (
    <>
      {/* Theme Settings Toggle */}
      <button 
        onClick={() => setIsSettingsOpen(true)}
        className="fixed bottom-8 right-8 z-[60] bg-farm-green text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <Settings className="w-6 h-6" />
      </button>

      {/* Theme Settings Panel */}
      <AnimatePresence>
        {isSettingsOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSettingsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[70]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white dark:bg-zinc-900 shadow-2xl z-[80] p-8 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-farm-green serif">Theme Settings</h3>
                <button onClick={() => setIsSettingsOpen(false)} className="text-gray-400 hover:text-farm-green">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-8">
                {/* Mode Toggle */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Appearance</label>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 dark:bg-zinc-800 rounded-xl">
                    <button 
                      onClick={() => setIsDarkMode(false)}
                      className={`flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition-all ${!isDarkMode ? 'bg-white dark:bg-zinc-700 shadow-sm text-farm-green' : 'text-gray-500'}`}
                    >
                      <Sun className="w-4 h-4" /> Light
                    </button>
                    <button 
                      onClick={() => setIsDarkMode(true)}
                      className={`flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition-all ${isDarkMode ? 'bg-white dark:bg-zinc-700 shadow-sm text-farm-green' : 'text-gray-500'}`}
                    >
                      <Moon className="w-4 h-4" /> Dark
                    </button>
                  </div>
                </div>

                {/* Color Adjustments */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block">Colors</label>
                    <button onClick={resetColors} className="text-xs font-bold text-farm-accent flex items-center gap-1 hover:underline">
                      <RotateCcw className="w-3 h-3" /> Reset
                    </button>
                  </div>
                  <div className="space-y-4">
                    {[
                      { key: 'green', label: 'Primary Green' },
                      { key: 'accent', label: 'Accent Pink' },
                      { key: 'blue', label: 'Primary Blue' },
                      { key: 'gold', label: 'Gold Accent' },
                      { key: 'light', label: 'Background' },
                      { key: 'text', label: 'Text Color' },
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{item.label}</span>
                        <input 
                          type="color" 
                          value={colors[item.key as keyof typeof colors]}
                          onChange={(e) => handleColorChange(item.key, e.target.value)}
                          className="w-8 h-8 rounded-lg cursor-pointer border-none bg-transparent"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-100 dark:border-zinc-800">
                  <p className="text-xs text-gray-400 leading-relaxed italic">
                    Adjust colors interactively to see how they look across the entire application. These changes are applied via CSS variables.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
