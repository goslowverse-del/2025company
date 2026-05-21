import { motion } from 'motion/react';
import { Target, Users, Shield, TrendingUp } from 'lucide-react';
import { COPY } from '../constants/copy';

export default function About() {
  const { about } = COPY;

  return (
    <div className="pt-16 sm:pt-20 break-keep">
      {/* Hero - SOFT DARK */}
      <section className="px-4 sm:px-6 py-20 sm:py-28 md:py-36 lg:py-40 bg-slate-900">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 sm:mb-24 lg:mb-32 text-center"
          >
            <span className="text-brand font-bold tracking-widest text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">{about.hero.badge}</span>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-10 tracking-tighter text-white">
              {about.hero.title} <br className="hidden sm:inline" />
              <span className="text-brand">{about.hero.titleAccent}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed whitespace-pre-line px-2">
              {about.hero.subCopy}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
             <div className="bg-white/5 p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-[2rem] border border-white/10 shadow-sm w-full">
                <h3 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-10 text-white">{about.overview.title}</h3>
                <div className="space-y-4 sm:space-y-6">
                   {about.overview.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between border-b border-white/10 pb-3 sm:pb-4 text-sm sm:text-base">
                       <span className="text-slate-400 font-medium">{item.label}</span>
                       <span className="font-bold text-white">{item.value}</span>
                    </div>
                   ))}
                </div>
             </div>
             <div className="relative aspect-[4/3] sm:aspect-square shadow-2xl rounded-2xl sm:rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 w-full">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=70&w=800&fm=webp" 
                  alt="Building" 
                  className="w-full h-full object-cover opacity-80 animate-fade-in"
                  loading="lazy"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Core Values - SOFT LIGHT */}
      <section className="bg-slate-50 py-20 sm:py-28 md:py-36 lg:py-40 px-4 sm:px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto w-full">
           <h2 className="text-2.5xl xs:text-3xl sm:text-4.5xl md:text-5xl lg:text-6xl font-black mb-12 sm:mb-20 lg:mb-24 text-center text-slate-900">Core Values</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
              {about.values.map((value, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -6 }}
                  className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-slate-200 hover:border-brand transition-all flex flex-col items-center text-center group shadow-sm"
                >
                  <div className="mb-6 sm:mb-8 p-3.5 sm:p-4 bg-brand/10 rounded-full group-hover:bg-brand transition-colors">
                    <div className="text-brand group-hover:text-white transition-colors">
                      {idx === 0 && <TrendingUp size={24} />}
                      {idx === 1 && <Shield size={24} />}
                      {idx === 2 && <Target size={24} />}
                      {idx === 3 && <Users size={24} />}
                    </div>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900">{value.title}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
}
