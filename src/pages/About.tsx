import { motion } from 'motion/react';
import { Target, Users, Shield, TrendingUp } from 'lucide-react';
import { COPY } from '../constants/copy';

export default function About() {
  const { about } = COPY;

  return (
    <div className="pt-20 break-keep">
      {/* Hero - SOFT DARK */}
      <section className="px-6 py-40 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32 text-center"
          >
            <span className="text-brand font-bold tracking-widest text-sm uppercase mb-4 block">{about.hero.badge}</span>
            <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter text-white">{about.hero.title} <br /><span className="text-brand">{about.hero.titleAccent}</span></h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
              {about.hero.subCopy}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
             <div className="bg-white/5 p-12 rounded-[2rem] border border-white/10 shadow-sm">
                <h3 className="text-3xl font-black mb-10 text-white">{about.overview.title}</h3>
                <div className="space-y-8">
                   {about.overview.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between border-b border-white/10 pb-4">
                       <span className="text-slate-400 font-medium">{item.label}</span>
                       <span className="font-bold text-white">{item.value}</span>
                    </div>
                   ))}
                </div>
             </div>
             <div className="relative aspect-square shadow-2xl rounded-[2rem] overflow-hidden border border-white/10 bg-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                  alt="Building" 
                  className="w-full h-full object-cover opacity-80"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Core Values - SOFT LIGHT */}
      <section className="bg-slate-50 py-40 px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-4xl md:text-6xl font-black mb-24 text-center text-slate-900">Core Values</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {about.values.map((value, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-2xl border border-slate-200 hover:border-brand transition-all flex flex-col items-center text-center group shadow-sm"
                >
                  <div className="mb-8 p-4 bg-brand/10 rounded-full group-hover:bg-brand transition-colors">
                    <div className="text-brand group-hover:text-white transition-colors">
                      {idx === 0 && <TrendingUp />}
                      {idx === 1 && <Shield />}
                      {idx === 2 && <Target />}
                      {idx === 3 && <Users />}
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-slate-900">{value.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
}
