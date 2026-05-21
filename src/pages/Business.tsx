import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COPY } from '../constants/copy';

// We keep the images here but sync text from COPY
const businessImages = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=75&w=1200&fm=webp', // Strategy
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=75&w=1200&fm=webp', // Tech
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=75&w=1200&fm=webp', // Distribution
  'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=75&w=1200&fm=webp'  // Marketing
];

export default function Business() {
  const { business } = COPY;
  const businessItems = business.items.map((item, idx) => ({
    ...item,
    image: businessImages[idx]
  }));

  const [activeItem, setActiveItem] = useState(businessItems[0]);

  return (
    <div className="pt-16 sm:pt-20 break-keep">
      {/* Hero - SOFT LIGHT */}
      <section className="px-4 sm:px-6 py-20 sm:py-28 md:py-36 lg:py-40 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand font-bold tracking-widest text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">{business.hero.badge}</span>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-10 tracking-tighter text-slate-900">
              {business.hero.title} <br className="hidden sm:inline" />
              <span className="text-brand">{business.hero.titleAccent}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed whitespace-pre-line px-2">
              {business.hero.subCopy}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Items - Alternating */}
      {businessItems.map((item, idx) => (
        <section 
          key={item.id} 
          className={`py-20 sm:py-28 md:py-36 lg:py-40 px-4 sm:px-6 ${idx % 2 === 0 ? 'bg-slate-900' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 sm:gap-14 lg:gap-20 items-center`}>
              <div className="lg:w-1/2 w-full">
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="text-brand font-mono font-bold mb-4 sm:mb-6 tracking-widest text-sm sm:text-base">{item.id}</div>
                  <h2 className={`text-2.5xl xs:text-3xl sm:text-4.5xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight ${idx % 2 === 0 ? 'text-white' : 'text-slate-900'}`}>{item.title}</h2>
                  <p className={`text-sm sm:text-base lg:text-lg leading-relaxed mb-6 lg:mb-0 ${idx % 2 === 0 ? 'text-slate-400' : 'text-slate-500'}`}>
                    {item.description}
                  </p>
                </motion.div>
              </div>
              <div className="lg:w-1/2 w-full">
                 <motion.div
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                 >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-slate-900/20 mix-blend-overlay"></div>
                 </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Partners CTA */}
      <section className="py-20 sm:py-28 md:py-36 lg:py-40 px-4 sm:px-6 bg-brand">
         <div className="max-w-4xl mx-auto text-center w-full px-2">
            <h2 className="text-2.5xl xs:text-3xl sm:text-4.5xl md:text-5xl lg:text-6xl font-black text-white mb-8 sm:mb-10 leading-tight">당신의 비즈니스 파트너.</h2>
            <Link to="/contact" className="inline-block text-center w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 bg-white text-brand font-black rounded-full hover:scale-105 active:scale-95 transition-all text-sm sm:text-base shadow-xl shadow-brand/10">
               프로젝트 문의하기
            </Link>
         </div>
      </section>
    </div>
  );
}
