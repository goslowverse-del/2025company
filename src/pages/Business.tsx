import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { COPY } from '../constants/copy';

// We keep the images here but sync text from COPY
const businessImages = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=100&w=2000', // Strategy
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=100&w=2000', // Tech
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=100&w=2000', // Distribution
  'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=100&w=2000'  // Marketing
];

export default function Business() {
  const { business } = COPY;
  const businessItems = business.items.map((item, idx) => ({
    ...item,
    image: businessImages[idx]
  }));

  const [activeItem, setActiveItem] = useState(businessItems[0]);

  return (
    <div className="pt-32 pb-20 break-keep">
      <section className="px-6 mb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-brand font-bold tracking-widest text-sm uppercase mb-4 block">{business.hero.badge}</span>
          <h1 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter text-dark">{business.hero.title} <br /><span className="text-brand">{business.hero.titleAccent}</span></h1>
          <p className="text-xl text-dark/50 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
            {business.hero.subCopy}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Sidebar Menu */}
          <div className="lg:w-1/4 space-y-4">
             {businessItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className={`w-full flex items-center justify-between p-6 rounded-2xl border transition-all text-left ${
                    activeItem.id === item.id 
                    ? 'bg-brand border-brand text-white shadow-lg shadow-brand/20 scale-105 z-10' 
                    : 'bg-gray-50 border-dark/5 text-dark/50 hover:border-dark/20'
                  }`}
                >
                   <div className="flex items-center gap-4">
                      <span className="font-mono text-xs opacity-50 font-bold">{item.id}</span>
                      <span className="font-bold text-lg">{item.title}</span>
                   </div>
                   <ChevronRight size={20} className={activeItem.id === item.id ? 'opacity-100' : 'opacity-0'} />
                </button>
             ))}
          </div>

          {/* Details Content */}
          <div className="lg:w-3/4">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-gray-50 rounded-[2.5rem] overflow-hidden border border-dark/5 p-8 md:p-16 shadow-xl"
                >
                   <div className="flex flex-col xl:flex-row gap-16">
                      <div className="flex-1">
                         <h2 className="text-4xl font-black mb-8 text-dark">{activeItem.title}</h2>
                         <p className="text-lg text-dark/60 leading-relaxed">
                           {activeItem.description}
                         </p>
                      </div>
                      <div className="xl:w-80">
                         <div className="aspect-[3/4] rounded-3xl overflow-hidden glass-morphism p-1 shadow-2xl">
                            <img src={activeItem.image} alt={activeItem.title} className="w-full h-full object-cover rounded-[22px] opacity-90" />
                         </div>
                      </div>
                   </div>
                </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
