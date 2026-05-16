import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    <div className="pt-20 break-keep">
      {/* Hero - SOFT LIGHT */}
      <section className="px-6 py-40 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand font-bold tracking-widest text-sm uppercase mb-4 block">{business.hero.badge}</span>
            <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter text-slate-900">{business.hero.title} <br /><span className="text-brand">{business.hero.titleAccent}</span></h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
              {business.hero.subCopy}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Items - Alternating */}
      {businessItems.map((item, idx) => (
        <section 
          key={item.id} 
          className={`py-40 px-6 ${idx % 2 === 0 ? 'bg-slate-900' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="text-brand font-mono font-bold mb-6 tracking-widest">{item.id}</div>
                  <h2 className={`text-4xl md:text-6xl font-black mb-8 ${idx % 2 === 0 ? 'text-white' : 'text-slate-900'}`}>{item.title}</h2>
                  <p className={`text-lg leading-relaxed ${idx % 2 === 0 ? 'text-slate-400' : 'text-slate-500'}`}>
                    {item.description}
                  </p>
                </motion.div>
              </div>
              <div className="lg:w-1/2 w-full">
                 <motion.div
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                 >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-slate-900/20 mix-blend-overlay"></div>
                 </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Partners CTA - Optional additional section or just end */}
      <section className="py-40 px-6 bg-brand">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10">당신의 비즈니스 파트너.</h2>
            <Link to="/contact" className="inline-block px-12 py-5 bg-white text-brand font-black rounded-full hover:scale-105 transition-all">
               프로젝트 문의하기
            </Link>
         </div>
      </section>
    </div>
  );
}
