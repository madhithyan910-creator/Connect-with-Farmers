import React from 'react';
import { motion } from 'framer-motion';

export function SeedVarieties() {
  const categories = [
    {
      title: "High-Yield Cereals",
      seeds: [
        { name: "Sona Masuri Gold", type: "Rice", yield: "25-30 Quintals/Acre", features: "Pest resistant, Fine grain" },
        { name: "Hybrid Maize H-12", type: "Corn", yield: "35-40 Quintals/Acre", features: "Drought tolerant, High starch" },
        { name: "Premium Basmati 1121", type: "Rice", yield: "18-22 Quintals/Acre", features: "Extra long grain, Aromatic" }
      ]
    },
    {
      title: "Organic Pulses",
      seeds: [
        { name: "Desi Toor Dal", type: "Pigeon Pea", yield: "8-10 Quintals/Acre", features: "100% Organic, High protein" },
        { name: "Black Gram (Urad)", type: "Vigna mungo", yield: "6-8 Quintals/Acre", features: "Short duration, Soil enricher" }
      ]
    },
    {
      title: "Hybrid Vegetables",
      seeds: [
        { name: "Ruby Red Tomato", type: "Tomato", yield: "20-25 Tons/Acre", features: "Firm fruit, Long shelf life" },
        { name: "Emerald Green Chilli", type: "Chilli", yield: "15-18 Tons/Acre", features: "High pungency, Virus resistant" }
      ]
    }
  ];

  return (
    <div className="bg-farm-light min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-farm-green serif mb-4">Premium Seed Varieties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide certified, high-quality seeds to our partner farmers to ensure maximum yield and superior produce quality.
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold text-farm-green serif mb-8 border-b border-farm-green/10 pb-2">{cat.title}</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {cat.seeds.map((seed, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-3xl shadow-sm border border-farm-green/5"
                  >
                    <div className="bg-farm-blue/10 text-farm-blue text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-4">
                      {seed.type}
                    </div>
                    <h4 className="text-xl font-bold text-farm-green mb-2">{seed.name}</h4>
                    <div className="space-y-3 mt-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Expected Yield</span>
                        <span className="text-farm-green font-bold">{seed.yield}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Key Features</span>
                        <span className="text-gray-700 text-right">{seed.features}</span>
                      </div>
                    </div>
                    <button className="w-full mt-8 bg-farm-light text-farm-green font-bold py-3 rounded-xl hover:bg-farm-blue hover:text-white transition-colors">
                      View Details
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
