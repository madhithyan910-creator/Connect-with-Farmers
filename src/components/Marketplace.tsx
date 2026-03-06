import React from 'react';
import { motion } from 'framer-motion';
import { Search, Star, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

export function Marketplace() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const categories = ['All', 'Vegetables', 'Fruits', 'Grains', 'Spices', 'Dairy'];
  
  const products = [
    { id: 1, name: 'Organic Ponni Rice', category: 'Grains', price: 65, unit: 'kg', farmer: 'Ravi Kumar', location: 'Erode', rating: 4.8, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=400&auto=format&fit=crop' },
    { id: 2, name: 'Alphonso Mangoes', category: 'Fruits', price: 450, unit: 'dozen', farmer: 'Suresh Raina', location: 'Salem', rating: 4.9, image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=400&auto=format&fit=crop' },
    { id: 3, name: 'Country Tomatoes', category: 'Vegetables', price: 30, unit: 'kg', farmer: 'Lakshmi Devi', location: 'Madurai', rating: 4.7, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=400&auto=format&fit=crop' },
    { id: 4, name: 'Fresh Turmeric', category: 'Spices', price: 120, unit: 'kg', farmer: 'Murugan P', location: 'Namakkal', rating: 4.6, image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400&auto=format&fit=crop' },
    { id: 5, name: 'A2 Cow Milk', category: 'Dairy', price: 80, unit: 'L', farmer: 'Gopal Krishnan', location: 'Coimbatore', rating: 4.9, image: 'https://images.unsplash.com/photo-1550583724-125581f77833?q=80&w=400&auto=format&fit=crop' },
    { id: 6, name: 'Small Onions', category: 'Vegetables', price: 45, unit: 'kg', farmer: 'Selvam R', location: 'Perambalur', rating: 4.5, image: 'https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=400&auto=format&fit=crop' },
  ];

  const filteredProducts = products.filter(p => 
    (activeCategory === 'All' || p.category === activeCategory) &&
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.farmer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-farm-light min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-5xl font-bold text-farm-green serif mb-4">Direct Marketplace</h2>
            <p className="text-gray-600 max-w-xl">
              Fresh produce directly from verified South Indian farms. Transparent pricing, no middlemen, 100% quality assured.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search produce or farmers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-6 py-4 rounded-2xl bg-white border border-farm-green/10 w-full sm:w-80 focus:ring-2 focus:ring-farm-green outline-none transition-all"
              />
            </div>
          </div>
        </div>


        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-farm-green text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-farm-green/5'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <motion.div 
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-farm-green/5 group hover:shadow-xl transition-all"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-farm-green">
                  <Star className="w-3 h-3 fill-farm-gold text-farm-gold" /> {product.rating}
                </div>
                <div className="absolute bottom-4 left-4 bg-farm-accent text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {product.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-farm-green mb-1">{product.name}</h4>
                    <div className="flex items-center gap-1 text-gray-400 text-xs font-medium">
                      <MapPin className="w-3 h-3" /> {product.location}, TN
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-farm-green serif">₹{product.price}</div>
                    <div className="text-xs text-gray-400 font-medium">per {product.unit}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-farm-light rounded-2xl mb-6">
                  <div className="w-10 h-10 rounded-full bg-farm-green/10 flex items-center justify-center text-farm-green font-bold">
                    {product.farmer[0]}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Farmer</div>
                    <div className="text-sm font-bold text-farm-green">{product.farmer}</div>
                  </div>
                  <div className="ml-auto">
                    <ShieldCheck className="w-5 h-5 text-farm-blue" />
                  </div>
                </div>

                <button className="w-full bg-farm-green text-white py-4 rounded-2xl font-bold hover:bg-farm-green/90 transition-all flex items-center justify-center gap-2 group">
                  Add to Basket <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
