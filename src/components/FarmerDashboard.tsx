import React from 'react';
import { IndianRupee, Package, Clock, Star, Plus } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export function FarmerDashboard() {
  const stats = [
    { label: 'Total Sales', value: '₹42,500', icon: IndianRupee, color: 'text-farm-green', bg: 'bg-farm-green/10' },
    { label: 'Active Listings', value: '12', icon: Package, color: 'text-farm-blue', bg: 'bg-farm-blue/10' },
    { label: 'Pending Orders', value: '08', icon: Clock, color: 'text-farm-accent', bg: 'bg-farm-accent/10' },
    { label: 'Customer Rating', value: '4.9', icon: Star, color: 'text-farm-gold', bg: 'bg-farm-gold/10' },
  ];

  const salesData = [
    { name: 'Mon', sales: 4000 },
    { name: 'Tue', sales: 3000 },
    { name: 'Wed', sales: 5000 },
    { name: 'Thu', sales: 2780 },
    { name: 'Fri', sales: 1890 },
    { name: 'Sat', sales: 6390 },
    { name: 'Sun', sales: 8490 },
  ];

  const listings = [
    { id: 1, name: 'Small Onions', stock: '450 kg', price: '₹45/kg', status: 'Active' },
    { id: 2, name: 'Fresh Turmeric', stock: '120 kg', price: '₹120/kg', status: 'Active' },
    { id: 3, name: 'Country Tomatoes', stock: '0 kg', price: '₹30/kg', status: 'Out of Stock' },
  ];

  return (
    <div className="bg-farm-light min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-bold text-farm-green serif mb-2">Farmer Dashboard</h2>
            <p className="text-gray-500">Welcome back, Madhithyan. Here's your farm's performance.</p>
          </div>
          <button className="bg-farm-green text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-xl hover:scale-105 transition-all">
            <Plus className="w-5 h-5" /> Add New Listing
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] shadow-sm border border-farm-green/5">
              <div className={`${stat.bg} ${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-6`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-farm-green mb-1">{stat.value}</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sales Chart */}
          <div className="lg:col-span-2 bg-white p-8 rounded-[40px] shadow-sm border border-farm-green/5">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-farm-green serif">Sales Overview</h3>
              <select className="bg-farm-light border-none rounded-lg text-xs font-bold text-farm-green px-3 py-2 outline-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2E7D32" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2E7D32" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="sales" stroke="#2E7D32" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Listings */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-farm-green/5">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-farm-green serif">My Listings</h3>
              <button className="text-xs font-bold text-farm-accent hover:underline">View All</button>
            </div>
            <div className="space-y-6">
              {listings.map(item => (
                <div key={item.id} className="flex items-center justify-between p-4 rounded-2xl bg-farm-light border border-farm-green/5">
                  <div>
                    <div className="font-bold text-farm-green">{item.name}</div>
                    <div className="text-xs text-gray-400">{item.stock} • {item.price}</div>
                  </div>
                  <div className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter ${item.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 rounded-2xl border-2 border-dashed border-gray-200 text-gray-400 font-bold text-sm hover:border-farm-green hover:text-farm-green transition-all">
              Manage Inventory
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
